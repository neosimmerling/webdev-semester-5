'use strict'
document.addEventListener('DOMContentLoaded', init);
var count = 1;

function init() {
    document.getElementById('addButton').addEventListener('click', addTodo);
    document.getElementById('toDoinput').addEventListener('change', addTodo);
    addDragEvents();
}

function addTodo() {
    console.debug("in addTodo");
    let inputText = toDoinput.value.trim();

    if(inputText) {
    let newRow = document.createElement('tr');
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    let cell3 = document.createElement('td');
    let checkBox = document.createElement('input');

    newRow.setAttribute('draggable', 'true');

    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('change', function() {toggleColor(this);});

    cell1.textContent = count++;
    cell2.textContent = inputText;
    cell3.appendChild(checkBox);

    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);

    let toDoList = document.getElementById('toDoListe');
    toDoList.appendChild(newRow);
    }
    toDoinput.value='';
}

function toggleColor(element) {
    const row = element.parentNode.parentNode;
    if(element.checked) {
        row.style.backgroundColor = 'green';
        removeAttribute('draggable');
        element.setAttribute('disabled', 'disabled');
    } else
        row.style.backgroundColor = 'transparent';
}

function addDragEvents() {
    let draggedRow = null;
    toDoList.addEventListener('dragstart', e => {
        draggedRow = e.target;
    });
    
    toDoList.addEventListener('dragend', e => {
        draggedRow = null;
    });

    toDoList.addEventListener('dragover', e => {
        e.preventDefault();
        const targetRow = e.target.closest('tr');
        if(!targetRow || targetRow === draggedRow) return;

        const  bounding = targetRow.getBoundingClientRect();
        const offset = e.clientY - bounding.top;

        const before = offset < bounding.height / 2;
        toDoList.insertBefore(draggedRow, before ? targetRow : targetRow.nextSibling);
    });
}