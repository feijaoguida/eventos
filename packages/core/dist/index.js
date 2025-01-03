"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Alias: () => Alias,
  Id: () => Id,
  Senha: () => Senha,
  complementarConvidado: () => complementarConvidado,
  complementarEvento: () => complementarEvento,
  criarConvidadoVazio: () => criarConvidadoVazio,
  criarEventoVazio: () => criarEventoVazio,
  eventos: () => Eventos_default
});
module.exports = __toCommonJS(index_exports);

// src/constants/Eventos.ts
var eventos = [
  {
    id: "xdlhnq5lwm-esmllp6nie-hzgl0ajulz7",
    alias: "evento-fullstack",
    senha: "senha123",
    nome: "Evento de Desenvolvimento Fullstack",
    data: /* @__PURE__ */ new Date("2024-12-01T10:00:00Z"),
    local: "S\xE3o Paulo, SP",
    descricao: "Um evento completo para aprender desenvolvimento fullstack do zero.",
    imagem: "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    imagemBackground: "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    publicoEsperado: 200,
    convidados: [
      {
        id: "h1g2x30pglq-2qy7mc3nd8h-qq494djtbcq",
        nome: "Alice Silva",
        email: "alice@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      },
      {
        id: "unzgczdy0gp-uqljtf756de-ibfnezyz5f",
        nome: "Carlos Pereira",
        email: "carlos@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      },
      {
        id: "hqzmy1wi9gl-rgmibulirh-1k2twwu6waj",
        nome: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2
      }
    ]
  },
  {
    id: "2kis8yvhcvv-8um289gg1x5-zw08j0ciytk",
    alias: "evento-js-avancado",
    senha: "js2024",
    nome: "Workshop Avan\xE7ado de JavaScript",
    data: /* @__PURE__ */ new Date("2024-11-20T15:00:00Z"),
    local: "Rio de Janeiro, RJ",
    descricao: "Um workshop avan\xE7ado para programadores JavaScript.",
    imagem: "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    imagemBackground: "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    publicoEsperado: 100,
    convidados: [
      {
        id: "epy7dvzdn-h5ffojxd8xf-4u3dbflvkcs",
        nome: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      },
      {
        id: "q5pb671a0e-3a1txyighat-sbu67d47s8",
        nome: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      }
    ]
  },
  {
    id: "5nef2v2sxhl-80hjydv7qd5-fddre4x4oyr",
    alias: "evento-dev-frontend",
    senha: "front123",
    nome: "Bootcamp de Desenvolvimento Frontend",
    data: /* @__PURE__ */ new Date("2024-11-15T09:00:00Z"),
    local: "Belo Horizonte, MG",
    descricao: "Aprenda a criar interfaces incr\xEDveis e responsivas.",
    imagem: "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    imagemBackground: "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    publicoEsperado: 150,
    convidados: [
      {
        id: "8tpp19ouoqi-6nm51io1n5a-lw6itbwufu",
        nome: "Gabriela Rocha",
        email: "gabriela@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      },
      {
        id: "a22ufkd5y2-6quz4dv5wln-qbbzwq551zs",
        nome: "Hugo Nogueira",
        email: "hugo@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      },
      {
        id: "cyy99oylu4w-s6c387plg5k-uyieywntrh",
        nome: "Isabela Martins",
        email: "isabela@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "oz9uvdydcd-nql21g818sa-dwvqulair8l",
    alias: "casamento-alberto-marina",
    senha: "casamento2024",
    nome: "Casamento do Alberto e Marina",
    data: /* @__PURE__ */ new Date("2024-11-25T16:00:00Z"),
    local: "Florian\xF3polis, SC",
    descricao: "Celebra\xE7\xE3o do casamento de Alberto e Marina com amigos e familiares.",
    imagem: "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    imagemBackground: "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    publicoEsperado: 150,
    convidados: [
      {
        id: "6odwyyikpiu-4rm8d4upd7a-2ve4yb8dq2",
        nome: "Bruno Cardoso",
        email: "bruno@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      },
      {
        id: "eg7lxxznuva-d4cnx48ijqt-iz6xznoo5ts",
        nome: "Carla Mendes",
        email: "carla@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "muowo4f7k89-b93nq8qxqqd-0noa74ohiw9",
    alias: "aniversario-joao",
    senha: "joao2024",
    nome: "Anivers\xE1rio do Jo\xE3o - 30 Anos",
    data: /* @__PURE__ */ new Date("2024-12-05T18:00:00Z"),
    local: "Curitiba, PR",
    descricao: "Comemora\xE7\xE3o dos 30 anos de Jo\xE3o com amigos pr\xF3ximos e familiares.",
    imagem: "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    imagemBackground: "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    publicoEsperado: 80,
    convidados: [
      {
        id: "ir1r1ucu2od-461dkhc72tm-ydo4met07uj",
        nome: "Maria Souza",
        email: "maria@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2
      },
      {
        id: "95qacnirxwr-ffuhv3s0nd9-nsu3rl4djee",
        nome: "Jos\xE9 Almeida",
        email: "jose@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "81ks0oozc35-ljvo5a8rqzg-qt28hdn6vge",
    alias: "inauguracao-loja-estrela",
    senha: "estrela2024",
    nome: "Inaugura\xE7\xE3o da Loja Estrela",
    data: /* @__PURE__ */ new Date("2024-12-10T09:00:00Z"),
    local: "Porto Alegre, RS",
    descricao: "Evento de inaugura\xE7\xE3o da nova loja Estrela com brindes e promo\xE7\xF5es.",
    imagem: "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    imagemBackground: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    publicoEsperado: 300,
    convidados: [
      {
        id: "c1a5x0qgus-cfswa77ods5-z4nn6bezylp",
        nome: "Cl\xE1udia Lima",
        email: "claudia@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 3
      },
      {
        id: "npsgd64c31a-c30fsot6cpk-sbsuwwahdda",
        nome: "Ricardo Barbosa",
        email: "ricardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "i3sg2jyquog-vnku4n38v4-6dibxujxr56",
    alias: "reuniao-familia-oliveira",
    senha: "familia2024",
    nome: "Reuni\xE3o da Fam\xEDlia Oliveira",
    data: /* @__PURE__ */ new Date("2024-12-15T12:00:00Z"),
    local: "Salvador, BA",
    descricao: "Reuni\xE3o de fim de ano da fam\xEDlia Oliveira.",
    imagem: "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    imagemBackground: "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    publicoEsperado: 50,
    convidados: [
      {
        id: "oqsjw6lyayh-q9b8sxtkvu-9cmebgi34ru",
        nome: "Thiago Oliveira",
        email: "thiago@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 4
      },
      {
        id: "1wrml69nqd7-re2ywt674ic-vw5dbfxoj4q",
        nome: "Let\xEDcia Oliveira",
        email: "leticia@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  }
];
var Eventos_default = eventos;

// src/evento/functions/validarConvidado.ts
function validarConvidado(convidado) {
  const erros = [];
  if (!convidado.nome) {
    erros.push("Nome \xE9 obrigat\xF3rio");
  }
  if (!convidado.email) {
    erros.push("E-mail \xE9 obrigat\xF3rio");
  }
  return erros;
}

// src/evento/functions/complementarConvidado.ts
function complementarConvidado(convidado) {
  const erros = validarConvidado(convidado);
  if (erros.length > 0) {
    throw new Error(erros.join("\n"));
  }
  const qtdeAcompanhantes = convidado.qtdeAcompanhantes ?? 0;
  const temAcompanhantes = convidado.possuiAcompanhantes && convidado.confirmado && qtdeAcompanhantes > 0;
  const convidadoAtualizado = {
    ...convidado,
    qtdeAcompanhantes: temAcompanhantes ? temAcompanhantes : 0,
    possueAcompanhates: temAcompanhantes
  };
  return convidadoAtualizado;
}

// src/evento/functions/validarEvento.ts
function validarEvento(evento) {
  const erros = [];
  if (!evento.alias) {
    erros.push("Alias \xE9 obrigat\xF3rio");
  }
  if (!evento.nome) {
    erros.push("Nome \xE9 obrigat\xF3rio");
  }
  if (!evento.descricao) {
    erros.push("Descri\xE7\xE3o \xE9 obrigat\xF3ria");
  }
  if (!evento.data) {
    erros.push("Data \xE9 obrigat\xF3ria");
  }
  if (!evento.local) {
    erros.push("Local \xE9 obrigat\xF3rio");
  }
  if (!evento.publicoEsperado || evento.publicoEsperado < 1) {
    erros.push("P\xFAblico esperado \xE9 obrigat\xF3rio");
  }
  if (!evento.imagem) {
    erros.push("Imagem \xE9 obrigat\xF3ria");
  }
  if (!evento.imagemBackground) {
    erros.push("Imagem de fundo \xE9 obrigat\xF3ria");
  }
  return erros;
}

// src/shared/Id.ts
var Id = class {
  static novo() {
    return `${this.hash()}-${this.hash()}-${this.hash()}`;
  }
  static hash() {
    return Math.random().toString(36).substring(2, 15);
  }
};

// src/shared/Alias.ts
var Alias = class {
  static formatar(valor) {
    return valor.replace(/ /g, "-").toLowerCase();
  }
};

// src/shared/Senha.ts
var Senha = class {
  static nova(tamanho = 15) {
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const caracteresEspeciais = "!@#$%&*";
    const grupos = [minusculas, maiusculas, numeros, caracteresEspeciais];
    const senha = [];
    for (let i = 0; i < tamanho; i++) {
      const grupo = grupos[Math.floor(Math.random() * grupos.length)];
      const caractere = grupo.charAt(Math.floor(Math.random() * grupo.length));
      senha.push(caractere);
    }
    return senha.join("");
  }
};

// src/evento/functions/complementarEvento.ts
function complementarEvento(eventoParcial) {
  const erros = validarEvento(eventoParcial);
  if (erros.length) {
    throw new Error(erros.join("\n"));
  }
  const evento = {
    ...eventoParcial,
    id: eventoParcial.id ?? Id.novo(),
    senha: eventoParcial.senha ?? Senha.nova(),
    publicoEsperado: +(eventoParcial.publicoEsperado ?? 1)
  };
  return evento;
}

// src/evento/functions/criarConvidadoVazio.ts
function criarConvidadoVazio() {
  return {
    id: Id.novo(),
    nome: "",
    email: "",
    confirmado: true,
    possuiAcompanhantes: false,
    qtdeAcompanhantes: 0
  };
}

// src/evento/functions/criarEventoVazio.ts
function criarEventoVazio() {
  return {
    id: Id.novo(),
    nome: "",
    descricao: "",
    data: /* @__PURE__ */ new Date(),
    local: "",
    publicoEsperado: 1,
    imagem: "",
    imagemBackground: ""
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alias,
  Id,
  Senha,
  complementarConvidado,
  complementarEvento,
  criarConvidadoVazio,
  criarEventoVazio,
  eventos
});
