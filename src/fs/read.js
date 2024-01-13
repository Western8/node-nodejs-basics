import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const pathSrc = __dirname.concat('/files/fileToRead.txt');
    try {
        const cont = await fs.readFile(pathSrc);
        console.log(cont.toString());
    } catch (err) {
        console.log(err);
        throw 'FS operation failed';
    }
};

await read();