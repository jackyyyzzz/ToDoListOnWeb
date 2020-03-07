function eventEnter() {
    if (document.getElementById('input').value.trim() == "") {
        document.getElementById("input").value = "";
        alert("Cannot be empty.")
        return;
    }

    const list = document.createElement('li');

    const input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener('change', checkHandler);

    const event = document.createElement("span");
    event.innerHTML = document.getElementById("input").value;

    list.appendChild(input);
    list.appendChild(event);
    document.getElementById("lists").appendChild(list);

    document.getElementById("input").value = "";

    if (document.getElementById('lists').childElementCount > 0){
        document.getElementById('clearBtn').hidden = false
    }
    
}

function checkHandler(event)
{
    const checkbox = event.target;
    if (checkbox.checked) {
        checkbox.parentElement.querySelector('span').style.textDecoration = "line-through";
    }else {
        checkbox.parentElement.querySelector('span').style.textDecoration = "";
    }

}

function enter() {
    if(event.key === 'Enter') {
        eventEnter();
    }
}

function clearCompletes() {
    const tasks = document.querySelector('ul').children;

    for (i = tasks.length - 1; i >= 0; i--) {
        if (tasks[i].children[0].checked) {
            tasks[i].remove();
        }
    }

    if (tasks.length == 0) {
        document.getElementById('clearBtn').hidden = true;
    }
}