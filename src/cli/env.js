const parseEnv = () => {
    const prefix = 'RSS_';
    const arr = Object.keys(process.env).filter(item => item.startsWith(prefix));
    const arrNew = arr.map(item => `${item}=${process.env[item]}`);
    const res = arrNew.join('; ');
    console.log(res);
};

parseEnv();