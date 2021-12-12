import * as Console from "console";

class Leaf<T> {
    public _data: T;
    public _left: Leaf<T> | null;
    public _right: Leaf<T> | null;

    constructor(data: T) {
        this._data = data;
        this._left = null;
        this._right = null;
    }
}

export class Tree<T> {
    private _root: Leaf<T> | null;

    constructor() {
        this._root = null;
    }

    public insert(x:T): void {
        if (this._root == null) {
            this._root = new Leaf<T>(x);
            return;
        }

        let node:Leaf<T> = this._root;
        while (true) {
            if (x < node._data) {
                if (node._left == null) {
                    node._left = new Leaf<T>(x);
                    return;
                } else {
                    node = node._left;
                }
            } else if (x >= node._data) {
                if (node._right == null) {
                    node._right = new Leaf<T>(x);
                    return;
                } else {
                    node = node._right;
                }
            } else {
                return;
            }
        }
    }

    public getLeaf(value: T): T | null {
        if (this._root == null) {
            return null;
        }

        if(this._root._data == value) {
            Console.log("Can't delete root");
            return this._root._data;
        }

        let node:Leaf<T> = this._root;
        while (true) {
            if (value < node._data) {
                if (node._left == null) {
                    Console.log("Leaf is missed")
                    return null;
                }
                else
                if (node._left._data == value) {
                    return node._left._data;
                } else {
                    node = node._left;
                }
            } else if (value >= node._data) {
                if (node._right == null) {
                    Console.log("Leaf is missed")
                    return null;
                } else if (node._right._data == value) {
                    return node._right._data;
                }
                else {
                    node = node._right;
                }
            } else {
                Console.log("Leaf is missed")
                return null;
            }
        }

    }

    public delLeaf(value: T) {
        if (this._root == null) {
            return;
        }

        if(this._root._data == value) {
            Console.log("Can't delete root");
            return;
        }

        let node:Leaf<T> = this._root;
        while (true) {
            if (value < node._data) {
                if (node._left == null) {
                    Console.log("Leaf is missed")
                    return;
                }
                else
                if (node._left._data == value) {
                    let tmp = node._left;
                    node._left = tmp._left;
                    node._right = tmp._right;
                    return;
                } else {
                    node = node._left;
                }
            } else if (value >= node._data) {
                if (node._right == null) {
                    Console.log("Leaf is missed")
                    return;
                } else if (node._right._data == value) {
                    let tmp = node._right;
                    node._left = tmp._left;
                    node._right = tmp._right;
                    return;
                }
                else {
                    node = node._right;
                }
            } else {
                Console.log("Leaf is missed")
                return;
            }
        }
    }

    public toString(): void {
        this.print2DUtil(this._root,1);
    }

    private print2DUtil(root: Leaf<T> | null, space:number): void
    {
        let COUNT = 3;
        // Base case
        if (root == null)
        return;

        // Increase distance between levels
        space += COUNT;

        // Process right child first
        this.print2DUtil(root._right, space);

        // Print current node after space
        // count
        Console.log("\n");
        let str:String = "";
        for (let i = COUNT; i < space; i++) str+=" ";
        // @ts-ignore
        Console.log(str + root._data);

        // Process left child
        this.print2DUtil(root._left, space);
    }
}