const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() { this.base = null; }

  root() { return this.base; }

  add(data, node = this.base) {
    if (this.base === null) {
      this.base = new Node(data);
    }
    else if (node.data > data) {
      node.left === null ? node.left = new Node(data) : this.add(data, node.left);
    }
    else if (node.data < data) {
      node.right === null ? node.right = new Node(data) : this.add(data, node.right);
    }
    return this;
  }

  has(data, node = this.base) {
    if (this.base === null) {
      return false;
    }
    else if (node.data === data) {
      return true;
    }
    else if (node.data > data && node.left) {
      return this.has(data, node.left);
    }
    else if (node.data < data && node.right) {
      return this.has(data, node.right);
    }
    else {
      return false;
    }
  }

  find(data, node = this.base) {
    if (this.base === null) {
      return null;
    }
    else if (node.data === data) {
      return node;
    }
    else if (node.data > data && node.left) {
      return this.find(data, node.left);
    }
    else if (node.data < data && node.right) {
      return this.find(data, node.right);
    }
    else {
      return null;
    }
  }

  remove(data) {
    this.base = removeData(this.base, data);

    function removeData(elem, data) {
      if (!elem) {
        return null;
      }

      if (data < elem.data) {
        elem.left = removeData(elem.left, data);
        return elem;
      }
      else if (data > elem.data) {
        elem.right = removeData(elem.right, data);
        return elem;
      }
      else {
        if (!elem.left && !elem.right) {
          return null;
        }

        if (!elem.left) {
          elem = elem.right;
          return elem;
        }

        if (!elem.right) {
          elem = elem.left;
          return elem;
        }

        let minRight = elem.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        elem.data = minRight.data;
        elem.right = removeData(elem.right, minRight.data);

        return elem;
      }
    }
  }

  min() {
    if (!this.base) return null;

    let elem = this.base;

    while (elem.left) {
      elem = elem.left;
    }

    return elem.data;
  }

  max() {
    if (!this.base) return null;

    let elem = this.base;

    while (elem.right) {
      elem = elem.right;
    }

    return elem.data;
  }
}

module.exports = {
  BinarySearchTree
};