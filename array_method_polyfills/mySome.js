// this will return boolean result, if atleast one element true for given condtion it will return true else it will return false

Array.prototype.mySome=function(callback_fn){
    for(var i=0;i<this.length;i++){
        let isTrue=callback_fn(this[i],i,this);
        if(isTrue) return true
    }
    return false
}


let nums=[2,1,6,45,75,86,4345,];
let result=nums.mySome(num=>num<10)
console.log(result)