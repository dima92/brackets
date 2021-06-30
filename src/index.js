module.exports = function check(str, bracketsConfig) {
    let newConfig = []
    bracketsConfig.forEach((el) => {
        newConfig.push(el.join(''))
    })

    let search = 1, l

    while (search) {
        search = 0
        newConfig.forEach((el) => {
            l = str.length
            str = str.replace(el, '')
            if (l > str.length) search++
        })
    }

    return str.length === 0
}
