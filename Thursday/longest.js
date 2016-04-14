function NumberSearch(str) { 
var array = str.split('')
var number = []
var notnum = []
  for(var i in array){
         if(isNaN(array[i])){
         	if(array[i].match(/[a-z]/i)){
         		notnum.push(array[i])
         	}
         } else if(false === isNaN(array[i]){
         	number.push(parseInt(array[i]))
         }
  }
var length = notnum.lengh
var num = number.join('').split("NaN")
  console.log(number)
  
}
   
// keep this function call here 
NumberSearch("Hello6 9World 2, Nic8e D7ay!");                            















                            
                            
                            
  