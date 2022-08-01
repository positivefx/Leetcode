
var MyQueue = function() {
    this.enque = [];
    this.deque = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.enque.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.deque.length === 0) {
        while (this.enque.length > 0) {
            this.deque.push(this.enque.pop())
        }
    }
    return this.deque.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.deque.length === 0) {
        while (this.enque.length > 0) {
            this.deque.push(this.enque.pop())
        }
    }
    return this.deque[this.deque.length-1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.enque.length === 0 && this.deque.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */