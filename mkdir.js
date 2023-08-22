const crypto = require('crypto');
const fs = require('fs');

function sha256(pw) {
  const hash = crypto.createHash('sha256').update(pw, 'utf8').digest('hex');
  return hash;
}

function makeDirectoryWithHash(pw) {
  const dirName = 'docs/' + sha256(pw);
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
    console.log(`Directory named "${dirName}" created.`);
  } else {
    console.log(`Directory named "${dirName}" already exists.`);
  }
}

const password = process.argv[2];
if (password) {
  makeDirectoryWithHash(password);
} else {
  console.log('Please provide a password as the first argument.');
}
