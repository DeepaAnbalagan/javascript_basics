/**
 * Created by deepa.a on 12/17/2018.
 */


var nondefined = ()=>{
    // Prints undefined since x is not defined, lazy define will not work
    var x;
    console.log(x);
    x=10;
};

nondefined();

var nondeclared = ()=>{
    // erroneous because x is not declared
    console.log("Print X", x);
};

nondeclared();

