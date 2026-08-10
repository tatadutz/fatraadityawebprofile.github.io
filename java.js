function togglePortofolio(event) {
    event.preventDefault();

    const dropdown = document.getElementById("dropdownPortofolio");
    dropdown.classList.toggle("show");
}

function toggleKontak(event) {
    event.preventDefault();

    const dropdown = document.getElementById("dropdownKontak");
    dropdown.classList.toggle("show");
}

function togglePortofolio(event) {
    event.stopPropagation();

    const dropdown = document.getElementById("dropdownPortofolio");
    dropdown.classList.toggle("show");
}


document.addEventListener("click", function () {
    document.getElementById("dropdownPortofolio").classList.remove("show");
});


window.addEventListener("scroll", function () {
    document.getElementById("dropdownPortofolio").classList.remove("show");
});

document.getElementById("dropdownPortofolio").addEventListener("click", function (e) {
    e.stopPropagation();
});

window.addEventListener("scroll", function () {
    const dropdown = document.getElementById("dropdownKontak");
    if (!dropdown) return;
    dropdown.classList.remove("show");
});

document.getElementById("dropdownKontak").addEventListener("click", function (e) {
    e.stopPropagation();
});

const slider = document.querySelector('.galeri-container');

slider.addEventListener('wheel', (e) => {
    e.preventDefault();
    slider.scrollLeft += e.deltaY * 0.5;
});
