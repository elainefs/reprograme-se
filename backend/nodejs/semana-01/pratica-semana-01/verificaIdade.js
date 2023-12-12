const date_fns = require("date-fns");

function eMaior(nascimento) {
  nascimento = nascimento.split("/");

  var dataNascimento = new Date(nascimento[2], nascimento[1], nascimento[0]);

  var idade = date_fns.differenceInYears(new Date(), dataNascimento);

  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  eMaior,
};
