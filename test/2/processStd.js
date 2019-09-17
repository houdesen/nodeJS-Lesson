var message = {};
var i = 1;

const msg = ['Name', 'Email', 'QQ', 'Mobile'];

process.stdout.write(msg[i-1] + ': ');

process.stdin.on('data', (data) => {
    message[msg[i-1]] = data.slice(0, data.length - 1).toString('utf8');
    if(i === 4) {
        console.log(message);
        process.exit();
    } else {
        process.stdout.write(msg[i++] + ': ');
    }
  
});

process.stdin.on('end', () => {
  console.log(message);
});
