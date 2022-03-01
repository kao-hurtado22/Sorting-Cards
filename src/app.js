window.onload = () => {
  let suits = ["diams", "hearts", "clubs", "spades"];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let objOfCards = [];

  let buttonDraw = document.querySelector(".draw-button");
  buttonDraw.addEventListener("click", myFunctionCards);

  function myFunctionCards() {
    objOfCards = [];
    let myCard = document.querySelector(".container");
    if (myCard.childNodes.length !== 0) {
      myCard.innerHTML = "";
    }
    let inputValueCards = parseInt(
      document.getElementById("numbercards").value
    );

    if (inputValueCards === 0) {
      alert("Coloca un numero mayor a 0");
    } else if (inputValueCards !== 0) {
      for (let i = 0; i < inputValueCards; i++) {
        let objElementsCard = {
          suits: suits[Math.floor(Math.random() * suits.length)],
          numbers: numbers[Math.floor(Math.random() * numbers.length)]
        };

        objOfCards.push(objElementsCard);
      }

      if (myCard.childNodes.length === 0) {
        for (let element of objOfCards) {
          if (element.numbers === 1) {
            element.numbers = "A";
          }
          if (element.numbers === 11) {
            element.numbers = "J";
          }
          if (element.numbers === 12) {
            element.numbers = "Q";
          }
          if (element.numbers === 13) {
            element.numbers = "K";
          }
          let myDiv = document.createElement("div");
          let contentDiv = document.createTextNode(`${element.numbers}`);
          myDiv.className = `card ${element.suits}`;
          myDiv.appendChild(contentDiv);
          myCard.appendChild(myDiv);
        }
      }
    }
  }

  const bubbleSort = () => {
    let myContainerDiv = document.querySelector(".contenedor-listas-sort");
    if (myContainerDiv.childNodes.length !== 0) {
      myContainerDiv.innerHTML = "";
    }
    let wall = objOfCards.length - 1;
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        if (objOfCards[index].numbers === "A") {
          objOfCards[index].numbers = 1;
        }
        if (objOfCards[index].numbers === "J") {
          objOfCards[index].numbers = 11;
        }
        if (objOfCards[index].numbers === "Q") {
          objOfCards[index].numbers = 12;
        }
        if (objOfCards[index].numbers === "K") {
          objOfCards[index].numbers = 13;
        }

        if (objOfCards[index].numbers > objOfCards[index + 1].numbers) {
          let aux = objOfCards[index].numbers;
          objOfCards[index].numbers = objOfCards[index + 1].numbers;
          objOfCards[index + 1].numbers = aux;
        }
        index++;
      }
      wall--;
      let myUl = document.createElement("ul");
      let liNumber = document.createElement("li");
      liNumber.innerHTML = `${index - 1}:`;
      myUl.appendChild(liNumber);
      myUl.className = "lista-containers-cards-sort";
      myContainerDiv.appendChild(myUl);
      for (let element of objOfCards) {
        if (element.numbers === 1) {
          element.numbers = "A";
        }
        if (element.numbers === 11) {
          element.numbers = "J";
        }
        if (element.numbers === 12) {
          element.numbers = "Q";
        }
        if (element.numbers === 13) {
          element.numbers = "K";
        }
        let myLi = document.createElement("li");
        let contentLi = document.createTextNode(`${element.numbers}`);
        myLi.className = `card ${element.suits}`;
        myLi.appendChild(contentLi);
        myUl.appendChild(myLi);
      }
    }
    return objOfCards;
  };

  let sortButton = document.querySelector(".sort-button");
  sortButton.addEventListener("click", bubbleSort);
};
