const addBtn = document.querySelector('#add-btn')
const input = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')

addBtn.addEventListener('click', function(){
    if(input.value === ''){
        alert('You must write something')
    } else{
        let li = document.createElement('li')
        li.textContent = input.value
        listContainer.appendChild(li)

        let span = document.createElement('span')
        span.textContent = "\u00d7";
        li.appendChild(span)

        input.value = ''
        storeData()
    }
})

listContainer.addEventListener('click', function(e){
    let target = e.target

    if(target.tagName === "LI"){
        target.classList.toggle('checked');
        storeData()
    } else if (target.tagName === "SPAN"){
        target.parentElement.style.animation = "slideOut .5s linear"
        target.parentElement.remove();
        storeData()
    }

})

function storeData(){
    localStorage.setItem('data', listContainer.innerHTML)
}

function renderTasks(){
    listContainer.innerHTML = localStorage.getItem('data')
}
renderTasks()