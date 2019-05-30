/**
 * 选择排序
 * @param {Array} array 
 */
function selectSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] < array[j]) {
                min = j;
            }
        }
        exchange(array, min, i);
    }
}

/**
 * 插入排序
 * @param {Array} array 
 */
function insertSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
            exchange(array, j, j - 1)
        }
    }
}

/**
 * 希尔排序
 * 任意间隔 h 的元素都是有序的
 * @param {Array} array 
 */
function shellSort(array) {
    let len = array.length;
    let h = 1;
    while (h < len / 3) h = 3 * h + 1;
    for (let i = h; i < len; i++) {
        for (let j = i; j >= h && array[j] < array[j - h]; j -= h ) {
                exchange(a, j, j - h);
        }
    }

}