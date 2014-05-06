var qrcode = new QRCode(document.getElementById("qrcode"), {
  width : 100,
  height : 100
});

function loadURL () {
  chrome.tabs.getSelected(null, function(tab) {
          var tabId = tab.id;
          tabUrl = tab.url;
          document.getElementById("text").value = tab.url;
          makeCode();
      });

}

document.addEventListener('DOMContentLoaded', function() {
  loadURL();
});


function makeCode () {    
  var elText = document.getElementById("text");
  
  if (!elText.value) {
    alert("Input a something");
    elText.focus();
    return;
  }
  
  qrcode.makeCode(elText.value);
}

makeCode();

$("#text").
  on("blur", function () {
    makeCode();
  }).
  on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });