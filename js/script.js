try {
    console.log(num)
} catch (error) {
    console.error("404")
}



// let user = {
//     name: "John",
//     age: 30,
//     'the answer': false,
// };


// console.log(user.name)
// console.log(user.age)

// console.log(user)

// user.age = 21;

// delete user.age

// console.log(user["the answer"])


// let obj = 5;

// let obj2 = 5;

// console.log(obj === obj2)




// let obj = {
//     name: "john"
// }


// let obj2 = {
//     name: "john"
// }
// console.log(obj == obj2)

// let employer = {
//     name: "Jhon",
//     job: "Web-developer",
//     age: "31",
//     salary: 625000
// }

// for (key in employer) {
//     console.log("ключ: " + key + " Значение: " + employer[key]) // emplayer это переменная, key сам ключ для перебора
// }



// for (key in employer) {
//     console.log(employer[key])
// }


// console.log(user.name)
// console.log(user.age)

// 1

// let person = {
//     name: "John",
//     age: 30,
//     city: "New-York"
// }

// person.name = "Andrew";
// person.age = 31
// person.city = "Tyumen"

// console.log(person)

// 2

// let car = {
//     make: "make",
//     model: "model",
//     year: 2010
// }

// console.log(car.model)


// 3

// let student = {
//     name: "name",
//     grade: "grade"
// };

// student.email = "email@email.com";
// student.grade = "grade2";

// console.log(student)

// 4

// let book = {
//     title: "title",
//     author: "author",
//     pages: "pages"
// }

// for (key in book) {
//     console.log(`Ключи: ${key} | Значения: ${book[key]}`)
// }



// 5


// let employee = {
//     name: "name",
//     job: "job",
//     address: {
//         city: "city",
//         country: "country",
//         street: "street"
//     }
// }

// console.log(employee)


// 5(6)

// let employee = {
//     name: "name",
//     job: "job",
//     address: {
//         city: "city",
//         country: "country",
//         street: "street"
//     }
// }

// console.log(employee.address.city)


// let employee = {
//     name: "name",
//     info() {
//         console.log("Hello! My name is " + `${this.name}`)
//     }
// }



// employee.info()


// new




// let user = {
//     name: null,
//     age: null,
//     sayhello: function (phone) {
//         console.log(`hello! ${this.name},${phone}`)
//     }
// }

// let person1 = {
//     name: 123,
//     age: "Не известно"
// }


// const dataPersonBind = user.sayhello.bind(person1, 2131)
// dataPersonBind()

// const dataPersonCall = user.sayhello.call(person1, 1337)

// const dataPersonAply = user.sayhello.apply(person1, [1337])



// let emplayer = [{
//     name: "Ivan",
//     position: "Developer",
//     salary: 210000
// }, {
//     name: "pasha",
//     position: "designer",
//     salary: 210000
// }, {
//     name: "Anna",
//     position: "Developer",
//     salary: 210000
// }];

// 1


// function getEmplayerNames(arr) {
//     return arr.forEach(el => {
//         console.log(el.name)
//     });

// }


// getEmplayerNames(emplayer)



// 2



// function getEmplayerJobs(arr) {
//     return arr.filter(el => el.position == "Developer")

// }

// console.log(getEmplayerJobs(emplayer))

// 3






// function getSumSalarys(arr) {
//     return arr.reduce((el, sumSalary) => sumSalary = el.salary, 0)
// }

// console.log("Сумма :" + getSumSalarys())





// function getSumSalarys(arr) {
//     let sum = 0;

//     for (el of arr) {
//         sum += el.salary;
//     }
//     return sum
// }

// console.log("Сумма - " + getSumSalarys(emplayer))





// const calc = {
// //     num1: 0,
// //     num2: 0,
// //     add: function () {
// //         console.log(this.num1 + this.num2)
// //     },
// //     minus: function () {
// //         console.log(this.num1 - this.num2)
// //     },
// //     apply: function () {
// //         console.log(this.num1 * this.num2)
// //     },
// //     delenie: function () {
// //         console.log(this.num1 / this.num2)
// //     }
// // }

// // const data1 = {
// //     num1: 10,
// //     num2: 5
// // }
// // const data2 = {
// //     num1: 15,
// //     num2: 2
// // }

// // const data3 = {
// //     num1: 121,
// //     num2: 11
// // }

// // const sumData = calc.add.bind(data1)
// // sumData(data1)


// // const subData = calc.minus.call(data2)

// // const applyData = calc.apply.call(data3)

// // const delenieData = calc.delenie.call(data3)







function getElementData(value) {
    return typeof value
}

console.log(getElementData("str"))
console.log(getElementData(function a() { }))
console.log(getElementData(true))
console.log(getElementData("str"))
console.log(getElementData("str"))
console.log(getElementData("str"))


function reverseStr(str) {
    return str.split("").reverse().join()
}


console.log(reverseStr("JavaScript"))