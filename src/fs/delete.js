import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const pathSrc = __dirname.concat('/files/fileToRemove.txt');
    try {
        await fs.rm(pathSrc);
    } catch(err) {
        console.log(err);        
        throw 'FS operation failed';
    }
};

await remove();