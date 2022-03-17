
// // THE PROMISE VERSION 
// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection Timeout :(')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })

// const { rejects } = require("assert");
// const { resolve } = require("path");




// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page1)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page2)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page3)")
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("OH NO, A REQUEST FAILED!!!")
//         console.log(err)
//     })


// const fakeRequestPromise = (url)=>{
//     return new Promise((resolve, reject)=>{
//         let delay = Math.floor(Math.random() * 3) * 1000;
//         console.log(delay)
//         setTimeout(()=>{
//             if (delay < 1000) resolve("Success")
//             else reject("Time out")
//         }, delay)
//     })
// }

// fakeRequestPromise("google.com")
// .then(data=>console.log(data))
// .catch(data=>console.log(data))

// const fakeRequest=(url)=>{
//     return new Promise((resolve, reject)=>{
//         let delay  = Math.floor(Math.random() *3) *1000
//         setTimeout(()=>{
//             if (delay <1000)resolve("Success")
//             else reject("TimeOut")
//         }, delay)

//     })

// }

// fakeRequest("google.com")
// .then(data=>console.log(data))
// .catch(data=>console.log(data))

// const fakeRequest=(url)=>{
//     return new Promise((resolve, reject)=>{
//         const delay = Math.floor(Math.random()* 3) *1000
//         setTimeout(()=>{
//             if (delay < 1000)resolve("success")
//             else reject("failure")
//         }, delay)

//     })

    
// }

// fakeRequest("foole.com")
// .then(d=>console.log(d))
// .catch(d=>console.log(d))


// const fakeRequest=(url)=>{
//     let delay= Math.floor(Math.random() * 3)*1000
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{

//             if(delay <1000) resolve("success")
//             else reject("failure")
//         },delay)
       

//     }
//     )
// }
// fakeRequest("google.com")
// .then((d)=>console.log(d))
// .catch((d)=>console.log(d))

//3/16/22
const fakeRequest=()=>{
    let delay = Math.floor(Math.random() * 3) *1000
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            (delay < 1000)? resolve("success"):reject("failure")
        }, delay)


    })
}

// fakeRequest()
// .then((data)=>console.log(data + " Success"))
// .catch((data)=>console.log(data+ " Failure"))


async function makeTwoRequests(){
    try{
      
        console.log(await fakeRequest())

    }catch(e){

        console.log("Caught an error: " +e)
    }
}
makeTwoRequests()
