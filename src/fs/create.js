import fs from 'node:fs/promises';

const create = async () => {
    const path = './files/fresh.txt';
    
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