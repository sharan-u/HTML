function AddTask() {
   var content = document.getElementById("user-input").value;
   var element = document.getElementById("task-container");

   var newElement = document.createElement('div');
   newElement.classList.add('ind-task');
   newElement.innerHTML = '<h2>' + content + '</h2><button onclick="DeleteTask(event)">Delete</button>';

   element.appendChild(newElement);
}

function DeleteTask(event) {
   event.target.parentElement.remove();
}