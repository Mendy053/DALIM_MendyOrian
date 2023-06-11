const stepA = function (number) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (number === 100) {
                res(101)
            }
            else {
                rej(102)
            }
        }, 2000)
    })
}

const stepB = function (code) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (code === 101) {
                res("its ok")
            }
            else {
                rej("big nono")
            }
        }, 2000)
    })
}

const stepC = function (mood) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (mood.includes("ok")) {
                res("got you")
            } else {
                rej("whattttt")
            }
        }, 2000);
    })
}



stepA(190)
.then(stepB)
.then(stepC)
.then(ms => console.log(ms))
.catch(err => console.log(err))
.finally(() => console.log("m"))