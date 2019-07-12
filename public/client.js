// client-side js
// run by the browser each time your view template is loaded

console.log('hello world :o');

// our default array of dreams
const measures = [
  'Diagnosis of PAD, Inpatient',
  'Hypertension',
  'Diabetes'
];

// define variables that reference elements on our page
const measuresList = document.getElementById('measures');
const measuresForm = document.forms[0];
const measureInput = measuresForm.elements['measure'];

// a helper function that creates a list item for a given dream
const appendNewMeasure = function(measure) {
  const newListItem = document.createElement('li');
  newListItem.innerHTML = measure;
  measuresList.appendChild(newListItem);
}

// iterate through every dream and add it to our page
measures.forEach( function(measure) {
  appendNewMeasure(measure);
});

// listen for the form to be submitted and add a new dream when it is
measuresForm.onsubmit = function(event) {
  // stop our form submission from refreshing the page
  event.preventDefault();

  // get dream value and add it to the list
  measures.push(measureInput.value);
  appendNewMeasure(measureInput.value);

  // reset form 
  measureInput.value = '';
  measureInput.focus();
};


// API Calls
const baseURL = 'https://api.github.com/repos/aetion/amsc/contents/measures';
const DAT_TOKEN = 'XXXXXXXXXXX'
const request = new XMLHttpRequest()
const listList = document.getElementById('list');


request.open('GET', baseURL, true)
request.setRequestHeader('Authorization', 'Bearer ' + DAT_TOKEN);
request.onload = function() {
  // Begin accessing JSON data
  const data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(measure => {
      const newListItem = document.createElement('li');
      newListItem.innerHTML = measure.name;
      listList.appendChild(newListItem);
    })
  } else {
    console.log('error')
  }
}

request.send()
