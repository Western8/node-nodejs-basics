import zlib from 'zlib';
import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const pathSrc = __dirname.concat('/files/archive.gz');
    const pathDst = __dirname.concat('/files/fileToCompress.txt');

    const readableStream = fs.createReadStream(pathSrc);
    const writeableStream = fs.createWriteStream(pathDst);
    const decompressStream = zlib.createGunzip();

    readableStream.pipe(decompressStream).pipe(writeableStream);
};

await decompress();