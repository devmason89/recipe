const baseURL = 'https://api.edamam.com/search';
const key ='c25022c64672675340993df4bc3df288';
const appId='3ada96a9';
let url="";

// daysOfWeek=document.querySelector('li');

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


// let planner = json.hits[random].recipe.label
const newWeek = document.getElementById('ulDays');

function displayResults(json){  

    while(newWeek.firstChild){
        newWeek.removeChild(newWeek.firstChild);
    }

    // while(section.firstChild){      //looking at 1st search request
    //     section.removeChild(section.firstChild);     //removing first fetch results with replacement search
    // }

    let days = ["MONDAY","TUESDAY",'WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY'];
    // let served = document.getElementById('ulDays'); 
    // let days = served.getElementById("da");
    //Math.floor(x)
    //Returns the largest integer less than or equal to a number.
    //Math.random()
    //Returns a pseudo-random number between 0 and 1.
    for (let i=0; i<days.length; i++) {
        let random = Math.floor(Math.random()*7);
        let foodPicture = json.hits[random].recipe.image
        let picture = document.getElementById('ulDays');
        let list = document.createElement('li')
        let foto=document.createElement('img')
        picture.appendChild(list)        
        picture.appendChild(foto)
        list.innerHTML= days[i]
        foto.setAttribute('src',foodPicture)
    }

    if(foodPicture.length = 0) {  
         img.alt = planner;  //if image fails, display the headline
      }          
}



// *need to break apart pieces. no nested functions in my api object data. 




