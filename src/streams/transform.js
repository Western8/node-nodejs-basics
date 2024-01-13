import { Transform } from 'node:stream';

function reverseStr(str) {
    return str.slice(0, -1).split('').reverse().join('').concat('\n');
}

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, cb) {
            cb(null, reverseStr(chunk.toString()));
        }
    })
    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();