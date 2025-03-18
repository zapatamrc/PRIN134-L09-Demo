const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const ingredientsList = document.querySelectorAll("#recipe-ingredients li");
const instructionsList = document.querySelectorAll("#recipe-instructions li");
const ing = document.querySelector('#ing');
const int = document.querySelector('#int');
const cake = document.querySelector('#cake');


button1.onclick = highlight;
button2.onclick = check;
button3.onclick = reset;
ing.onclick = ing1;
int.onclick = int1;
cake.onclick = cake1;

function highlight() {
    ingredientsList.forEach((ingredient, index) => {
        if (index % 2 == 0) {
            ingredient.classList.add("highlight");
        }
    });
  }
  
  function check() {
    let delay = 0; 
    instructionsList.forEach(instruction => {
        setTimeout(() => {
            instruction.classList.add("is-done"); 
        }, delay);
        delay += 3000; 
    });
  }
  
  function reset() {
    instructionsList.forEach(instruction => {
        instruction.classList.remove("is-done");
    });
  }

  function ing1() {
    ing.classList.add("animate__animated", "animate__bounce");
    setTimeout(() => {
        ing.classList.remove("animate__animated", "animate__bounce");
    }, 1000);
}

function int1() {
    int.classList.add("animate__animated", "animate__shakeX");
    setTimeout(() => {
        int.classList.remove("animate__animated", "animate__shakeX");
    }, 1000);
}

function cake1() {
    cake.classList.add("animate__animated", "animate__pulse");
    setTimeout(() => {
        cake.classList.remove("animate__animated", "animate__pulse");
    }, 1000); 
}