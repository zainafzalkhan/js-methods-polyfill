// evry element of given array must be passed the given condition if anyone fail,the result will be false...
// it will return boolean value, it does not change the original value

Array.prototype.myEvery=function(callback_fn){
    for(var i=0;i<this.length;i++){
        let isTrue=callback_fn(this[i],i,this);
        if(!isTrue) return false;
    }
    return true
}

let nums=[2,1,6,45,75,86,4345];
let result=nums.myEvery(num=>num>1)
console.log(result)