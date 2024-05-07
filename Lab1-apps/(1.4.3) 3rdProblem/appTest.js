function test(){
    console.log(sum(0)==0?"Passed":"Failed");
    console.log(sum(2)==3?"Passed":"Failed");
    console.log(sum(4)==10?"Passed":"Failed");
    console.log(sum()=="n is undefined"?"Passed":"Failed");
    }
    test ();
    
   (function(){
    console.log(sum(0)==0?"Passed":"Failed");
    console.log(sum(2)==3?"Passed":"Failed");
    console.log(sum(4)==10?"Passed":"Failed");
    console.log(sum()=="invalid argument"?"Passed":"Failed");
    })();
    
    console.log("reapelare test");
    test ();
    
function test2(){
    console.log(sum('Robert')=="n is not a number"?"Passed":"Failed")
    console.log(sum(true)=="n is not a number"?"Passed":"Failed")
}
test2();

(function(){
    console.log(sum('Robert')=="n is not a number"?"Passed":"Failed")
    console.log(sum(true)=="n is not a number"?"Passed":"Failed")
})();

console.log("test2");
test2 ();