window.onerror = function(msg, url, line) {
  var idx = url.lastIndexOf("/");
  if(idx > -1) {url = url.substring(idx+1);}
  alert("ERROR in " + url + " (line #" + line + "): " + msg);
  return false; //suppress Error Alert;
};

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    initApp: function() {
      app.initAd();
      window.plugins.AdMob.createBannerView();
    },
    initAd: function() {
      window.plugins.AdMob.setOptions({
        publisherId: 'ca-app-pub-1605512859966157/4346126790',
        bannerAtTop: false,
        overlap: true,
        offsetTopBar: false,
        interstitialAdId: 'ca-app-pub-1605512859966157/9216978399',
        isTesting: false, 
        autoShow: true
      });
    },

    onDeviceReady: function() {
      app.receivedEvent('deviceready');
      try { 
        app.initApp();
      } catch (e) {
        alert(e.message);
      }
    },

    onGo: function() {
        var proj = document.getElementById('run').value;
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://raw.githubusercontent.com/'+proj+'/master/index.js?zz='+(new Date()).getTime();
        document.getElementsByTagName('head')[0].appendChild(script);
    },//
    onReset: function() {
        location.reload();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

window.onGo = app.onGo;
window.onReset = app.onReset;

app.initialize();
