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
    while (h > 1) {
        for (let i = h; i < len; i++) {
            for (let j = i; j >= h && array[j] < array[j - h]; j -= h ) {
                    exchange(a, j, j - h);
            }
        }
        h = h / 3;
    }
    
}

/**
 * 归并排序，归并方法
 * 将 [lo...mid] 和 [mid+1...hi] 进行归并
 * @param {Array} array 
 * @param {Number} lo 
 * @param {Number} mid
 * @param {Number} hi 
 */
function merge(array, lo, mid,  hi) {
    let tempArray = [];
    let i = lo;
    let j = mid + 1;

    // 复制数组
    for (let k = lo; k <= hi; k++) {
        tempArray.push(array[k]);
    }
    // 合并
    for (let k = lo; k <= hi; k++) {
        if (i > mid) 
            tempArray[k] = array[j++];
        else if (j > hi) {
            tempArray[k] = array[i++];
        } else if (array[i] < array[j]) 
            tempArray[k] = array[i++];
        else 
            tempArray[k] = array[k++];
    }
}

/**
 * 归并排序
 * @param {Array} array 
 * @param {Number} lo
 * @param {Number} hi
 */
function mergeSort(array, lo, hi) {
    if (hi <= lo)
        return;
    let mid = lo + (hi - lo) / 2;
    // 排序左边
    mergeSort(array, lo, mid);
    // 排序右边
    mergeSort(array, mid + 1, hi);
    // 合并
    merge(array, lo, mid, hi);
}


/**
 * 快速排序，找寻中位数 j 的方法
 * @param {Array} array 
 * @param {Number} lo 
 * @param {Number} hi 
 */
function partition(array, lo, hi) {
    let i = lo;
    let j = hi + 1;
    let v = array[lo];

    while (true) {
        while (array[i++] > v) if (i == j) break;
        while (array[j--] < v) if (i == j) break;
        if (i >= j) 
            break;
        exchange(array, i, j); 
    }

    return j;
}

/**
 * 快速排序
 * @param {Array} array 
 * @param {Number} lo 
 * @param {Number} hi 
 */
function quickSort(array, lo, hi) {
    if (lo > hi) {
        return;
    }

    let j = partition(array, lo, hi);
    quickSort(array, lo, j - 1);
    quickSort(array, j + 1, hi);
}