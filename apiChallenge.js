const baseURL = 'https://ghibliapi.herokuapp.com/people';
let url;

//selecting elements on html
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

const section = document.querySelector('section');

//to hide the "Previous"/"Next" navigation when the page loads, before we do a search.
searchForm.addEventListener('submit', fetchResults);

function fetchResults(e){
    e.preventDefault();
    url = baseURL;
    console.log('URL:', url);    

fetch(url)
    .then(function(result) {
      console.log(result);
      return result.json();
    })
    .then(function(json) {
        console.log(json);
        displayResults(json);
    });
}    

function displayResults(json) {
    // while (section.firstChild) {
    //   section.removeChild(section.firstChild);
    // }
    let articles = json;
  

    if (articles.length === 0) {
        console.log('No results'); 
      } else {
        for (let i = 0; i < articles.length; i++) { 
          let article = document.createElement('div');
          let heading = document.createElement('h2');
          let link = document.createElement('a');
          let para = document.createElement('p');
          let clearfix = document.createElement('div');

          link.setAttribute('class', 'link-text');
          article.setAttribute('class', 'person');
    
        
          let current = articles[i];
          console.log('Current:', current);
          link.href = current.films[0];
          heading.textContent = current.name;
          para.textContent = current.gender + ', ' + current.age;
          console.log(link);
          //link.textContent = current.name;


        article.appendChild(heading);
        //article.appendChild(link);
        article.appendChild(para);
           heading.appendChild(link);
        //   article.appendChild(para);
          section.appendChild(article);
        }
      }
    }