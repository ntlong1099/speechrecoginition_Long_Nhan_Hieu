var base64;
// function openDialog() {
//     document.getElementById('upload').click();
// }
// document.getElementById('buttonid').addEventListener('click', openDialog);
function handleFiles(event) {
    var files = event.target.files;
    $("#src").attr("src", URL.createObjectURL(files[0]));
    document.getElementById("audio").load();
    var reader = new FileReader();
    reader.onloadend = function() {
        base64 = this.result;
        console.log(base64);
    };
    reader.readAsDataURL(files[0]);
}
var a;
document.getElementById("upload").addEventListener("change", handleFiles, false);
function apiService() {
    var formData = new FormData();
    formData.append('audio', base64);
    var http = new XMLHttpRequest();
    http.open('POST', 'http://localhost:5000/predict', true);
    http.onreadystatechange = () => {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            // this.a = http.responseText;
            alert('Nhận dạng: ' + http.responseText);

        }
    }
    http.send(formData);
}
