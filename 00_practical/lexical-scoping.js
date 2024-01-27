// Child function can access parent variable but parent function can not access child variable.

function outer(){
    let parentName = "Suresh"
    // console.log(childName);
    function inner(){
        childName= "Narendra"
        console.log(parentName);
        // console.log(childName);
    }
    inner()
}

outer()