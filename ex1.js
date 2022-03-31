class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    push(val) {
        const newNode = new Node(val)
        if (!this.size) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.size++
    }

    pop() {
        if (!this.size) return null
        let node = this.head
        this.head = this.head.next
        node.next = null

        this.size--
        return node.val
    }

    peek() {
        return this.head.val
    }

    empty() {
        return this.size === 0
    }
}

class Stack {
    constructor() {
        this.queue = new Queue()
    }

    push(val) {
        let size = this.queue.size
        this.queue.push(val)

        while (size) {
            const first = this.queue.pop()
            this.queue.push(first)
            size--
        }
    }

    pop() {
        return this.queue.pop()
    }

    top() {
        return this.queue.peek()
    }

    empty() {
        return this.queue.empty()
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.pop())