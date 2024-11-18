document.getElementById('editButton').addEventListener('click', function() {
  const name = prompt("Enter new name:", document.getElementById('studentName').innerText);
  const age = prompt("Enter new age:", document.getElementById('studentAge').innerText);
  const major = prompt("Enter new major:", document.getElementById('studentMajor').innerText);
  const email = prompt("Enter new email:", document.getElementById('studentEmail').innerText);

  if (name) document.getElementById('studentName').innerText = name;
  if (age) document.getElementById('studentAge').innerText = age;
  if (major) document.getElementById('studentMajor').innerText = major;
  if (email) document.getElementById('studentEmail').innerText = email;
});