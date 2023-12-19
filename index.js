const randomModal = document.getElementById("modal1");
const randomImage = document.getElementById("randomImage");
var data;

function getRandomData() {
  return axios
    .get("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => {
      data = response.data.meals[0];
      //   console.log(data);
      displayData(data);
    })
    .catch((error) => {
      console.log("error fetching data", error);
      return null;
    });
}

getRandomData();

const randImageDiv = document.getElementById("randomImage");
const ranImage = document.getElementById("irandom");
const ranName = document.getElementById("prandom");
const ranIngredients = document.getElementById("ingredients");

function displayData(data) {
  if (data) {
    //     const category = data.categories[0]
    //     ranImage.setAttribute('src', `${category.strCategoryThumb}`)
    //     ranName.textContent = category.strCategory;
    //     ranAbout.textContent = category.strCategoryDescription;

    //   const category = data.categories[i];
    //   ranImage.innerHTML = `<img src="${category.strCategoryThumb}">`;
    //   ranName.textContent = category.strCategory;
    //   ranAbout.textContent = category.strCategoryDescription;

    // ranImage.setAttribute('src', `${data.meals[0].strMealThumb}`)
    // ranName.textContent = data.meals[0].strMeal

    // for (var i = 0; i<21; i++){
    //     const ranAbout = document.getElementById('aboutDish');
    //     ranAbout.innerText = `${data.strIngredient[i]} - ${data.strMeasure[i]}.`
    // }

    // for(var i = 0; i<data.categories.length; i++){
    // const category = data.categories[i];
    // randImageDiv.innerHTML = `<img src="${data.strMealThumb}"  class="irandom" id="irandom"> <p class="prandom" id="prandom">${data.strMeal}</p>`
    // randomModal.innerHTML = `<div class="aboutDish" id="aboutDish">${data.strInstructions}</div>`
    // }

    randImageDiv.innerHTML = `<img src="${data.strMealThumb}"  class="irandom" id="irandom"> <p class="prandom" id="prandom">${data.strMeal}</p>`;
    // const prandom = document.getElementById('prandom')
    // prandom.innertext = `${data.strCategory}`;
    randomModal.innerHTML = `<div class="aboutDish" id="aboutDish">${data.strInstructions}</div>`;
  }
}

// setInterval(displayData, 2000)

randomImage.onclick = () => {
  displayRandom();
};

let flag = 1;
function displayRandom() {
  if (flag === 1) {
    randomModal.style.display = "block";
    randomModal.style.textAlign = "center";
    // getRandomData().then((data) => {
    //     displayData(data);
    // });
    displayData(data);
    return (flag = 0);
  } else {
    randomModal.style.display = "none";
    return (flag = 1);
  }
}

// const input = document.getElementById("input");
// const submit = document.getElementById("submit");

// function collectInputData() {
//   var inputValue = input.value;
//   submit.onclick = () => {
//     var detail;
//     function getSearchedData() {
//       return new axios.get(
//         `https://www.themealdb.com/api/json/v1/1/filter.php?c=${inputValue}`
//       )
//         .then((response) => {
//           detail = response.data.meals[0];
//           console.log(data);
//           displayGridData(data);
//         })
//         .catch((error) => {
//           console.log("error caught", error);
//         });
//     }
//     console.log(inputValue)
//   };
// }

// const input = document.getElementById("input");
// const submit = document.getElementById("submit");

// function collectInputData() {
//   var inputValue = input.value;
//   submit.onclick = () => {
//     // location.reload()
//     function getSearchedData() {
//       return axios
//         .get(
//           `https://www.themealdb.com/api/json/v1/1/filter.php?c=${inputValue}`
//         )
//         .then((response) => {
//           const data = response.data.meals;
//           console.log(data);
//           displayGridData(data);
//         })
//         .catch((error) => {
//           console.log("error caught", error);
//         });
//     }
//     console.log(inputValue);
//     getSearchedData();
//   };
// }

// function displayGridData(data) {
    
// }

// collectInputData();
