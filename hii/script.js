let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})
document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('studentId').value;
    const name = document.getElementById('studentName').value;
    const age = document.getElementById('studentAge').value;
    const major = document.getElementById('studentMajor').value;

    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `<td>${id}</td><td>${name}</td><td>${age}</td><td>${major}</td><td><button onclick="deleteRow(this)">Delete</button></td>`;
    
    document.getElementById('studentForm').reset();
});

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Similar event listeners and functions can be added for attendance, grades, and courses