getImage.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code:"try {" +
              "gallery = document.getElementsByClassName('Gallery-media');" +
              "imageURL = gallery[0].firstChild.currentSrc;" +
            "}" +
            "catch(error) {" +
              "imageURL = null" +
            "}" +
            "imageURL"},
      function (result) {
        let url = result[0];
        if (url === null){
          let error = document.getElementById('errorMsg');
          error.innerHTML = "No image found";
        }
        else {
          chrome.tabs.create({url: url});
        }
      });
  });
};