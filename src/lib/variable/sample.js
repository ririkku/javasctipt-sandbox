/**
 * 変数の宣言を書いてみる
 *
 * let は ECMAScript6 からです
 * 変数の有効範囲を細かくできるので、スコープが広くなりづらいからいいかも
 *
 */

// varでの宣言
var message;
var x, y;
// varは重複を許容してくれる
var hoge = 'ほげ';
var hoge = 'ほげほげ'

// letでの宣言
// letは重複を許容してくれない
let message; //Uncaught SyntaxError
let x, y; // Uncaught SyntaxError

let fuga = 'ふが';
let fuga = 'ふがふが'; // Uncaught SyntaxError


// スコープが違うのでこれは大丈夫！
(function () {
    let fuga = 'フガー！'
})();