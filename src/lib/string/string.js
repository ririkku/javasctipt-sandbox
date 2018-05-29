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
function tag(a, b, c, d){
    // 一つ目の引数に、通常文字列が配列で代入されている。
    console.log(a);

    // 二つ目以降に埋め込まれた変数が代入されている。
    console.log(b);
    console.log(c);
    console.log(d);
}

tag`わたしの名前は${name}です。${age}歳です。`;