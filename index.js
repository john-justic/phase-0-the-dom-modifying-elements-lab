// Write your code here!
function removeMain() {
    const main = document.getElementById("main")
    main.remove();
  }
removeMain();

const newHeader = document.createElement("h1")
newHeader.id = "victory";

newHeader.innerHTML = "John is the champion";