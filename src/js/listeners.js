import { addTaskBtnHandler, deleteAllHandler, doneAllHandler, listGroupHandler, taskInputHandler } from "./handlers.js";
import { addTaskBtn, deleteAll, doneAll, listGroup, taskInput } from "./selectors.js";


const listeners = () => {
    addTaskBtn.addEventListener("click", addTaskBtnHandler);
    listGroup.addEventListener("click", listGroupHandler);
    taskInput.addEventListener("keyup",taskInputHandler);
    doneAll.addEventListener("click",doneAllHandler);
    deleteAll.addEventListener("click",deleteAllHandler);
};

export default listeners;