document.querySelector('#header').style.display = "";
document.querySelector('#calculate').style.display = "none";
document.querySelector('#dashboard').style.display = "none";

function headerTab() {
    document.querySelector('#header').style.display = "";
    document.querySelector('#calculate').style.display = "none";
    document.querySelector('#dashboard').style.display = "none";
}

function calculateTab() {
    document.querySelector('#header').style.display = "none";
    document.querySelector('#calculate').style.display = "";
    document.querySelector('#dashboard').style.display = "none";
}

function dashboardTab() {
    document.querySelector('#header').style.display = "none";
    document.querySelector('#calculate').style.display = "none";
    document.querySelector('#dashboard').style.display = "";
}

