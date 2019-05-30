/**
 * 交换数组中两个元素
 * @param {Array} a 
 * @param {*} x 
 * @param {*} y 
 */
function exchange(a, x, y) {
    let t = a[x];
    a[x] = a[y];
    a[y] = t;
}

/**
 * 在控制台输出 array
 * @param {Array} array 
 */
function show(array) {
    for (let i in array) {
        console.log(i + " ");
    }
}