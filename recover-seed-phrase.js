const nsp = require('near-seed-phrase');

module.exports = function recoverSeedPhrase(seedPhrase) {
  const data = nsp.parseSeedPhrase(seedPhrase)
  return data;
}