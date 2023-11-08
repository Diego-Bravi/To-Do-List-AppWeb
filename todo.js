let tasks = []; 
let taskId = 1; 

function addTask() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const date = document.getElementById('taskDate').value;

    if (title && date) {
        
        const task = {
            id: taskId++,
            title: title,
            description: description,
            date: date,
        };

        tasks.push(task);
        
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-id', task.id); 
        card.innerHTML = `
            <h2>${task.title}</h2>
            <p>Description: ${task.description || '//'}</p>
            <p>Due Date: ${task.date}</p>
            <button onclick="deleteTask(${task.id})">Eliminar</button>
        `;
        
        document.getElementById('taskList').appendChild(card);

       
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskDate').value = '';
    } else {
        
        alert('Fill Inputs');
    }
}

function deleteTask(taskId) {
   
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex !== -1) {
        
        tasks.splice(taskIndex, 1);
        
        const taskElement = document.querySelector(`.card[data-id="${taskId}"]`);
        if (taskElement) {
            taskElement.remove();
        }
    }
}