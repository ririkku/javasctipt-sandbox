/**
 * 関数、、かな
 *
 */
window.onload = function () {
    sample1();
    sample2();
    sample3();
    sample4();
    sample5();
};

function sample1() {
    function getTriangle(base, height) {
        return base * height / 2;
    }

    // これもできるよ。
    // let getTriangle = function (base, height) {
    //     return base * height / 2;
    // }

    console.log('function 三角形の面積: ' + getTriangle(5, 2));
}

function sample2() {
    // sample1()と同義
    let getTriangle = new Function('base, height', 'return base * height / 2');
    console.log('new Function : 三角形の面積: ' + getTriangle(5, 2));
}

// 文字列を引数として渡せるため、こんな感じのこともできる。
// 引数を間違えると、Uncaught ReferenceError
// 乱用はしないほうがいいかも
function sample3() {
    let param = 'height, width';
    let formula = 'return height * width / 2';
    let diamond = new Function(param, formula);
    console.log('菱形の面積: ' + diamond(5, 2))
}


// アロー記法
function sample4() {
    // "function" を省略できた。
    var getTriangle = (base, height) => {
        return base * height / 2;
    }
    console.log("\"function\" を省略 : " + getTriangle(5, 2));

    // "{}" "return" を省略できた。
    var getTriangle = (base, height) => base * height / 2;
    console.log("\"{}\" \"return\" を省略 : " + getTriangle(5, 2));

    // 引数が一個の場合、"()" を省略できた。
    var getCircle = radius => radius * radius + Math.PI;
    console.log("引数が一個の場合、\"()\" を省略 : " + getCircle(5));

    // 引数なしの場合
    var show = () => console.log("引数ないよー")
    show();
}

// アロー記法でオブジェクトを返す
function sample5() {
    // () がいる
    var obj = () => ({hoge: 'ほげ'});
    console.log(obj());
}


