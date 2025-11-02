const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-task");

function addTask() {
    if (inputBox.value === "")
    {
        alert("NO INPUT GIVEN");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let delIcon = document.createElement("delIcon");
        delIcon.innerHTML = "\u00d7";
        li.appendChild(delIcon);
    }
    inputBox.value = " ";
    saveList();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("task");
        saveList();
    }
    else if(e.target.tagName === "DELICON")
    {
        e.target.parentElement.remove();
        saveList();
    }
},false);

function saveList()
{
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();