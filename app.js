const products = [
    {
        id: 101,
        title: "Sony LED 40 inch",
        variations: [
            { id: 1, color: "black", price: 50000, quantity: 5 },
            { id: 2, color: "red", price: 50000, quantity: 1 },
            { id: 3, color: "silver", price: 55000, quantity: 8 },
        ],
        reviews: [
            {
                id: 1,
                user: "Ahmad",
                rating: 4.0,
                title: "Good Product",
                comments: "It is a very good product ....",
                date: "06-02-2021",
                status: true,
            },
            {
                id: 2,
                user: "Zubair",
                rating: 4.5,
                title: "Very Good Product",
                comments: "zubair It is a very good product ....",
                date: "05-02-2021",
                status: false,
            },
            {
                id: 3,
                user: "Ali",
                rating: 5.0,
                title: "bad Product",
                comments: "ali It is a very good product ....",
                date: "04-02-2021",
                status: true,
            },
        ],
    },
    {
        id: 102,
        title: "Mobile",
        variations: [
            { id: 1, color: "black", price: 50000, quantity: 5 },
            { id: 2, color: "red", price: 50000, quantity: 1 },
            { id: 3, color: "silver", price: 55000, quantity: 8 },
        ],
        reviews: [
            {
                id: 1,
                user: "Ahmad",
                rating: 4.0,
                title: "Good Product",
                comments: "It is a very good product ....",
                date: "06-02-2021",
                status: true,
            },
            {
                id: 2,
                user: "Zubair",
                rating: 4.5,
                title: "Very Good Product",
                comments: "zubair It is a very good product ....",
                date: "05-02-2021",
                status: false,
            },
            {
                id: 3,
                user: "Ali",
                rating: 5.0,
                title: "bad Product",
                comments: "ali It is a very good product ....",
                date: "04-02-2021",
                status: true,
            },
        ],
    },
    {
        id: 103,
        title: "Bike",
        variations: [
            { id: 1, color: "black", price: 55000, quantity: 5 },
            { id: 2, color: "red", price: 50000, quantity: 1 },
        ],
        reviews: [
            {
                id: 1,
                user: "Ahmad",
                rating: 4.0,
                title: "Good Product",
                comments: "It is a very good product ....",
                date: "06-02-2021",
                status: true,
            },
            {
                id: 2,
                user: "Zubair",
                rating: 3.0,
                title: "Very Good Product",
                comments: "zubair It is a very good product ....",
                date: "05-02-2021",
                status: false,
            },
        ],
    },
];
//=================================================================================================

// async function getData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();

//         // Map through the data and extract title and body for each post
//         console.log("Data fetched successfully:");
//         data.slice(0, 5).forEach(dt => {
//             console.log(`<p>Title: ${dt.title}</p>`);
//             // document.write(`<p>Title: ${dt.title}</p>`);
//             console.log(`<p>Body: ${dt.body}</p>`);
//         });

//     } catch (error) {
//         console.log("Failed to fetch data:", error);
//     }
// }

// getData();

//=================================================================================================

const user = { name: 'Alice', age: 30 };
const { name, age } = user; 
console.log(name, age); 

// let  ask = prompt("how are you")

// document.writeln(ask)

 let  range =   document.getElementById("range")

 const valueDisplay = document.getElementById('value-display');

        range.addEventListener('input', function() {
            valueDisplay.textContent = range.value;
            
            filterContentBasedOnRange(range.value);
        });

        function filterContentBasedOnRange(value) {
            console.log("Range Slider value: " + value);
        }





// console.log(numbers)


// const digits = [1, 2, 3, 4, 5, ];

// let numbers = document.getElementsByClassName("numbers")[0].innerHTML

// let imgsl =  ["one", "two","three","four","five"];
// digits.map((c)=> {  let newDiv = `<div><p>${c}</p><p>${numbers.innerHTML}</p></div>`;
// console.log(digits)} )


// let numbersElement = document.getElementsByClassName("numbers")[0];

function time() {
    setTimeout(() => {
        console.log("This runs after the timeout");
    },3000);  

    console.log("Set");
}
time()



//=======================================================================================================
const digits = [1, 2, 3, 4, 5];

        let numbersElement = document.getElementsByClassName("numbers")[0];

        digits.map((c, index) => {
            let newDiv = `<div><p>${digits[index]} </p></div>`;

            numbersElement.innerHTML += newDiv;

            // console.log(newDiv); // 
        });



//  console.log(digits.map(m=>`${m}`));

let headings = document.querySelectorAll(".h");
headings.forEach(element => {
    element.innerHTML = "Updated Content";
});

// let values = Array.from(headings).map(element => element.innerHTML);
// console.log(values);


const foundReview = products.find(product => 
  product.reviews.some(review => review.user === "Ahmad")
);

// console.log(foundReview);

console.log("===================================");




let favoriteProducts = products.find(product => product.id == 101
);  
// console.log(favoriteProducts);

console.log("===================================");

let headinds = document.getElementsByClassName("h");

// [...headinds].forEach(element => {
//     element.innerHTML = "ok";
// });

function run(){
    let inp = document.querySelector(".inp").value;
    console.log(inp);
    Array.from(headinds).forEach(element => {
    element.innerHTML = inp;
});
}


function del() {
    let headinds = document.querySelectorAll(".h, h4");

    headinds.forEach(element => {
        element.innerHTML = ""; 
    });
    console.log('Content deleted');
}

function find(){
    let inp = document.querySelector(".inp").value;
    let  find = inp.textContent
    


}



// let values = document.querySelector(".btn").values;

// values = Array.from(headinds).map(element => {
//     return element.innerHTML;
// });
// console.log(values);

// Array.from(headinds).forEach(element => {
//     element.innerHTML = "ok";
// });

//  (headinds.length > 0)  ? console.log("yes") : null  ; 

let pet = {name : "cat"};


if (pet.name == "cat") {
    console.log("meow");
} else {
    console.log("woof");
}

    // for (let i = 0; i < headinds.length; i++) {
    //     headinds[i].innerHTML = "hy";
    // }

    console.log("========================================");



 
// let fav = prompt("Enter fruit name")


 const fruits = ["Banana", "Orange", "Apple", "Mango"];

//  fruits.filter((fruit) => fruit === fav  );
    // fruits.includes(fav) ? console.log("yes") :  console.log("no")  ;
    // console.log(fruits);



// const digits  = [1, 2, 3, 4, 5, 6  ];

// console.log(digits.filter((n)=>{}))


// .map(num => {
//   if (typeof num === 'number') return;
//   return num * 2;
// });


let cash = 10;
cash > 12 ? console.log("big") : console.log("no");







let btninc  = document.getElementsByClassName("inc");
let btndec  = document.getElementsByClassName("dec");
let count  = document.getElementsByClassName("count");
let countcur  = 0;  // Initial counter value



count[0].addEventListener("click", function() {
    console.log("count clicked, current value: " + countcur);
});


btninc[0].addEventListener("click", function() {
    countcur++;  
    count[0].textContent = countcur;  
    console.log("Incremented to: " + countcur);
});


btndec[0].addEventListener("click", function() {
    countcur--;  
    count[0].textContent = countcur;  
    console.log("Decremented to: " + countcur);
});

console.log(count);  



// let inputs = document.getElementById("inp");
// let text = document.querySelector(".text");
// let tk = document.querySelector(".text");

// function Add(){
//     let newEle = document.createElement("ul");   
//     let mark = document.createElement("ul");   
    
//     newEle.innerHTML=`${inputs.value} <i> 🗑️</i>    <span> ✓ </span>  `;
//     // mark.innerHTML=`${inputs.value}  <span> ✓ </span>`;
    
//     text.appendChild(newEle ,);
//     // tk.appendChild(mark);
//     inputs.value="";
//     newEle.querySelector("i").addEventListener("click" , remove  );
//     function remove(){
//         newEle.remove()
//     }
    
//     tk.addEventListener("click", (a) =>{
//         tk.style.textDecoration = "line-through"
//     })
    
// }





// let mark = document.createElement("ul");
// mark.innerHTML=`${inputs.value} <u> ✓ </u>`;
// text.appendChild(mark);
// mark.querySelector("span").addEventListener("click", tick  );
// function  tick(){
    // mark.style.textDecoration = "underline"
    
    // }
    
    
    
    
    
    
        // newEle.querySelector("u").addEventListener("click" , style );
        // function style(){
            // newEle.style.textDecoration = "underline"
            // }
        
            
            // let mark = document.querySelectorAll('ul:hover');
            //    const style = document.createElement('style');
            //   style.textContent = `
            // ul:hover { background-color: lightgreen;}`;
            // document.head.appendChild(style);
            
            

        
        // function markTask(){
        //     const currentTasks = document.querySelectorAll("#task");
        //   currentTasks.forEach((task) => {
        //       task.style.textDecoration = "underline"
        //   });
        // }
        
        
        
        
// cont  inputs = document.getElementById("add");
// cont  text   = document.querySelector(".textlist");

// function add(){
//   if(input.value === ""){
//     alert("please enter task")
//   }else{
//     const addElement = document.createElement("ul");
//     addElement.innerHTML=`${inputs.value}`
//     text.appendChild(addElement);
//     input.value="";
//     // addElement
//   }

// };






// let username;
// const btn = document.getElementById('submitbtn')
// btn.addEventListener("click", writeName)


// function writeName(){
// username = document.getElementById("enter").value;
// document.getElementById("hellow").textContent = ` Hellow ${username}`
// };







// function createTask()
// {

//   const ul = document.getElementById('task');
//   const li = document.createElement('li');
//   const list = document.createTextNode('Task no 4');
//   li.appendChild(list);
//   ul.appendChild(li);
// };

// function removeTask(){
//  const ul = document.getElementById('task');
//  ul.removeChild(ul.lastElementChild);

// };





// function removemarkTask(){
//     const currentTasks = document.querySelectorAll("#task");
//   currentTasks.forEach((task) => {
//       task.style.textDecoration = "none"
//   });
// }



// // function addTick(){
// //     const currentTasks = document.querySelectorAll("#task");
// //   currentTasks.forEach((task) => {
// //       task.style.${ul}
// //   });
// // }



