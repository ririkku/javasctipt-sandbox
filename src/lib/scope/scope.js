/**
 * スコープ
 */

const scope = 'Global Variable';

function checkScope() {

    let scope = 'Local Variable';

    let f_let = () => scope;
    console.log(f_let());

    let f_con = new Function('return scope');
    console.log(f_con());
}

checkScope();