module.exports = function (arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}