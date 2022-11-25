document.addEventListener("DOMContentLoaded" , function() {
    var form = document.querySelector("#new-task-form");
    var input = document.querySelector("#new-task-input");
    var noncompleted = document.querySelector("#tasks");
    var completed = document.querySelector("#tasks2");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        var taask = input.value;

        if (!taask) {
            alert("please fill out the task");
            return;
        }

        var task_el = document.createElement("div");
        task_el.classList.add("task");
        

        var task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_el.appendChild(task_content_el);

        var task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type  = "text";
        
        task_input_el.setAttribute("readonly" , "readonly");
        task_content_el.appendChild(task_input_el);

        var task_actions_el =  document.createElement("div");
        task_actions_el.classList.add("actions");
        task_el.appendChild(task_actions_el);

        var task_check_el = document.createElement("button");
        task_check_el.classList.add("check");
        task_check_el.innerHTML = '<i class="fa-solid fa-square-check"></i>';
        var task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerText = "Edit";
        var task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerText = "Delet";

        


        

        if (input.value !=='') {
            task_input_el.value = taask;
            input.value = '';
            noncompleted.appendChild(task_el);
            task_actions_el.appendChild(task_check_el);
            task_actions_el.appendChild(task_edit_el);
            task_actions_el.appendChild(task_delete_el);
            

            task_check_el.addEventListener('click' , function () {
                noncompleted.removeChild(task_el);
                completed.appendChild(task_el);
                task_check_el.style.display = "none";
            })

            task_delete_el.addEventListener('click' , function () {
                completed.removeChild(task_el);
            });   

            task_edit_el.addEventListener('click' , function () {
                if (task_edit_el.innerText.toLowerCase() == "edit") {
                    task_input_el.removeAttribute("readonly");
                    task_input_el.focus();
                    task_edit_el.innerText = "save";            
                } else{
                    task_input_el.setAttribute("readonly" , "readonly");
                    task_edit_el.innerText = "Edit";
                    }

                });
            task_delete_el.addEventListener('click' , function () {
                noncompleted.removeChild(task_el);
            });   
        }
    })







































})
