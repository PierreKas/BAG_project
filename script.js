const addTask= document.getElementById("add-task");
const taskList= document.getElementById("task-list");

function addFunction(){
    // To prompt an alert if the add button is pressed with an empty value input field
    if(addTask.value == ''){
          alert("First write something before adding")
    }
    // else the written content is added as in the task list
    else{
      
          let listContent= document.createElement("li"); //To  create an unordered list 
          listContent.innerHTML= addTask.value;
          taskList.insertBefore(listContent, taskList.childNodes[0]); // To insert the added task on the top of the list
          
          // star icon for important tasks
          let important_icon= document.createElement("span");
          important_icon.innerHTML= "&#9733;";
          important_icon.classList.add("important_task"); //Class to use in CSS
          listContent.appendChild(important_icon);
          
          //edit icon 
          let edit_icon = document.createElement("span");
          edit_icon.innerHTML = "&#x270F;"; 
          edit_icon.classList.add("editIcon"); //Class to use in CSS
          listContent.appendChild(edit_icon);
    
          //delete icon 
          let delete_icon= document.createElement("span");
          delete_icon.innerHTML= "\u00d7";
          delete_icon.classList.add("deleteIcon"); //Class to use in CSS
          listContent.appendChild(delete_icon);
    }
    addTask.value= ""; //To empty the input field when the task is added succesfuly
    saveTasks();//To save the updated state of the list
}
// What to do when buttons or tasks are clicked
taskList.addEventListener("click", function (e) {
          // To mark completed task by clicking in the task
          if (e.target.tagName === "LI") {
            e.target.classList.toggle("completed-task");
            saveTasks();//To save the updated state of the list
    } 
    
          // To delete a task by clicking delete-icon
          else if (e.target.classList.contains("deleteIcon")) {
              e.target.parentElement.remove();
              saveTasks();//To save the updated state of the list
    }
          // To edit the task
          else if (e.target.classList.contains("editIcon") && !e.target.classList.contains("completed-task")) {
            const listItem = e.target.parentElement;
            const taskTextElement = listItem.firstChild; 
            const currentText = taskTextElement.textContent;
          
          // To use prompt for task editing
          const newText = prompt("Edit the task:", currentText);
          
                if (newText !== null && newText !== '') {
                  
                    taskTextElement.textContent = newText;
                    saveTasks(); // Save the updated state of the list
                    alert("Task edited succesfully");
                }
                else{
                  alert("Edit failed");
                }
    }
          // To mark task as completed
          else if(e.target.classList.contains("important_task") && !e.target.classList.contains("completed-task")){
            const listItem = e.target.parentElement;
            listItem.classList.toggle("pinned-task");
            saveTasks();
          }
      
    }, false);
    // Function used to save data 
  function saveTasks(){
          localStorage.setItem("savedTasks",taskList.innerHTML);
  }
    // Function used to display all the saved data
  function displayTasks(){
          taskList.innerHTML=localStorage.getItem("savedTasks");
  }
  displayTasks();//To display all the saved data 
  