const baseURL = 'https://api.edamam.com/search';
const key ='c25022c64672675340993df4bc3df288';
const appId='3ada96a9';
let url="";

daysOfWeek=document.querySelector('li');

document.querySelector("#myButton").addEventListener("click", fetchFood);
// MAKE SURE YOU HAVE A HASHTAG 

let foodSearch = [
    'chicken',
    'beef',
    'vegan',
    'pork',
    'dairy',
    'vegetarian',
    'mediterranean'
];

    let random = Math.floor(Math.random() * foodSearch.length)
    let randFood= foodSearch[random];
//Math.floor(x)
//Returns the largest integer less than or equal to a number.
//Math.random()
//Returns a pseudo-random number between 0 and 1.

function fetchFood(){            
    // e.preventDefault();            
    url= `${baseURL}?q=${randFood}&app_id=${appId}&app_key=${key}&from=0&to=7&calories=591-900&health=alcohol-free`;          
    console.log("URL:",url);         

    fetch(url)                         
    .then(function(result) {           
        console.log(result)
        return result.json()       
    })
    .then(function(json){             
        console.log(json)          
        displayResults(json)         
    })
};  





function displayResults(json){  
    console.log(json)
    let days = ["MONDAY","TUESDAY",'WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY']
    let foodPicture = json.hits[Math.floor(Math.random())].recipe.image  
    let served = document.getElementById('ulDays'); 
    // let days = served.getElementById("da");
    //Math.floor(x)
    //Returns the largest integer less than or equal to a number.
    //Math.random()
    //Returns a pseudo-random number between 0 and 1.
    for (let i=0; i<days.length; i++) {
        let picture = document.getElementById('ulDays');
        let list = document.createElement('li')
        let foto=document.createElement('img')
        picture.appendChild(list)        
        picture.appendChild(foto)
        list.innerHTML= days[i]
        foto.setAttribute('src',foodPicture)
    }
}


// *MULITPY BY A RANDOM NUMBER TO GET RANDOM IMAGE but how??



// let served = document.getElementById('ulDays'); //in star wars, this was from the api data, not my html page
// let days = served.getElementById("days[i]")
// daysOfWeek=document.querySelector('li');


// function displayResults(json){
//     console.log(json)
// let foodPicture = json.hits[Math.floor(Math.random())].recipe.image 
// for (f of served){
//     let dayOfWeek= document.createElement('li')
//     let mealFoto=document.createElement('img')
//     mealFoto.setAttribute('src',foodPicture)
//     dayOfWeek.innerHTML= "<h1>" + h1.image + '</h1>'
//     served.appendChild(dayOfWeek)
//     daysOfWeek.appendChild(mealFoto)
// }
// }


    // para.textContent = 'Served: ';                       //add title
    // for(let j = 0; j < current.keywords.length; j++) {
    //     //looping through keywords
    // let span = document.createElement('span'); //creating a span tag in html
    // span.textContent += current.keywords[j].value + ' ';//"keywords: " followed by the current keywords from search results as we loop
    // para.appendChild(span); //display that result in the html page
    // }

//     if(foodPicture.length === 0){      //defines if statement. if there is no data,
//         console.log("No meal today");  //log no results.
//     } else {                           //otherwise
//         for(let i=0; i< foodPicture.length; i++){   //loop through results
//             let picture = document.createElement('img');  //looping through to show the picture
//             // let title = document.createElement('h2'); //going to create a title for the recipe
//             picture.setAttribute('src',foodPicture)
//             daysOfWeek.appendChild(picture)
// }}}
//     // console.log(foodPicture);

   




    // let liTag= document.getElementsByTagName('li');      //gives me HTML collection
    // console.log(liTag)

    // let currentMeal= foodPicture[i]; 

    // picture.textContent = foodPicture

    // picture.setAttribute('src',foodPicture);
    
    // ulDays.appendChild(picture);  //Trying to put the picture in each li element
// let starWarsPeopleList = document.querySelector('ul');

// fetch('https://swapi.co/api/people')
// .then(function(response) {
//  return response.json();
// })
// .then(function(json) {
//     let people = json.results;

//     for(p of people){
//         let listItem = document.createElement('li');
//         listItem.innerHTML = '<p>' + p.name + '</p>';
//         starWarsPeopleList.appendChild(listItem);
//     }
// });
