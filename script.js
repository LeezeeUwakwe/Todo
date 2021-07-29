let holder = document.querySelector('.holder')
holder.addEventListener('click', e => {
    e.preventDefault()
    whenClicked(e)
})

function whenClicked(e) {
    if (e.target.classList.contains('check-box')) {
      e.target.children[0].classList.toggle('icon')
      e.target.parentElement.children[1].classList.toggle('done')
      e.target.classList.toggle('gradient')
    } else if (e.target.hasAttribute('src')) {
         e.target.classList.toggle('icon')
         e.target.parentElement.parentElement.children[1].classList.toggle('done')
        e.target.parentElement.classList.toggle('gradient')  
    } else {
        false
    }
} 

let itemTodo = document.querySelector('.item-todo')
let input = document.querySelector('.userinput')
itemTodo.addEventListener('click', e => {
    e.preventDefault()
    checked(e)
})
function checked(e) {
    if (input.value.length > 0) { 
        addNewTodo(input.value); 
    }
}

const addNewTodo = (value) => {
    const parentDiv = document.querySelector('.holderParent');
    parentDiv.innerHTML += `<div class="holder-item">
            <div class="check-box">
                <img class="icon" src="./assets/images/icon-check.svg" alt="">
            </div>
            <p>${value}</p>
        </div>`;
}