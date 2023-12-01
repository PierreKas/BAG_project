const addTask= document.getElementById("add-task");
const taskList= document.getElementById("task-list");

function addFunction(){
    // To prompt an alert if the add button is pressed with an empty value input field
    if(addTask.value == ''){
        alert("First write something before adding")
    }
    // else the written content is added as in the task list
    else{
             

      // let listDiv = document.createElement("div");
      // listDiv.classList.add("list-content");
      
      
      let listContent= document.createElement("li");
      listContent.innerHTML= addTask.value;
      taskList.appendChild(listContent);

      // listDiv.appendChild(listContent);
      // taskList.appendChild(listDiv);

        // const ask_important = prompt("Is this task too important? 'yes' or 'not'");
        // const imp_task = ask_important.toLowerCase();
        
        // if (imp_task=='yes' && imp_task!=='' ){
        //     //pin icon
        //     let important_icon= document.createElement("span");
        //     important_icon.innerHTML= "&#x1F4CC;";
        //     important_icon.classList.add("important_task")
        //     listContent.appendChild(important_icon);
        //     saveTasks();
        // }

         //pin icon
            let important_icon= document.createElement("span");
            important_icon.innerHTML= "&#x1F4CC;";
            important_icon.classList.add("important_task")
            listDiv.appendChild(important_icon);

        //edit icon 
        let edit_icon = document.createElement("span");
        edit_icon.innerHTML = "&#x270F;"; 
        edit_icon.classList.add("editIcon"); // Add a class for edit icon
        listDiv.appendChild(edit_icon);
    
        //delete icon
        let delete_icon= document.createElement("span");
        delete_icon.innerHTML= "\u00d7";
        delete_icon.classList.add("deleteIcon"); // Add a class for delete icon
        listDiv.appendChild(delete_icon);

        

        // let edit_icon= document.createElement("span");
        // delete_icon.innerHTML= "U+270F";
        // listContent.appendChild(edit_icon);

        

    }
    addTask.value= "";
    saveTasks();//To save the updated state of the list
}


taskList.addEventListener("click", function (e) {
    // To mark completed task by clicking in the task
    // if (e.target.tagName === "LI") {
    //   e.target.classList.toggle("completed-task");
    //   saveTasks();//To save the updated state of the list
    // } 
    if (e.target.tagName === "LI" || e.target.parentNode.tagName === "LI") {
      const listItem = e.target.tagName === "LI" ? e.target : e.target.parentNode;
      listItem.classList.toggle("completed-task");
      saveTasks(); // To save the updated state of the list
  }
    // To delete a task by clicking delete-icon
    else if (e.target.classList.contains("deleteIcon")) {
        e.target.parentElement.remove();
        saveTasks();//To save the updated state of the list
    }
    // To edit the task
    else if (e.target.classList.contains("editIcon")) {
      
      // Enter edit mode for the task
      const listItem = e.target.parentElement;
      const taskTextElement = listItem.firstChild; // Assuming the text node is the first child
      const currentText = taskTextElement.textContent;
      
      // Implement edit logic, for instance, using prompt
      const newText = prompt("Edit the task:", currentText);
      
      if (newText !== null && newText !== '') {
          taskTextElement.textContent = newText;
          saveTasks(); // Save the updated state of the list
      }
      // saveTasks();//To save the updated state of the list
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
  displayTasks();//To display all saved data by calling displayTasks() function
  