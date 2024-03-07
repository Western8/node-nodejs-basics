import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const pathSrc = __dirname.concat('/files/fileToRead.txt');
    const readableStream = fs.createReadStream(pathSrc);
    readableStream.on('data', async (chunk) => {
        process.stdout.write(chunk);
    })
};

await read();
