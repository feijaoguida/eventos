export default class Senha {
  static nova(tamanho: number = 15): string {
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
}
