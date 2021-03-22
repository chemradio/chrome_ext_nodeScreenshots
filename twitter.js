var targetPost = document.querySelector('[role="article"]');

var scriptMain = document.createElement("script");

scriptMain.id = "html2canvas";
scriptMain.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
scriptMain.type = "text/javascript";

var secondScript = document.createElement("script");
secondScript.type = "text/javascript";
secondScript.innerHTML = `html2canvas(${targetPost}).then(function(canvas) {
    document.body.appendChild(canvas);
});`;

var div = document.getElementById("react-root");



div.append(scriptMain);
div.append(secondScript);

//alert(document.querySelector('[role="article"]'));

/*
var btn = document.createElement("BUTTON");   // Create a <button> element
btn.innerHTML = "CLICK ME";                   // Insert text
btn.onclick = function () {
    alert('hi');
}
document.body.appendChild(btn);  
*/


