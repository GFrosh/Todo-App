var taskInput = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');

function addTask() {
    if (taskInput.value.trim() !== '') {
        var taskItem = document.createElement('li');
        var deleteTaskItem = document.createElement('button');
        deleteTaskItem.textContent = "Delete";
        deleteTaskItem.id = "delete";
        
        
        taskItem.textContent = taskInput.value;
        
        taskItem.addEventListener('click', 
            function () {
                taskItem.classList.toggle('done');
                saveTasks();
            });
        
        deleteTaskItem.addEventListener('click', 
            function () {
                    taskList.removeChild(taskItem);
                    saveTasks();
                    });
        
        
        taskItem.appendChild(deleteTaskItem);
        taskList.appendChild(taskItem);
        taskInput.value = '';
        
        saveTasks();
    }
}

function saveTasks() {
    var tasksArray = []
    var items = taskList.children;
    for (var i = 0; i < items.length; i++) {
        tasksArray.push(items[i].outerHTML)
    }
    for (var i = 0; i < tasksArray.length; i++) {
        localStorage.setItem('tasks', tasksArray.join(' '));
        console.log(tasksArray[i]);
    }
}

function loadTasks() {
    var savedItem = localStorage.getItem('tasks');
    
    if (savedItem) {
        taskList.innerHTML = savedItem;
        console.log(savedItem);
        
    }
}

function clearTasks() {
    taskList.innerHTML = '';
    localStorage.removeItem('tasks');
}


document.addEventListener('DOMContentLoaded', 
    function() {
        loadTasks();
    });

document.ondblclick = clearTasks;