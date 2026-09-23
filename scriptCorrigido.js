const dados = {
  ex1: {
    nomeInicial: "Carlos",
    idadeAtual: 19,
    estudante: true,
  },
  ex2: {
    nomeCompleto: " carlos henrique rocha ",
    usuarioGitHub: "Carloshenrique 1611",
    cidade: "Olinda",
    estado: "Pernambuco",
    bio: "ANALISE E DESENVOLVIMENTO DE SISTEMAS (ADS) UNINASSAU",
    anoNascimento: 2026 - 2006,
  },
};

const tipoUser = {
  tipoNome: typeof dados.ex2.nomeCompleto,
  tipoUsuario: typeof dados.ex2.usuarioGitHub,
  tipoCidade: typeof dados.ex2.cidade,
  tipoEstado: typeof dados.ex2.estado,
  tipoBio: typeof dados.ex2.bio,
  tipoAno: typeof dados.ex2.anoNascimento,
};
const formatacao = {
  nomeLimpo: dados.ex2.nomeCompleto.trim(),
  bioLegivel: dados.ex2.bio.toLowerCase(),
  usuarioNormalizado: dados.ex2.usuarioGitHub
    .toLowerCase()
    .replaceAll(" ", "-"),
};

const transformacao = {
  nomeMaisc: formatacao.nomeLimpo.toUpperCase(),
  nomeMinusc: formatacao.nomeLimpo.toLowerCase(),
  nomeTitulo:
    formatacao.nomeLimpo[0].toUpperCase() +
    formatacao.nomeLimpo.slice(1).toLowerCase(),
};
const dadosFormatacao = {
  primeiraLetra: formatacao.nomeLimpo[0],
  ultimaLetra: formatacao.nomeLimpo.at(-1),
  quantidadeCaracteres: formatacao.nomeLimpo.length,
  inicialMaiuscula: formatacao.nomeLimpo[0].toUpperCase(),
};

let bioCurta = dados.ex2.bio;
if (bioCurta.length > 30) {
  bioCurta = bioCurta.slice(0, 30) + "...";
} else {
  bioCurta = "Não tem mais que 30";
}

const slice = {
  cortador: formatacao.nomeLimpo.slice(0, 5),
  cortador2: formatacao.bioLegivel.slice(0, -4),
  bioCurta,
};

const email = "carloshenrique161106@gmail.com";
const verificadoEmail = {
  contemArroba: email.includes("@"),
  terminacao: email.endsWith(".com"),
  posicaoArroba: email.indexOf("@"),
};

const resultado = {
  exerciciosDaAula: {
    ex1: dados.ex1,
    ex2: dados.ex2,
    ex3: tipoUser,
    ex4: formatacao,
    ex5: transformacao,
    ex6: dadosFormatacao,
    ex7: slice,
    ex8: verificadoEmail,
  },
};

console.log(JSON.stringify(resultado, null, 2));
