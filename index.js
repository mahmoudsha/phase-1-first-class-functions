function receivesAFunction(func){
    func();

}

function returnsANamedFunction(){
    
    return receivesAFunction
}
function returnsAnAnonymousFunction(){
    return function(){}
}