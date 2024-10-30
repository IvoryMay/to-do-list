// selectors
const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const listGroup = document.querySelector("#listGroup");
const doneTaskTotal = document.querySelector("#doneTaskTotal");
const taskTotal = document.querySelector("#taskTotal");
const deleteAll = document.querySelector("#deleteAll");
const doneAll = document.querySelector("#doneAll");
const listTemplate = document.querySelector("#listTemplate");
// let count = 1;

//Actions ( Business Logic )

const updateTaskTotal = () => {
  // count list and update
  const lists = document.querySelectorAll(".list");
  taskTotal.innerText = lists.length;
};

const updateDoneTaskTotal = () => {
  // count list and update
  const lists = document.querySelectorAll(".list input:checked");
  doneTaskTotal.innerText = lists.length;
};

//create new list
const createNewList = (currentTask) => {
  const list = listTemplate.content.cloneNode(true);
  console.log(list);
  list.querySelector(".list").id = "list" + Date.now();
  list.querySelector(".list-task").innerText = currentTask;
  // const list = document.createElement("div");
  // list.classList.add("list");
  // list.id = "list" + Date.now();
  // // list.id = "list"+ count++ ;
  // list.innerHTML = ``;

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
  if (window.confirm("Are you sure to delete?")) {
    currentList.classList.add("animate__animated", "animate__hinge");
    currentList.addEventListener("animationend", () => {
      currentList.remove();
    updateDoneTaskTotal();
    updateTaskTotal();
    });
  }
};

const editList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);

  const listDoneCheck = currentList.querySelector(".list-done-check");
  const listTask = currentList.querySelector(".list-task");
  const listDelBtn = currentList.querySelector(".list-del-btn");
  const listEditBtn = currentList.querySelector(".list-edit-btn");

  listEditBtn.setAttribute("disabled", true);
  listDoneCheck.setAttribute("disabled", true);
  const currentTask = listTask.innerText;
  const newTaskInput = document.createElement("input");
  newTaskInput.className = " border border-stone-950 py-1 px-2 w-[180px] ";
  newTaskInput.value = currentTask;
  listTask.after(newTaskInput);
  newTaskInput.focus();
  listTask.classList.add("hidden");

  newTaskInput.addEventListener("change", () => {
    listEditBtn.removeAttribute("disabled");
    listDoneCheck.removeAttribute("disabled");
    listTask.innerText = newTaskInput.value;
    listTask.classList.remove("hidden");
    newTaskInput.remove();

    
  });
};

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
  if (listDoneCheck.checked) {
    listEditBtn.setAttribute("disabled", true);
  } else {
    listEditBtn.removeAttribute("disabled");
  }
  updateDoneTaskTotal();
};

const addList = (text) => {
  // mount to listGroup
  listGroup.append(createNewList(text));
  taskInput.value = null;
  updateTaskTotal();
};

// console.log(list);
// Application Logic
// Handlers

const listGroupHandler = (event) => {
  const list = event.target.closest(".list");
  if (event.target.classList.contains("list-del-btn")) {
    deleteList(event.target.closest(".list").id);
  }

  if (event.target.classList.contains("list-edit-btn")) {
    editList(event.target.closest(".list").id);
  }

  if (event.target.classList.contains("list-done-check")) {
    doneList(event.target.closest(".list").id);
  }
};

const addTaskBtnHandler = () => {
  if(taskInput.value.trim()){
  addList(taskInput.value);
}else{
  alert("You must input task");
}
};

const taskInputHandler = (event) => {
  if(event.key === "Enter"){
    if(taskInput.value.trim()){
      addList(taskInput.value);
    }else{
      alert("You must input task");
    }
  }
};

const deleteAllHandler = () => {
  if(confirm("Are you sure to remove all lists?")){
    const allList = listGroup.querySelectorAll(".list");
    // console.log(allList);
    allList.forEach((list) => list.remove()
       
    )
  }
};

const doneAllHandler = () => {
  if(confirm("Are you sure to check done all lists?")){
    const allList = listGroup.querySelectorAll(".list");
    // console.log(allList);
    allList.forEach((list) => {
      list.querySelector(".list-done-check").checked = true;
      doneList(list.id);
    }
       
    );
  }
};

//listener
addTaskBtn.addEventListener("click", addTaskBtnHandler);
listGroup.addEventListener("click", listGroupHandler);
taskInput.addEventListener("keyup",taskInputHandler);
doneAll.addEventListener("click",doneAllHandler);
deleteAll.addEventListener("click",deleteAllHandler);

// DOM Node

// const myName = document.createTextNode("Theint Sandi Kyaw");
// document.body.append(myName);
// console.dir(myName);

// const myAge = document.createTextNode(34);
// const myJob = document.createTextNode("web developer");

// const mySelf = document.createDocumentFragment();

// mySelf.append(myName);
// mySelf.append(myAge);
// mySelf.append(myJob);

// document.body.append(mySelf);
// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(deleteAll.childNodes);
// deleteAll.childNodes[1].nodeValue = "ha ha";