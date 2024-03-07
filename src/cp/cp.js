import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathWorker = __dirname.concat('/files/script.js');

const spawnChildProcess = async (args) => {
    fork(pathWorker, args);
    /*
    const worker = fork(pathWorker, args);
    worker.on('message', msg => {
        process.stdout.write(`Received from child process: ${msg}`);
    })
    */
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
