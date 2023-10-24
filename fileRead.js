const fs = require('fs');
const readline = require('readline');
const photos = require('./photoIdStore');

process.on('exit', function (code) {
    console.log(`EXITING WITH CODE ${code}`)
})

function sandysPhotoIds() {
    const filePath = 'path/to/your/file.txt';

    const rl = readline.createInterface({
        input: fs.createReadStream(filePath),
        output: process.stdout,
        terminal: false
    });

    rl.on('line', (line) => {
        photos.sandysPhotos.push(line);
    });
    
    rl.on('close', () => {
        console.log('All lines have been read.');
    });
}

// fs.readFile('./sandys.txt', 'utf8', (err, data) => {
//     if(err) {
//     console.log(err);
//     process.kill(1)
//     }
//     photos.sandysPhotos.push(data)
// });