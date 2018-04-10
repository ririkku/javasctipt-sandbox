/**
 * undefined はプリミティブ型
 * ECMAScript5 以降、設定付加、書換不可
 * それ以前はできたらしい
 * 変数宣言時に未定義の場合は undefined
 * 値を return しないメソッドも undefined を返すよう
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined
 *
 */
var message;
console.log("message is " + message);


// false
if (message = undefined) {
    console.log("message = undefined is OK")
}
// true
// 厳格な等価演算子じゃないゆえに、nullもチェックするから使うな。
// nullとundefinedは違うもの。
if (message == undefined) {
    console.log("message == undefined is OK")
}
// true
if (message === undefined) {
    console.log("message === undefined is OK")
}


// true
// この場合、messageが宣言されていなくてもOK。
// 厳格な等価演算子じゃないゆえに、nullもチェックするから使うな。
// nullとundefinedは違うもの。
if (typeof message == "undefined") {
    console.log("typeof message == \"undefined\" is OK")
}
// true
// この場合、messageが宣言されていなくてもOKなのが利点。
// でも気をつけて使用しないと、わけがわからん。
if (typeof message === "undefined") {
    console.log("typeof message === \"undefined\" is OK")
}


// false
// 通るけど、わかりづらいしやらない。多分。
if (message = void 0) {
    console.log("message = void 0 is OK")
}
// true
// 通るけど、わかりづらいしやらない。多分。
if (message == void 0) {
    console.log("message == void 0 is OK")
}
// true
// 通るけど、わかりづらいしやらない。多分。
if (message === void 0) {
    console.log("message === void 0 is OK")
}


// true
// この場合、falseや0もtrueになる。(理解してるなら使用してよし、かも)
if (!message) {
    console.log("!message is OK")
}


// こんなことはしないこと！(公式サイトに乗ってた)
// 予約語じゃないからできちゃうけど。

// "foo string" をログとして記録する
(function () {
    var undefined = 'foo';
    console.log(undefined, typeof undefined);
})();

// "foo string" をログとして記録する
(function (undefined) {
    console.log(undefined, typeof undefined);
})('foo');