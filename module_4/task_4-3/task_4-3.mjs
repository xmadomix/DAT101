"use strict";

//--- Part 1 ----------------------------------------------------------------------------------------------
const cmbTask1Calculate = document.getElementById("cmbTask1Calculate") ;
cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick) ;

function cmbTask1CalculateClick() {
  const txtRectHeight = document.getElementById("txtRectHeight") ;
  const txtRectWidth = document.getElementById("txtRectWidth") ;
  const height = Number(txtRectHeight.value) ;
  const width = Number(txtRectWidth.value) ;
  const perimeter = 2 * (height + width) ;
  const area = height * width ;
  const txtTask1Output = document.getElementById("txtTask1Output") ;
  txtTask1Output.innerHTML = `Omkrets: ${perimeter} &nbsp; Areal: ${area}` ;
}

//--- Part 2 ----------------------------------------------------------------------------------------------
const txtTask2Word = document.getElementById("txtTask2Word") ;
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress) ;

let task2Words = [] ;
const txtTask2Output = document.getElementById("txtTask2Output") ;

function txtTask2WordKeyPress(aEvent) {
  const key = aEvent.key ;
  console.log(key) ;
  if (key === "Enter") {
    const words = txtTask2Word.value.split(" ") ;
    txtTask2Word.value = "" ;
    task2Words = task2Words.concat(words) ;
    txtTask2Output.innerHTML = `Number of words: ${task2Words.length}<br>${task2Words.join(" ")}` ;
    console.log(task2Words) ;
  }
}

//--- Part 3 ----------------------------------------------------------------------------------------------
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer") ;
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick) ;

const txtTask3Output = document.getElementById("txtTask3Output") ;
let text = "" ;

function cmbTask3CheckAnswerClick() {
  const chkTask3 = document.getElementsByName("chkTask3") ;
  for (let i = 0; i < chkTask3.length; i++) {
    const checkBox = chkTask3[i] ;
    if (checkBox.checked) {
      const value = checkBox.value ;
      text += `Du har valgt nummer ${value}.<br />` ;
    }
  }
  txtTask3Output.innerHTML = text ;
  text = "" ; 
}

//--- Part 4 ----------------------------------------------------------------------------------------------
const divTask4Cars = document.getElementById("divTask4Cars") ;
const txtTask4Output = document.getElementById("txtTask4Output") ;

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
] ;

CarTypes.forEach(car => {
  const radio = document.createElement("input") ;
  radio.type = "radio" ;
  radio.name = "radioCar" ;
  radio.value = car.value ;
  radio.id = `car${car.value}` ;

  const label = document.createElement("label") ;
  label.htmlFor = `car${car.value}` ;
  label.textContent = car.caption ;

  divTask4Cars.appendChild(radio) ;
  divTask4Cars.appendChild(label) ;
  divTask4Cars.appendChild(document.createElement("br")) ;
}) ;

divTask4Cars.addEventListener("click", () => {
  const selectedRadio = document.querySelector('input[name="radioCar"]:checked') ;
  if (selectedRadio) {
    const selectedCar = CarTypes.find(car => car.value == selectedRadio.value).caption;
    txtTask4Output.innerHTML = `Cool! you have chosen a: ${selectedCar}` ;
  }
}) ;

//--- Part 5 ----------------------------------------------------------------------------------------------
const selectTask5Animals = document.getElementById("selectTask5Animals") ;
const txtTask5Output = document.getElementById("txtTask5Output") ;


selectTask5Animals.addEventListener("change", () => {
  const selectedValue = selectTask5Animals.value ; 
  const selectedText = selectTask5Animals.options[selectTask5Animals.selectedIndex].text ; 
  
  
  txtTask5Output.innerHTML = `You have chosen: ${selectedText}`;
}) ;

//--- Part 6 ----------------------------------------------------------------------------------------------
const selectTask6Girls = document.getElementById("selectTask6Girls") ;
const txtTask6Output = document.getElementById("txtTask6Output") ;

const GirlsNames = [
  "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva",
  "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig",
  "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin",
] ;

GirlsNames.forEach(name => {
  const option = document.createElement("option") ;
  option.value = name ;
  option.textContent = name ;
  selectTask6Girls.appendChild(option) ;
}) ;

selectTask6Girls.addEventListener("change", () => {
  const selectedName = selectTask6Girls.value;
  txtTask6Output.innerHTML = `You have summoned: ${selectedName}` ;
}) ;

//--- Part 7 ----------------------------------------------------------------------------------------------

"use strict";

const movieGenres = [
  "Action", "Adventure", "Animation", "Biography", "Comedy", "Crime",
  "Documentary", "Drama", "Family", "Fantasy", "History",
  "Horror", "Music", "Mystery", "Romance", "Sci-Fi", "Thriller", "War", "Western",
];

const genreDropdown = document.getElementById("selectMovieGenre");
movieGenres.forEach((genre) => {
  const option = document.createElement("option");
  option.value = genre;
  option.textContent = genre;
  genreDropdown.appendChild(option);
});

const addMovieButton = document.getElementById("cmbAddMovie");
const movieTableBody = document.querySelector("#tblMovies tbody");

addMovieButton.addEventListener("click", () => {
  const title = document.getElementById("txtMovieTitle").value.trim();
  const genre = document.getElementById("selectMovieGenre").value;
  const director = document.getElementById("txtMovieDirector").value.trim();
  const rating = document.getElementById("txtMovieRate").value.trim();

  if (!title || !genre || !director || !rating) {
    alert("Please fill in all fields.");
    return;
  }

  const newRow = movieTableBody.insertRow();

 
  const rowNumber = newRow.insertCell(0);
  rowNumber.textContent = movieTableBody.rows.length + 1;


  const titleCell = newRow.insertCell(1);
  titleCell.textContent = title;


  const genreCell = newRow.insertCell(2);
  genreCell.textContent = genre;

 
  const directorCell = newRow.insertCell(3);
  directorCell.textContent = director;

 
  const ratingCell = newRow.insertCell(4);
  ratingCell.textContent = rating;

  
  document.getElementById("txtMovieTitle").value = "";
  document.getElementById("txtMovieDirector").value = "";
  document.getElementById("txtMovieRate").value = "5";
});

