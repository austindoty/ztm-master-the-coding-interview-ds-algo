//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
    /* initilizw an empty object/ hash table'
    I want to then loop through the input data
    I will then 'destrcuture' by reassigning [input[i]] to keep code simple
    I want to then check the hashmpa/ data to see if the data exists
    if it does then return the [i]
    if it does not store [i]
    */
   const map = {};
   for (let i=0; i< input.length; i++){
    const data = input[i];
    if ( map[data] !== undefined ){
        return {data: data, message: `was your reccurring data`} 
    } else {
        map[data] = i
    }
   }
   return {data: undefined, message: 'There was no reccuring data'}
}

function firstRecurringCharacter2(input) {
    let map = {}; //Initilize hash table ot store data called map
    for (let i = 0; i < input.length; i++) { //loop through the input 
      if (map[input[i]] !== undefined) { /// if map with key of i is not undefined return [i]
        return input[i]
      } else {
        map[input[i]] = i;
      } //otherwise store the data
    }
    return undefined //if none of that happens return undefined
  }

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2