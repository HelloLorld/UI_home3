import*as Console from"console";class Leaf{constructor(t){this._data=t,this._left=null,this._right=null}}class Tree{constructor(){this._root=null}insert(e){if(null!=this._root){let t=this._root;for(;;)if(e<t._data){if(null==t._left)return void(t._left=new Leaf(e));t=t._left}else{if(!(e>=t._data))return;if(null==t._right)return void(t._right=new Leaf(e));t=t._right}}else this._root=new Leaf(e)}getLeaf(t){if(null==this._root)return null;if(this._root._data==t)return Console.log("Can't delete root"),this._root._data;let e=this._root;for(;;)if(t<e._data){if(null==e._left)return Console.log("Leaf is missed"),null;if(e._left._data==t)return e._left._data;e=e._left}else{if(!(t>=e._data))return Console.log("Leaf is missed"),null;if(null==e._right)return Console.log("Leaf is missed"),null;if(e._right._data==t)return e._right._data;e=e._right}}delLeaf(e){if(null!=this._root)if(this._root._data!=e){let t=this._root;for(;;)if(e<t._data){if(null==t._left)return void Console.log("Leaf is missed");if(t._left._data==e){var l=t._left;return t._left=l._left,void(t._right=l._right)}t=t._left}else{if(!(e>=t._data))return void Console.log("Leaf is missed");if(null==t._right)return void Console.log("Leaf is missed");if(t._right._data==e){l=t._right;return t._left=l._left,void(t._right=l._right)}t=t._right}}else Console.log("Can't delete root")}toString(){this.print2DUtil(this._root,1)}print2DUtil(t,l){if(null!=t){this.print2DUtil(t._right,l+=3),Console.log("\n");let e="";for(let t=3;t<l;t++)e+=" ";Console.log(e+t._data),this.print2DUtil(t._left,l)}}}export{Tree};