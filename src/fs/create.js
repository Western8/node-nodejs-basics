import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const path = __dirname.concat('/files/fresh.txt');
    let fileExist = false;
    try {
        await fs.access(path);
        fileExist = true;
    } catch(err) {
    }
    if (fileExist) {
        throw 'FS operation failed'
    };
    try {
        await fs.writeFile(path, 'I am fresh and young');
    } catch(err) {
        console.error(err);
    }
};

await create();