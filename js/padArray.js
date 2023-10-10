// REMEMBER TO PSEUDOCODE
const pad = (array, minSize, value=null) => {
    if (minSize <= array.length) {
        return array
    }
    let newArr = [...array]
    let addSize = minSize - array.length
    for (let i = 0; i < addSize; i++) {
        newArr.push(value)
    }
    return newArr
}

exports.pad = pad;
