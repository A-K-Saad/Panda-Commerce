//Changing all headings color
const headings = document.getElementsByTagName("h1");
for (heading of headings) {
    heading.style.color = "#332b34";
}
const cards = document.getElementsByClassName("card-single");
for (card of cards) {
    card.style.borderRadius = "20px";
}
const buttons = document.getElementsByClassName("btn");
for (button of buttons) {
    button.addEventListener("click", function () {
        console.log("Product purchased.");
    });
}