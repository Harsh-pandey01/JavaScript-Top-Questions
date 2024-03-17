// Max and min value in an array
const arr= [1 ,2 ,3 ,4 ,5 ,16 ,7 ,8,9]

const maxi = arr.reduce((curr,acc)=>{
 return curr > acc ?curr : acc
})
const mini = arr.reduce((curr,acc)=>{
    return curr < acc ?curr : acc
})

console.log(maxi,mini);