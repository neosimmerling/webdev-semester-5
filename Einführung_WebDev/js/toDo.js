'use strict'
document.addEventListener('DOMContentLoaded', init);
let count = 1;

function init() {
    document.getElementById('addButton').addEventListener('click', addTodo);
    document.getElementById('toDoinput').addEventListener('change', addTodo);
    addDragEvents();
}

function addTodo() {
    console.debug("in addTodo");
    let inputText = toDoinput.value.trim();

    if (inputText) {
        let newRow = document.createElement('tr');
        let cell1 = document.createElement('td');
        let cell2 = document.createElement('td');
        let cell3 = document.createElement('td');
        let checkBox = document.createElement('input');

        // Zeile soll verschiebbar sein
        newRow.setAttribute('draggable', 'true');

        // Checkbox erstellen
        checkBox.setAttribute('type', 'checkbox');
        checkBox.addEventListener('change', function () {
            toggleColor(this);
        });

        cell1.textContent = count++;
        cell2.textContent = inputText;
        cell3.appendChild(checkBox);

        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);

        document.getElementById('toDoListe').appendChild(newRow);
    }
    toDoinput.value = '';
}

function toggleColor(element) {
    const row = element.closest('tr');
    if (element.checked) {
        row.style.backgroundColor = 'green';
        element.disabled = true; // Nur einmal setzbar, danach gesperrt
    } else {
        // Wird nie ausgeführt, da deaktiviert
        row.style.backgroundColor = 'transparent';
    }
}

function addDragEvents() {
    const toDoList = document.getElementById('toDoListe');
    let draggedRow = null;

    toDoList.addEventListener('dragstart', e => {
        draggedRow = e.target.closest('tr');
    });

    toDoList.addEventListener('dragend', () => {
        draggedRow = null;
    });

    toDoList.addEventListener('dragover', e => {
        e.preventDefault();
        const targetRow = e.target.closest('tr');
        if (!targetRow || targetRow === draggedRow) return;

        const bounding = targetRow.getBoundingClientRect();
        const offset = e.clientY - bounding.top;
        const before = offset < bounding.height / 2;

        toDoList.insertBefore(draggedRow, before ? targetRow : targetRow.nextSibling);
    });
}
