function receivesAFunction(callback){
    callback();

}

function returnsANamedFunction(){
    return function nameFunction(){
        console.log("This is a name function");
    }
    
}

function returnsAnAnonymousFunction(){
    return () => console.log("This is an anonymous function");
        
}

