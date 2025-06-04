var modal = document.getElementById("myModal");
var btn = document.getElementById("signUp");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const form = document.getElementById("form")
form.addEventListener("submit", function(event) {
  event.preventDefault();  
  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  const email = form.email.value;

  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Email:", email);

  modal.style.display = "none";
  
});
