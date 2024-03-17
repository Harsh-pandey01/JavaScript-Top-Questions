// Duplicates in an array
const arr = [1,2,4,5,6,7,5,2,4]

const duplicates = arr.filter((elem,index)=>{
    return index !== arr.indexOf(elem)
})

console.log(duplicates)