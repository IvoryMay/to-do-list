// selectors
const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const listGroup = document.querySelector("#listGroup");
const doneTaskTotal = document.querySelector("#doneTaskTotal");
const taskTotal = document.querySelector("#taskTotal");
// let count = 1;

//Actions ( Business Logic )


const updateTaskTotal = () => {
    // count list and update
    const lists = document.querySelectorAll(".list");
    taskTotal.innerText = lists.length;
}

const updateDoneTaskTotal = () => {
    // count list and update
    const lists = document.querySelectorAll(".list input:checked");
    doneTaskTotal.innerText = lists.length;
}

//create new list
const createNewList = (currentTask) => {
    const list = document.createElement("div");
    list.classList.add("list");
    list.id = "list"+ Date.now();
    // list.id = "list"+ count++ ;
    list.innerHTML = `<div class=" flex justify-between border border-stone-950 p-3 mb-3">
          <div class="flex gap-2 items-center">
            <input type="checkbox" class="list-done-check accent-stone-950" />
            <p class="font-serif list-task">${currentTask}</p>
          </div>
          <div>
            <button class="list-edit-btn border border-stone-950 p-2 disabled:opacity-20"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 pointer-events-none">
              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            </button>
            <button class=" list-del-btn border border-stone-950 p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 pointer-events-none">
              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            </button>
          </div>
        </div>`;

        // const listDoneCheck = list.querySelector(".list-done-check");
        // const listTask = list.querySelector(".list-task");
        // const listDelBtn = list.querySelector(".list-del-btn"); 
        // const listEditBtn = list.querySelector(".list-edit-btn");


        // listDoneCheck.addEventListener("change",() => {
        //     updateDoneTaskTotal(); 
        //     listTask.classList.toggle("line-through");
        //     listTask.classList.toggle("duration-200");
        //     list.classList.toggle("opacity-20");
        //     list.classList.toggle("scale-90");
        //     if(listDoneCheck.checked){
        //       listEditBtn.setAttribute("disabled",true)
        //     }else{
        //       listEditBtn.removeAttribute("disabled");
        //     }
        // });

        // listDelBtn.addEventListener("click",() => {
        //   if(window.confirm("Are you sure to delete?")){
        //     list.remove();
        //   }
        // });

        // listEditBtn.addEventListener("click",() => {
        //   listEditBtn.setAttribute("disabled",true);
        //   listDoneCheck.setAttribute("disabled",true);
        //   const currentTask =listTask.innerText;
        //   const newTaskInput = document.createElement("input");
        //   newTaskInput.className=" border border-stone-950 py-1 px-2 w-[180px] "
        //   newTaskInput.value = currentTask;
        //   listTask.after(newTaskInput);
        //   newTaskInput.focus();
        //   listTask.classList.add("hidden");

        //   newTaskInput.addEventListener("change",() => {
        //     listEditBtn.removeAttribute("disabled");
        //     listDoneCheck.removeAttribute("disabled");
        //     listTask.innerText = newTaskInput.value;
        //     listTask.classList.remove("hidden");
        //     newTaskInput.remove();
        //   });
        // });


        
        return list;
};

const deleteList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  if(window.confirm("Are you sure to delete?")){
    currentList.remove();
    updateDoneTaskTotal();
    updateTaskTotal();
  }
}


const editList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);

  const listDoneCheck = currentList.querySelector(".list-done-check");
        const listTask = currentList.querySelector(".list-task");
        const listDelBtn = currentList.querySelector(".list-del-btn"); 
        const listEditBtn = currentList.querySelector(".list-edit-btn");
        
      listEditBtn.setAttribute("disabled",true);
          listDoneCheck.setAttribute("disabled",true);
          const currentTask =listTask.innerText;
          const newTaskInput = document.createElement("input");
          newTaskInput.className=" border border-stone-950 py-1 px-2 w-[180px] "
          newTaskInput.value = currentTask;
          listTask.after(newTaskInput);
          newTaskInput.focus();
          listTask.classList.add("hidden");

          newTaskInput.addEventListener("change",() => {
            listEditBtn.removeAttribute("disabled");
            listDoneCheck.removeAttribute("disabled");
            listTask.innerText = newTaskInput.value;
            listTask.classList.remove("hidden");
            newTaskInput.remove();
          });
}

const doneList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);

  const listDoneCheck = currentList.querySelector(".list-done-check");
        const listTask = currentList.querySelector(".list-task");
        const listDelBtn = currentList.querySelector(".list-del-btn"); 
        const listEditBtn = currentList.querySelector(".list-edit-btn");


            listTask.classList.toggle("line-through");
            listTask.classList.add("duration-200");
            currentList.classList.toggle("opacity-20");
            currentList.classList.toggle("scale-90");
            if(listDoneCheck.checked){
              listEditBtn.setAttribute("disabled",true)
            }else{
              listEditBtn.removeAttribute("disabled");
            }
            updateDoneTaskTotal(); 

}


const addList = (text) => {
  // mount to listGroup
  listGroup.append(createNewList( text));
  taskInput.value = null;
  updateTaskTotal();
};


    // console.log(list);
    // Application Logic
    // Handlers

    const listGroupHandler = (event) => {
      const list = event.target.closest(".list");
    if(event.target.classList.contains("list-del-btn")){
      deleteList(event.target.closest(".list").id);
    }

    if(event.target.classList.contains("list-edit-btn")){
      editList(event.target.closest(".list").id);
    }

    if(event.target.classList.contains("list-done-check")){
      doneList(event.target.closest(".list").id);
    }
    };

      const addTaskBtnHandler = () => {
        addList(taskInput.value);
      };
    
    //listener
    addTaskBtn.addEventListener("click",addTaskBtnHandler);
    listGroup.addEventListener("click",listGroupHandler)