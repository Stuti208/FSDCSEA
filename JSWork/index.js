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



// function selectLanguage(lang) {

//     function cCompiler() {
//         return "c compiler selected"
//      }
     
//      function javaCompiler() {
//         return "java compiler selected"
//     }
    
//     if (lang === 'c')
//         return cCompiler
//     else
//         return javaCompiler

// }

// result = selectLanguage('c')
// console.log(window)
// console.log(document)
// console.dir(document)

// const div = document.getElementsByClassName('parent');
// console.log(div)
// div[0].innerText = "Hello JS"
// div[0].innerHTML = "<h2 style=color:red>ABES EC</h2>"
// const h1 = document.createElement("h1");
// h1.innerText = 'Element is created by DOM'
// h1.style.backgroundColor="cyan"
// h1.style.color="red"

// div[0].appendChild(h1);

// console.log(h1)
// console.log(div)

// const img = document.createElement('img');
// img.src = 'cat.jpg';
// img.setAttribute('height','200px')
// console.log(img)
// div[0].appendChild(img)

// div[0].removeChild(img)

// const button = document.getElementById('btn')
// console.log(button)
// const display = document.getElementById('disp');
// console.log(display)

// getData=()=> {
//     console.log('calling getdata')
//     display.innerHTML='<h3 style=color:red>Welcome to CSE Department</h3>'
// }

// button.addEventListener('click', getData);

// const promise1 = new Promise(
//     (resolve, reject) => {
//         let a = Math.random() * 1000;
//         console.log(a)
//         if (a >100 && a<200) {
//             resolve('value of a is resolved')
//         }
//         else {
//             reject('a is rejected');
//         }
//    }
// );

// promise1.then((msg) => { console.log(msg) })
//     .catch(error => { console.log(error) })
//     .finally(msg => { console.log('All resources have been closed') });

// const promise2 = new Promise(
//     (resolve, reject) => {
//         resolve({ name: 'Stuti', branch: 'CSE' })
//     }
// );

// promise2.then((data) => { console.log(data) })
// .catch((error)=>{console.log(error)})
console.log(div)


const response = fetch('https://dummyjson.com/products');
response.then((data) => {
    console.log(data)
    data.json().then(res => {
        console.log(res)
        const div = document.getElementsByClassName(parent);

    
        // for (let i = 0; i <= 5; i++) {
            const h1 = document.createElement('h1');
            console.log(h1)
            h1.innerText = res.products[0].id;
        div[0].appendChild(h1);
        // }
        console.log(div)
        
    })
})







