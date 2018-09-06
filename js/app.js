function allowDrop(ev) {
    ev.preventDefault();
}
var dragged = null;
function drag(ev) {
    dragged = ev.target;
    //ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    //var data = ev.dataTransfer.getData("text");
    //dragged.src
    //crateelement
    dragged.parentElement.style.display = "none";
    ev.target.appendChild(dragged);
}