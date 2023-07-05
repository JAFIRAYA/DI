const fs = require('fs');

fs.readFile('RightLeft', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

 
  let pos = 0;
  let step = 0;

  for (let i = 0; i < data.length; i++) {
    const symbol = data[i];

    if (symbol === '>') {
      pos += 1;
      step += 1;
    } else if (symbol === '<') {
      pos -= 1;
      step += 1;
    }
  }

  console.log(` position: ${pos}`);
  console.log(` steps: ${step}`);


  pos = 0;
  step = 0;

  while (pos !== -1) {
    const symbol = data[step % data.length];

    if (symbol === '>') {
      pos += 1;
      step += 1;
    } else if (symbol === '<') {
      pos -= 1;
      step += 1;
    }
  }

  console.log(`Steps needed to hit position -1: ${step}`);
});


