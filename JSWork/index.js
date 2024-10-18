// console.log("Hello World");
// let a = 12
// console.log("a=" + a)

// if (a > 10) {
//     a = 30
//     console.log("Hi",a)
// }

// console.log("Hello ", a)

// let sim = Symbol("122")
// let today = Date()

// console.log(today)
// console.log(sim)

// let d = function (str = "hello") {
//     console.log("Hi function calling" + str);
// }

// d();

// function sum(a,b,c=12) {
//     return a+b+c
// }

// let total = sum(55,78)
// console.log(total)



function selectLanguage(lang) {

    function cCompiler() {
        return "c compiler selected"
     }
     
     function javaCompiler() {
        return "java compiler selected" 
    }
    
    if (lang === 'c') 
        return cCompiler
    else
        return javaCompiler

}

result = selectLanguage('c')
console.log(window)
