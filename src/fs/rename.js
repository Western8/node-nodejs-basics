import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const pathSrc = __dirname.concat('/files/wrongFilename.txt');
    const pathDst = __dirname.concat('/files/properFilename.md');

    try {
        await fs.access(pathSrc);
    } catch(err) {
        throw new Error('FS operation failed');
    }
    let pathDstExist = false;
    try {
        await fs.access(pathDst);
        pathDstExist = true;
    } catch(err) {
    }
    if (pathDstExist) {
        throw new Error('FS operation failed');
    };
    try {
        await fs.rename(pathSrc, pathDst)
    } catch(err) {
        console.log(err);
    }
};

await rename();