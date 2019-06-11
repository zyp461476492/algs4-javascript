/**
 * 大根堆
 * @author zhangyp
 */

export default class MaxPriorityQueue {
    constructor() {
        this.pointer = 0;
        this.array = [];
    }

    /**
     * 根据 array 构造一个大根堆
     * @param {Array} keyList 
     */
    constructor(keyList) {
        this.pointer = 0;
        this.array = [];
        for (let i = 0; i < keyList.length; i++) {
            this.array[++this.pointer] = keyList[i];
        }
        // 执行上浮操作进行排序
        this.swim(this.pointer);
    }

    /**
     * 往大根堆里插入一个数据 
     * 插入 value 至数组尾部，同时执行上浮操作，进行由下至上的堆有序化
     * @param {*} value 
     */
    insert(value) {
        this.array[++this.pointer] = value;
        this.swim(this.pointer);
    }

    /**
     * 删除大根堆里最大的元素，即 array [0]
     * 同时执行下沉操作，由上至下的堆有序化
     */
    delMax() {
        let max = this.array[1];
        // 交换根节点和最后一个元素的位置
        this.exch(1, this.pointer--);
        this.sink(1);
        return max;
    }

    /**
     * 从 k 的位置，由下至上的堆有序化-上浮
     * @param {Number} k
     */
    swim(k) {
        while (k > 0 && this.less(k / 2, k)) {
            this.exch(k / 2, k);
            k = k / 2;
        }
    }

    /**
     * 从 k 的位置，由上至下的堆有序化-下沉
     * @param {Number} k 
     */
    sink(k) {
        let len = this.array.length;
        while (2 * k < len) {
            let j = 2 * k; // 左孩子
            // 找到子树中，最大的元素
            while (j < len && this.less(j, j + 1)) j++;
            // 如果 k 所在位置 不小于子树中最大的元素，则跳出循环
            if (!this.less(k, j)) break;
            // 否则，交换位置，从 j 的位置继续下沉
            this.exch(k, j);
            k = j;
        }
    }

    /**
     * 返回最大元素
     */
    max() {
        return this.max;
    }

    isEmpty() {
        return this.pointer === 0;
    }

    size() {
        return this.pointer;
    }

    less(i, j) {
        return this.array[i] < this.array[j];
    }

    /**
     * 交换数组中两个元素位置
     * @param {Number} i 
     * @param {Number} j 
     */
    exch(i, j) {
        let temp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp;
    }


}
