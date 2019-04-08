function greet(ciao){
    return function (someone){
        console.log(ciao + ' ' + someone);
    }

}

const sayHaya = greet('ciao');
sayHaya ('brother');