var thaiIdCard: any = function (option) {
    throw new Error("error no new object")
}

thaiIdCard.verify = (id) => {
    if (id == null || id.length !== 13 || !/^[0-9]\d+$/.test(id)) {
        return false;
    }
    let i, sum = 0;
    for ((i = 0), (sum = 0); i < 12; i++) {
        sum += parseInt(id.charAt(i)) * (13 - i);
    }
    let check = (11 - sum % 11) % 10;
    if (check === parseInt(id.charAt(12))) {
        return true;
    }
    return false;
}


thaiIdCard.generate = () => {
    const d1 = Math.floor(Math.random() * 9) + 1;
    const d2 = Math.floor(Math.random() * 10);
    const d3 = Math.floor(Math.random() * 10);
    const d4 = Math.floor(Math.random() * 10);
    const d5 = Math.floor(Math.random() * 10);
    const d6 = Math.floor(Math.random() * 10);
    const d7 = Math.floor(Math.random() * 10);
    const d8 = Math.floor(Math.random() * 10);
    const d9 = Math.floor(Math.random() * 10);
    const d10 = Math.floor(Math.random() * 10);
    const d11 = Math.floor(Math.random() * 10);
    const d12 = Math.floor(Math.random() * 10);
    let d13;
    let n13 = 11 - (((d1 * 13) + (d2 * 12) + (d3 * 11) + (d4 * 10) + (d5 * 9) + (d6 * 8) + (d7 * 7) + (d8 * 6) + (
        d9 * 5) + (d10 * 4) + (d11 * 3) + (d12 * 2)) % 11);
    if (n13 >= 10) {
        d13 = n13 - 10;
    } else {
        d13 = n13;
    }
    const cid = `${d1}${d2}${d3}${d4}${d5}${d6}${d7}${d8}${d9}${d10}${d11}${d12}${d13}`;
    return cid;
}

module.exports = {
    name: 'ThaiIdCard',
    verify: thaiIdCard.verify,
    generate: thaiIdCard.generate
};


