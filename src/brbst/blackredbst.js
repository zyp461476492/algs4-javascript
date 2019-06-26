const RED = true;
const BLACK = false;

class Node {
    constructor(key, value, N, color) {
        this.key = key;
        this.value = value;
        this.N = N;
        this.left = null;
        this.right = null;
        this.color = color;
    }
}

/**
 * 计算长度
 * @param {Node} node 
 */
function size(node) {
    if (node === null) {
        return 0;
    }
    return node.N;
}

/**
 * 是否会红节点
 * @param {Node} node 
 */
function isRed(node) {
    if (node === null) return false;
    return node.color === RED;
}

/**
 * 坐旋转，将node和node.right位置互换，同时进行调整
 * @param {Node} node 
 */
function rotateLeft(node) {
    let x = node.right;
    node.right = x.left;
    x.left = node;
    x.color = node.color;
    node.color = RED;
    x.N = node.N;
    node.N = 1 + size(node.left) + size(node.right);
    return x;
}

/**
 * 右旋转 
 * @param {Node} node 
 */
function rotateRight(node) {
    let x = node.left;
    node.left = x.right;
    x.right = node;
    x.color = node.color;
    node.color = RED;
    x.N = node.N;
    node.N = 1 + size(node.left) + size(node.right);
    return x;
}

function flipColors(node) {
    node.color = RED;
    node.left.color = BLACK;
    node.right.color = BLACK;

}

function put(node, key, value) {
    if (node === null) {
        return new Node(key, value, 1, RED);
    }

    if (key < node.key) {
        node.left = put(node.left, key, value);
    } else if (key > node.key) {
        node.right = put(node.right, key, value);
    } else {
        node.value = value;
    }

    if (isRed(node.right) && !isRed(node.left)) node = rotateLeft(node);
    if (isRed(node.left) && isRed(node.left.left)) node = rotateRight(node);
    if (isRed(node.right) && isRed(node.left)) node = flipColors(node);

    node.N = 1 + size(node.left) + size(node.right);
    return node;
}

/**
 * 红黑树定义
 * 1- 红链接均为左链接
 * 2- 没有任何一个节点同时和两条红链接想连。
 * 3- 该树是完美黑色平衡，即任意空链接到根节点的路径上的黒链接数量相同
 */
export default class BlackRedBst {
    constructor() {
        this.root = null;
    }

    put(key, value) {
        this.root = put(this.root, key, value);
        this.root.color = BLACK;
    }
}