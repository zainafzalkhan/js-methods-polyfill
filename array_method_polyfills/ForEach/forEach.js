/*
# what forEach does ....
# it itereate throght all the array elements and run given callback function for every element of array,
# forEach returns undefined.
*/
Array.prototype.myFor=function(cb_fn){
    // here this will representing the myFor method's parent
    for(var i=0;i<this.length;i++){
        cb_fn(this[i],i,this)
    }
}

let names=['Afzal','Yasir','Shahzad',undefined,undefined,null,NaN,2,3.5,true,{},[]];
function cb(value){
    console.log(value)
}
// givent cb function will run for every element of names array
names.myFor(cb)