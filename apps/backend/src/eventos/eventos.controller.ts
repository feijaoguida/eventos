import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import {
  Evento,
  eventos,
  Data,
  Id,
  Convidado,
  complementarEvento,
  complementarConvidado,
} from 'core';
import { EventoPrisma } from './evento.prisma';

@Controller('eventos')
export class EventosController {
  constructor(readonly repo: EventoPrisma) {}

  @Post()
  async salvarEvento(@Body() evento: Evento) {
    const eventoCadastrado = await this.repo.buscaPorAlias(evento.alias);

    if (eventoCadastrado && eventoCadastrado.id !== evento.id) {
      throw new Error('Já existe um evento com esse alias');
    }

    const eventoCompleto = complementarEvento(this.deserializar(evento));
    const retorno = await this.repo.salvar(eventoCompleto);
    return retorno?.id;
  }

  @Post(':alias/convidado')
  async salvarConvidado(
    @Param('alias') alias: string,
    @Body() convidado: Convidado,
  ) {
    const evento = await this.repo.buscaPorAlias(alias);
    if (!evento) {
      throw new Error('Evento não encontrado');
    }

    const convidadoCompleto = complementarConvidado(convidado);

    const convidadoCadastrado = await this.repo.salvarConvidado(
      evento,
      convidadoCompleto,
    );

    return 'Convidado Cadastrado com Sucesso';
  }

  @Post('acessar')
  async accessarEvento(@Body() dados: { id: string; senha: string }) {
    const evento = await this.repo.buscaPorId(dados.id, true);

    if (!evento) {
      throw new HttpException('Evento ou Senha Invalidos', 400);
    }

    if (evento.senha !== dados.senha) {
      throw new HttpException('Evento ou Senha Invalidos', 400);
    }

    return this.serializar(evento);
  }

  @Get()
  async buscarEventos() {
    const eventos = await this.repo.buscarTodos();
    return eventos.map(this.serializar);
  }

  @Get(':idOuAlias')
  async buscarEvento(@Param('idOuAlias') idOuAlias: string) {
    let evento: Evento;
    if (Id.valido(idOuAlias)) {
      evento = await this.repo.buscaPorId(idOuAlias, true);
    } else {
      evento = await this.repo.buscaPorId(idOuAlias, true);
    }

    return this.serializar(evento);
  }

  @Get('/validar/:alias/:id')
  async validarAlias(@Param('alias') alias: string, @Param('id') id: string) {
    const evento = await this.repo.buscaPorAlias(alias);
    return { valido: !evento || evento.id === id };
  }

  private serializar(evento: Evento) {
    if (!evento) return null;
    return {
      ...evento,
      data: Data.formatar(evento.data),
    };
  }

  private deserializar(evento: any): Evento {
    if (!evento) return null;
    return {
      ...evento,
      data: Data.desformatar(evento.data),
    };
  }
}
