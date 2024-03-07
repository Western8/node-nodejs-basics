const parseArgs = () => {
    const res = [];
    const arr = Array.from(process.argv).slice(2);
    arr.forEach((item, index) => {
        if (index % 2 === 0) {
            res.push(`${item.slice(2)} is ${arr[index+1]}`);
        }
    })
    console.log(res.join(', '));    
};

parseArgs();