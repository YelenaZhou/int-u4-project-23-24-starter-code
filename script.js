// JavaScript goes here.
let button = document.querySelector(".button");
let result = document.querySelector(".result");
let title = document.querySelector(".title");
let title2 = document.querySelector(".title2");
let pic = document.querySelector(".pic");

button.addEventListener("click", function() {
    let number = document.querySelector(".number").value;
    let color = document.querySelector(".color").value;

    pic.style.display = "block";
    
    if (number === "1" && color === "red") {
        result.innerHTML = "You embody leadership qualities. You are independent and self-sufficient. You are ambitious and a high-achiever. And you seek power and control. You want your own way. (Not Accurate)";
    } else if (number === "1" && color === "white") {
        result.innerHTML = "You embody leadership qualities. You are independent and self-sufficient. You are ambitious and a high-achiever. And you are a peacekeeper, patient, empathetic, calm, organized, meticulous kind of individual. (Not Accurate)";
    } else if (number === "2" && color === "red") {
        result.innerHTML = "You are an emotional and intuitive individual. You can at times be overwhelmed by emotions. And you seek power and control. You want your own way. (Not Accurate)";
    } else if (number === "2" && color === "white") {
        result.innerHTML = "You are an emotional and intuitive individual. You can at times be overwhelmed by emotions. And you are a empathetic, organized, meticulous kind of individual. (Not Accurate)"
    } else {
        result.innerHTML = "Can't determine..."
    }
});

title.addEventListener("mouseover", function() {
    title.style.display = "none";
    title2.style.display = "block";
})

title2.addEventListener("mouseout", function() {
    title.style.display = "block";
    title2.style.display = "none";
})