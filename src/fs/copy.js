import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function copyFile(fileSrc, fileDst) {
    try {
        await fs.copyFile(fileSrc, fileDst)
    } catch(err) {
        console.error(err);
    }
}

const copy = async () => {
    const pathSrc = __dirname.concat('/files/');
    const pathDst = __dirname.concat('/files_copy/');

    try {
        await fs.access(pathSrc);
    } catch(err) {
        throw new Error('FS operation failed');
    }
    let dirDstExist = false;
    try {
        await fs.access(pathDst);
        dirDstExist = true;
    } catch(err) {
    }
    if (dirDstExist) {
        throw new Error('FS operation failed');
    };
    await fs.mkdir(pathDst);

    const files = await fs.readdir(pathSrc);
    files.forEach((item) => {
        const fileSrc = pathSrc.concat(item);
        const fileDst = pathDst.concat(item);
        copyFile(fileSrc, fileDst);
    });
};

await copy();
