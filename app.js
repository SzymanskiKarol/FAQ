// document.querySelectorAll(".q-element")[0].classList.toggle("open");
// document.querySelectorAll(".question-text")[0].classList.toggle("open");

document.querySelectorAll(".question-arrow").forEach((item) => {
    item.addEventListener('click', (event) => {
        item.classList.toggle('open');
        item.nextElementSibling.classList.toggle('open');
    });
})