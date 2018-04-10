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
    sample6();
    sample7();
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


/**
 * 即時関数
 */
// ECMAScript6以前
function sample6() {
    (function () {
        var a = 1;
        var b = 2;
        console.log(a + b);
    })();
}

// ECMAScript6以降
function sample7() {

    // 書き方1(引数ありの書き方)
    ((a, b) => {
        console.log(a + b);
    })(1, 2);

    
    // 書き方2(引数なしなら)
    {
        let a = 1;
        let b = 2;
        console.log(a + b);
    }
}