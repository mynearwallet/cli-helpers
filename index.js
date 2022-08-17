const recoverSeedPhrase = require('./recover-seed-phrase');

const yargs = require('yargs');

yargs.scriptName('mnw-helper')
  .usage('$0 <cmd> [args]')
  .command('show-public-key [seedPhrase]', 'Build PublicKey from seed phrase', function (yargs) {
    yargs.positional('seedPhrase', {
      describe: 'Your seed phrase',
      type: 'string'
    });
  }, function (argv) {
    const data = recoverSeedPhrase(argv.seedPhrase);
    if (!data.secretKey) {
      console.log("    ")
      console.log("Seed phrase is invalid")
    } else {
      console.log("    ")
      console.log("Public key: " + data.publicKey);
    }
  }).help().argv