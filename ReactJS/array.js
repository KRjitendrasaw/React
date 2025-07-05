let arr = [1,2,4,53,45]

// to print the index
for(let num  in arr){
    console.log(num)
}

// to print the index of value
for(let num  in arr){
    console.log(arr[num])
}

// to print the value foreach
for(let num  of arr){
    console.log(num)
}

let newarr  = arr.map((val, ind) => {
    return val*2
})

console.log(newarr)

let student = [{students: 'Jitu' , mark: 232},{students: 'Jitu' , mark: 2233},{students: 'Jitu' , mark: 223}]

let newstud = student.filter(d => d.mark > 223).map((student, val)  => ({
    ...student,reamrks: 'pass'
}));

console.log(newstud)

// spread operator expnading the array
// rest operator collecting the array

//destructring array
let num1 = [1,23,34,55]
let num2 = [1,22,4,5]
let num3 = [...num1 , ...num2]

console.log(num3)

//destruring array
let [a, b,c ,,, ...rest] = num3;
console.log(a)
console.log(b)
console.log(c)
console.log(rest)

