const ratings = document.querySelectorAll(".rating-display .value");
for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText)
    if (ratingValue > 4.7) {
        rating.classList.add("high-rating")
        rating.classList.remove("value")
    }
}

const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} amazing parks to visit`;
newElement.classList.add("header-statement")
const header = document.querySelector("header");
header.appendChild(newElement)




const allBtns = document.querySelectorAll(".rate-button");

allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      console.log(event.target.parentNode);
      const park = event.target.parentNode;
      park.style.backgroundColor = "#c8e6c9";
    });
  });


//name sort
  const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  };

  const sortByRating = (parkA, parkB) => {
    const parkARating = parseFloat(parkA.querySelector(".rating-display > .value"))
    const parkBRating = parseFloat(parkB.querySelector(".rating-display > .value"))
    if (parkARating - parkBRating) {
      return -1;
    } else if (parkARating > parkBRating) {
      return 1;
    } else {
      return 0;
    }
}
  
  // Function for handling the `nameSorter` click
  const nameSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main
    main.innerHTML = "";
  
    // 4. Create an array
    const parksArray = Array.from(parksList);
  
    // 5. Sort the array
    parksArray.sort(sortByName);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };
  
  // Select the `nameSorter` link
  const nameSorter = document.querySelector("#name-sorter");
  
  // Add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  // rating sort

const ratingSorterClickHandler = (event) => {
    event.preventDefault();

    const main = document.querySelector("main");
    const parksList = main.querySelectorAll(".park-display");
    main.innerHTML = "";
    const parksArray = Array.from(parksList);
    parksArray.sort((parkA, parkB) => {
        let parkARating = parkA.querySelector(".rating-display > .value")
        console.log(parkARating)
        let parkBRating = parkB.querySelector(".rating-display > .value")
        if (parkARating < parkBRating) {
            return -1;
          } else if (parkARating > parkBRating) {
            return 1;
          } else {
            return 0;
          }
    })
    parksArray.forEach((park) => {
        main.appendChild(park)
    })
    console.log("it ran")
}

const ratingSorter = document.querySelector("#rating-sorter")
ratingSorter.addEventListener("click", ratingSorterClickHandler);