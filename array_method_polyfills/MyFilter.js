// filter is basically used to get only elements which will be
// true for the given condition... it will return a new arry
// it does not change the original array

Array.prototype.myFilter=function(callback_fn){
    let filterdArray=[]
    for(var i=0;i<this.length;i++){
        let currentElem=this[i];
        let isTrue=callback_fn(currentElem)
        if(isTrue)  filterdArray.push(currentElem)
    }
    return filterdArray;
}


let marks=[5,2,3,6,7,9,07,5,4,3,32,5,578,343,100,54,53334,0];

let twoDigit=marks.myFilter(num=>num<100);
let threeDigit=marks.myFilter(num=>num>100);
console.log(twoDigit,threeDigit)