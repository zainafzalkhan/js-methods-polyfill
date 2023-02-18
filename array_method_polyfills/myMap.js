// in javascript map function is used to modify the elements of array according to the given conditons... original array will remains the same as before... it will return a new modified array
Array.prototype.myMap=function(callback_function){  
    const mapedArray=[]
    for(var i=0;i<this.length;i++){
        let currentElem=this[i];
        let mapedElem=callback_function(currentElem,i,this);
        mapedArray.push(mapedElem);
    }
    return mapedArray
}

let players=['Rena','Sachin','Dhoni'];

let greetingPlayer=players.myMap((player)=>`Welocome ${player}`);

console.log(greetingPlayer)