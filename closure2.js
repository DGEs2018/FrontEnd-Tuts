function buildFunctions() {
    let arr = [];

    for(let i=0; i < 3; i++) {
        arr.push(
            function() {
               console.log(i);
            }
        )
    }

    return arr;
}

let fredefined = buildFunctions();

fredefined[0](); // 0
fredefined[1](); // 1
fredefined[2](); // 2






