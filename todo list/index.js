const addTxt = document.querySelector('#push');
const newTask = document.querySelector('.newtask input')
const tasks = document.querySelector('#tasks')

addTxt.addEventListener('click', function () {
    if (newTask.value == 0) {
        alert('Please Enter Your Text')
    } else {
        tasks.innerHTML += `<div class='task'>
                    <span>
                            ${document.querySelector('.newtask input').value}    
                    </span>   
                        <button class='delete'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"/></svg>
                        </button>
                    </div>`
    }

    const select = document.querySelectorAll('.task');
    for (let i = 0; i < select.length; i++) {
        select[i].onclick = function () {
            this.classList.toggle('completed')
        }
    }

    const deleteTask = document.querySelectorAll('.delete')
    for (let i = 0; i < deleteTask.length; i++) {
        deleteTask[i].onclick = function () {
            this.parentNode.remove();
        }
    }

    newTask.value = ''
})