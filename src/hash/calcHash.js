import crypto from 'crypto';
import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    const pathSrc = __dirname.concat('/files/fileToCalculateHashFor.txt');
    const file = await fs.open(pathSrc);
    const readableStream = file.createReadStream();
    readableStream.on('data', async (chunk) => {
        hash.update(chunk);
    })
    readableStream.on('end', async () => {
        const res = hash.digest('hex');
        console.log('hash: ', res);
    })
};

await calculateHash();