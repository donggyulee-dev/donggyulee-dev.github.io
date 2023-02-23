document.getElementById('subtitle').innerHTML = 'link webview';


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

document.getElementById('reset').onclick = function () {
    document.getElementById('count').innerHTML = 0;
    console.log(document.getElementById('count').innerHTML);
}

function showAndroidToast(toast) {
    Android.showToast(toast);
}

// 웹뷰에서 콘솔로그를 볼 수 있는 함수
function consoleLog(msg) {
    console.log(msg);
}

// window.addEventListener("volumechange", function () {
//     console.log("볼륨이 변경되었습니다.");
// });

