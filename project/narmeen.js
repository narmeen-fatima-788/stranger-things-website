const enterBtn = 
document.getElementById("enterBtn");
if (enterBtn) {
    enterBtn.addEventListener("click", function
(){
     alert("Enter the Upside Down");
});
}
document.addEventListener("DOMContentLoaded", function () {

  const fanForm = document.getElementById("fanForm");

  if (fanForm) {
    fanForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const character = document.getElementById("character").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || character === "" || message === "") {
        alert("Please fill in all fields before submitting!");
      } else {
        alert("Your message has reached Hawkins 🧇✨");
        fanForm.reset();
      }
    });
  }

});