import { Worker } from 'node:worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const cpu = os.cpus().length;
    const pathWorker = __dirname.concat('/worker.js');
    const promises = [];

    for (let i = 0; i < cpu; i++) {
        const data = i + 10;
        const worker = new Worker(pathWorker);
        const promise = new Promise((resolve, reject) => {
            worker.on('message', msg => {
                resolve(msg.res);
            });
            worker.on('error', msg => {
                reject();
            });
        });

        worker.postMessage(data);
        promises.push(promise);
    }

    Promise.allSettled(promises)
        .then(res => {
            const results = res.map(item => {
                const result = {};
                if (item.status === 'fulfilled') {
                    result.status = 'resolved';
                    result.data = item.value;
                }
                if (item.status === 'rejected') {
                    result.status = 'error';
                    result.data = null;
                }
                return result;
            });
            console.log('Results: ', results);
            process.exit();
        });
};

await performCalculations();
