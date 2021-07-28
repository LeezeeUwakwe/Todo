let holder = document.querySelector('.holder')
holder.addEventListener('click', e => {
    e.preventDefault()
    whenClicked(e)
})

function whenClicked(e) {
    if (e.target.classList.contains('check-box')) {
      e.target.children[0].classList.toggle('icon')
      e.target.classList.toggle('gradient')
    } else if (e.target.hasAttribute('src')) {
         e.target.classList.toggle('icon')
        e.target.parentElement.classList.toggle('gradient')  
    } else {
        false
    }
} 