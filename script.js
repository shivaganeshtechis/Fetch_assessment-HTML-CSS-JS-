function handleFormSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
  
    const formJSON = Object.fromEntries(data.entries());
  
    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
  }
  
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', handleFormSubmit);



//   *****************************************************************


function populateSelect() {
    // THE JSON ARRAY.
    var states = [
      { name: "Alabama", abbreviation: "Alabama" },
      { name: "Alaska", abbreviation: "Alaska" },
      { name: "Arizona", abbreviation: "Arizona" },
      { name: "Arkansas", abbreviation: "Arkansas" },
      { name: "California", abbreviation: "California" },
      { name: "Colorado", abbreviation: "Colorado" },
      { name: "Connecticut", abbreviation: "Connecticut" },
      { name: "Delaware", abbreviation: "Delaware" },
      { name: "District Of Columbia", abbreviation: "District Of Columbia" },
      { name: "Florida", abbreviation: "Florida" },
      { name: "Georgia", abbreviation: "Georgia" },
      { name: "Hawaii", abbreviation: "Hawaii" },
      { name: "Idaho", abbreviation: "Idaho" },
      { name: "Illinois", abbreviation: "Illinois" },
      { name: "Indiana", abbreviation: "Indiana" },
      { name: "Iowa", abbreviation: "Iowa" },
      { name: "Kansas", abbreviation: "Kansas" },
      { name: "Kentucky", abbreviation: "Kentucky" },
      { name: "Louisiana", abbreviation: "Louisiana" },
      { name: "Maine", abbreviation: "Maine" },
      { name: "Maryland", abbreviation: "Maryland" },
      { name: "Massachusetts", abbreviation: "Massachusetts" },
      { name: "Michigan", abbreviation: "Michigan" },
      { name: "Minnesota", abbreviation: "Minnesota" },
      { name: "Mississippi", abbreviation: "Mississippi" },
      { name: "Missouri", abbreviation: "Missouri" },
      { name: "Montana", abbreviation: "Montana" },
      { name: "Nebraska", abbreviation: "Nebraska" },
      { name: "Nevada", abbreviation: "Nevada" },
      { name: "New Hampshire", abbreviation: "New Hampshire" },
      { name: "New Jersey", abbreviation: "New Jersey" },
      { name: "New Mexico", abbreviation: "New Mexico" },
      { name: "New York", abbreviation: "New York" },
      { name: "North Carolina", abbreviation: "North Carolina" },
      { name: "North Dakota", abbreviation: "North Dakota" },
      { name: "Ohio", abbreviation: "Ohio" },
      { name: "Oklahoma", abbreviation: "Oklahoma" },
      { name: "Oregon", abbreviation: "Oregon" },
      { name: "Pennsylvania", abbreviation: "Pennsylvania" },
      { name: "Rhode Island", abbreviation: "Rhode Island" },
      { name: "South Carolina", abbreviation: "South Carolina" },
      { name: "South Dakota", abbreviation: "South Dakota" },
      { name: "Tennessee", abbreviation: "Tennessee" },
      { name: "Texas", abbreviation: "Texas" },
      { name: "Utah", abbreviation: "Utah" },
      { name: "Vermont", abbreviation: "Vermont" },
      { name: "Virginia", abbreviation: "Virginia" },
      { name: "Washington", abbreviation: "Washington" },
      { name: "West Virginia", abbreviation: "West Virginia" },
      { name: "Wisconsin", abbreviation: "Wisconsin" },
      { name: "Wyoming", abbreviation: "Wyoming" },
    ];
  
    var ele = document.getElementById("sel");
    for (var i = 0; i < states.length; i++) {
      // POPULATE SELECT ELEMENT WITH JSON.
      ele.innerHTML =
        ele.innerHTML +
        '<option value="' +
        states[i]["abbreviation"] +
        '">' +
        states[i]["name"] +
        "</option>";
    }
  }
  
  // ***************OCCUPATION***********************
  
  function populateSelect2() {
    // THE JSON ARRAY.
    var occupations = [
      {c:"Head of Shrubbery",occ:"Head of Shrubbery"},
      {c:"Interim Substitute Teacher",occ:"Interim Substitute Teacher"},
      {c:"Water Softener",occ:"Water Softener"},
      {c:"Listener of the House",occ:"Listener of the House"},
      {c:"Really Good Dancer",occ:"Really Good Dancer"},
      {c:"Gainfully Unemployed",occ:"Gainfully Unemployed"},
      {c:"Alexa Impersonator",occ:"Alexa Impersonator"},
      {c:"Chard Farmer",occ:"Chard Farmer"},
      {c:"Chief Frolicker (Jolly)",occ:"Chief Frolicker (Jolly)"},
      {c:"Entry-level Seat Recliner",occ:"Entry-level Seat Recliner"},
      {c:"CEO (Summer Internship)",occ:"CEO (Summer Internship)"},
      {c:"Widget Fabricator",occ:"Widget Fabricator"},
      {c:"Underwater Basket Weaver",occ:"Underwater Basket Weaver"},
    ];
  
    var ele = document.getElementById("sel2");
    for (var j = 0; j < occupations.length; j++) {
      // POPULATE SELECT ELEMENT WITH JSON.
      ele.innerHTML =
        ele.innerHTML +
        '<option value="' +
        occupations[j]["c"] +
        '">' +
         occupations[j]["occ"] +
        "</option>";
    }
  }