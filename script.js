const button = document.getElementById("updatebutton")
const div = document.getElementById("hiddenupdates")

button.addEventListener("click", () => {
    div.classList.toggle("hideupdates");
});

function yesfunction (){
    document.getElementById("imgbutton").src='winning.jpg';
}
function nofunction (){
    alert("Try Again!")
}
