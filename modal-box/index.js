let modalBtn = document.querySelector('.modal-btn')
let modalWrapper = document.querySelector('.modal-wrapper')
// let modalBox = document.querySelector('.modal-box')

modalBtn.addEventListener('click', function () {
    modalWrapper.classList.add('active')
})

function closeModal(){
    modalWrapper.classList.remove('active')
}

window.onclick = function (e) {
    if(e.target.classList.contains('modal-wrapper')){
       closeModal()
    }
}