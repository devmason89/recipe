const baseURL = 'https://api.edamam.com/search';
const key ='c25022c64672675340993df4bc3df288';
const appId='3ada96a9';
let url="";

document.querySelector("#myButton").addEventListener("click", fetchFood);
// MAKE SURE YOU HAVE A HASHTAG 

function fetchFood(){            
    // e.preventDefault();            
    url= `${baseURL}?q=chicken&app_id=${appId}&app_key=${key}&from=0&to=3&calories=591-722&health=alcohol-free`;          
    console.log("URL:",url);         

    fetch(url)                         
    .then(function(result) {           
        console.log(result)
        return result.json();          
    })
    .then(function(json){             
        console.log(json)
        console.log(json.q)            
        displayResults(json);         
    })
};  


function displayResults(json){  

    let foodPicture = json.hits[0].recipe.image;     //defines a new variable. .response.docs is dot notation to walk through the api data (NYT data?). They refer to the jsonified data.
  
    let picture = document.createElement('h3');  

    days.appendChild(picture);  //Trying to put the picture in each h3 element




//             let current= articles[i];       //name a variable, looping the articles. starting with 1 
//             console.log("Current:",current);

//             link.href= current.web_url;                             //sets the value of the current page each time we loop through. "web_url" refers to a key value pair in the  jsonified data
//                 console.log(link);   //log the url
//             link.textContent = current.headline.main;               //text is the headline from the json data from the current result

//             para.textContent = 'Keywords: ';                       //add keyword text content to the paragraph
//             for(let j = 0; j < current.keywords.length; j++) {
//                 //looping through keywords
//             let span = document.createElement('span'); //creating a span tag in html
//             span.textContent += current.keywords[j].value + ' ';//"keywords: " follwed by the current keywords from search results as we loop
//             para.appendChild(span); //display that result in the html page
//             }

//             if(current.multimedia.length > 0) {  //if there is an image
               
//                 img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;       //creating the img source
//                  img.alt = current.headline.main;  //if image fails, display the headline
//               }
               
//             clearfix.setAttribute('class','clearfix'); //using setAttribute method to target clearfix class, sets the div to a class, naming the div class clearfix
            
//             article.appendChild(heading);    //inserts data into the html to view on page
//             heading.appendChild(link);      //inserts a link into the heading part of the html page
//             section.appendChild(article);   //inserts an article into the section part of htmp page 
//             article.appendChild(img);
//             article.appendChild(clearfix);
//             section.appendChild(article);
//             article.appendChild(para);    //adding to an existing parent
        
//         }
//     }


// if (articles.length===10) {          //if we have exactly 10 results
//     nav.style.display='block';       //shows the nav display if 10 items are in the array
// } else {                             //otherwise
//     nav.style.display ='none';       //hides the nav display if less than 10 items are in the array
// }
// }

// function nextPage(e) {             //declares a function called nextPage with parameter e
//     pageNumber++;                 //cycle through pages
//     fetchResults(e);              //cycling results along the way 
//     console.log("Page number:", pageNumber); //displaying the page number they're on
//  };


