import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const pathSrc = __dirname.concat('/files/');
    let files = [];
    try {
        files = await fs.readdir(pathSrc);
    } catch (err) {
        console.log(err);
        throw 'FS operation failed';
    }
    files.forEach((item) => {
        console.log(item);
    });
};

await list();