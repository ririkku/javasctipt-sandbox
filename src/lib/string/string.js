// 文字列埋込
let name = 'Kikukawa';
let age = '23';
let str = `わたしの名前は${name}です。${age}歳です。`;
console.log(str);


// テンプレート文字列
// バッククォートでくくる
// 改行がそのまま。
let str2 = `あ
い
う`;
console.log(str2);


// タグ付きテンプレートとかいうやつ
function tag(a, b, c, d) {
    // 一つ目の引数に、通常文字列が配列で代入されている。
    console.log(a);

    // 二つ目以降に埋め込まれた変数が代入されている。
    // 定義されていない場合は、undefinedになるよ。
    console.log(b);
    console.log(c);
    console.log(d);
}

tag`わたしの名前は${name}です。${age}歳です。`;


// 分割代入なるもの。
let [n1, n2] = [100, 200];
console.log(n1);
console.log(n2);
[n1, n2] = [n2, n1]; // 入れ替えも一行でできるようになってしまって。。。
console.log(n1);
console.log(n2);


// 分割代入を使用して、関数の戻り値を複数にできるようだ
function fruits() {
    return ['apple', 'orange'];
}

let [fruit1, fruit2] = fruits();
console.log(fruit1);
console.log(fruit2);


// ...演算足とかあるらしい。　
let [x, y, ...likeFruits] = ['きくかわ', 23, 'りんご', 'オレンジ']; // 代入してみる
console.log(x, y, likeFruits);

let array = [1, 4, 5];
console.log(array);
console.log(...array); // 展開もできる

let max = Math.max(...array);
console.log(max);