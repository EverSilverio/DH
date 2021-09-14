module.exports = function (arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result -= arr[i];
    }
    return result;
}