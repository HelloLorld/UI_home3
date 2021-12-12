import * as Console from "console";
import * as readlineSync from "readline-sync";
import { Tree } from "./Tree.js";

const tree:Tree<number> = new Tree();

Console.log("* to exit from input");
while (true) {
    let x = readlineSync.question("Input data: ");
    if (x == '*') break;
    else tree.insert(Number(x));
}
tree.toString();

let x = readlineSync.question("What you want delete?");
tree.delLeaf((Number(x)));

tree.toString();

x = readlineSync.question("What you want get?");
tree.getLeaf(Number(x));