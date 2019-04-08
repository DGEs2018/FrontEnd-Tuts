function buildFunctions() {
    var arr = [];

    for(var i=0; i < 3; i++) {
        arr.push(
            function() {
               console.log(i);
            }
        )
    }

    return arr;
}

var fredefined  = buildFunctions();

fredefined[0](); // 3
fredefined[1](); // 3
fredefined[2](); // 3

