class Node {
    constructor(key, value, N) {
        this.key = key;
        this.value = value;
        this.N = N;
        this.left = null;
        this.right = null;
    }
}


export default class BST {
    constructor() {
        this.root = null;
    }

    size() {
        return this.size(this.root);
    }

    size(node) {
        if (node === null) {
            return 0;
        }
        return node.N;
    }

    get(key) {
        return this.get(this.root, key);
    }

    get(node, key) {
        if (node === null) return null;
        let cmp = node.key > key;
        if (node.key > key) {
            return this.get(node.right, key);
        } else if (node.key < key) {
            return this.get(node.left, key);
        } else {
            return node.value;
        }
    }

    put(key, value) {
        this.root = this.put(this.root, key, value);
    }

    put(node, key, value) {
        if (node === null) return new Node(key, value, 1);
        if (key < node.key) {
            node.left = put(node.left, key, value);
        } else if (key > node.key) {
            node.right = this.put(node.right, key, value);
        } else {
            node.value = value;
        }
        node.N = this.size(node.left) + this.size(node.right) + 1;
        return node;
    }

    min() {
        return this.min(this.root).key;
    }

    min(node) {
        if (node.left === null) return node;
        return this.min(node.left);
     }

     max() {
        return this.max(this.root).key;
     }

     max(node) {
         if (node.right === null) return node;
         return this.max(node.right);
     }

     select(k) {
        this.select(this.root).key;
     }

     select(node, k) {
         if (node === null) return null;
         let t = this.size(node.left);
         if (t > k) {
             return this.select(node.left, k);
         } else if (t < k) {
             return this.select(node.right, k);
         } else {
             return node;
         }
     }

     rank(key) {
        this.rank(this.root, key);
     }

     rank(node, key) {
         if (node === null) return 0;
         if (key < node.key) {
             return this.rank(node.left, key);
         } else if (key > node.key) {
             return 1 + this.size(node.left) + this.rank(node.right, k);
         } else {
             return this.size(node.left);
         }
     }

     deleteMin() {
        this.deleteMin(this.root);
     }

     deleteMin(node) {
         if (node.left === null) return node.right;
         node.left = this.deleteMin(node.left);
         node.N = this.size(node.left) + this.size(node.right) + 1;
         return node;
     }

     deleteMax() {
        this.deleteMax(this.root);
     }

     deleteMax(node) {
        if (node.right === null) return node.left;
        node.right = this.deleteMin(node.right);
        node.N = this.size(node.left) + this.size(node.right) + 1;
        return node;
     }

     delete(key) {

     }

     delete(node, key) {
         if (node === null) return null;
         if (key < node.key) {
             node.left = this.delete(node.left, key);
         } else if (key > node.key) {
             node.right = this.delete(node.right, key);
         } else {
             if (node.right === null) return node.left;
             if (node.left === null) return node.right;
             let t = node;
             node = this.min(t.right);
             node.left = t.left;
         }
         node.N = this.size(node.left) + this.size(node.right) + 1;
         return node;
     }
}