document.getElementById("year").textContent = new Date().getFullYear();

function handleSubmit(e) {
  e.preventDefault();
  alert("Thanks! Your message has been sent (demo).");
  e.target.reset();
}
