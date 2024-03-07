import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const pathDst = __dirname.concat('/files/fileToWrite.txt');
    const writeableStream = fs.createWriteStream(pathDst);    
    process.stdin.on('data', (chunk) => {
        writeableStream.write(chunk.toString());
    })
};

await write();
