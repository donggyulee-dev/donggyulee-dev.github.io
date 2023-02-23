document.getElementById('first').innerHTML = 'Hello World';


// count up and down
document.getElementById('count').innerHTML = 0;
document.getElementById('up').onclick = function () {
    document.getElementById('count').innerHTML++;
    console.log(document.getElementById('count').innerHTML);
}
document.getElementById('down').onclick = function () {
    document.getElementById('count').innerHTML--;
    console.log(document.getElementById('count').innerHTML);
}

// show count in console when count change
document.getElementById('count').onchange = function () {
    console.log(document.getElementById('count').innerHTML);
}

function showAndroidToast(toast) {
    Android.showToast(toast);
}

window.addEventListener("volumechange", function () {
    console.log("볼륨이 변경되었습니다.");
});