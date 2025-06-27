
const todoInput=document.getElementById('text');
const addbtn=document.getElementById('add');
const todoList=document.getElementById('todo-list');

const compSound = new Audio('./complete (online-audio-converter.com).mp3');
const deleteSound = new Audio('./delete (online-audio-converter.com).mp3');

function createTodoItem(task){
  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  const taskText = document.createElement('span');
  taskText.textContent = task;

  const completeButton = document.createElement('button');
  completeButton.className = 'button complete-btn';
  completeButton.textContent = 'Complete';
  completeButton.addEventListener('click', () => {
    taskText.classList.toggle('completed');
    compSound.play();
  });

  const deleteButton = document.createElement('button');
  deleteButton.className = 'button delete-btn';
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    listItem.remove();
    deleteSound.play();
  });

  listItem.appendChild(taskText);
  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);
}

addbtn.addEventListener('click', () => {
  const task = todoInput.value.trim();//cleans whitespace
  if (task !== '') {
    createTodoItem(task);
    todoInput.value = ''; // Clears inputbox so you can type new task
  } else {
    alert('Please enter a task.');
  }
});

todoInput.addEventListener('keydown', (event) =>{
  if(event.key==='Enter'){
    addbtn.click();
  }
});

 






// addbtn:
// When the Add button is clicked:
// It gets the text from the input box.
// Removes extra spaces.
// If there's actual text:
// It adds that as a new task in the list.
// Clears the input field.
// If the input is empty:
// It shows a popup alerting the user to type something.