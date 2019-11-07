var protocol = window.location.protocol;
var baseService = window.location.host;
var pathName = window.location.pathname;
var projectName = pathName.substring(0,pathName.substr(1).indexOf('/')+1);

var protocolStr = document.location.protocol;
var baseHttpProtocol = "http://";
if(protocolStr == "https:") {
  baseHttpProtocol = "https://";
}
var svrUrl =  baseHttpProtocol + baseService + projectName ;
//=========================================================================

var recorder = null;
var startButton = document.getElementById('btn-start-recording');


//var audio = document.querySelector('audio');
var audio = document.getElementById('audioSave');

function startRecording() {
    if(recorder != null) {
        recorder.close();
    }
    Recorder.get(function (rec) {
        recorder = rec;
        recorder.start();
    });
    stop.disabled = false
}

function stopRecording() {
    recorder.stop();
    recorder.trans(svrUrl+"/api/transform", function(data, errcode){
    if(errcode != 500){
    	$("#btn-text-content").val(data)
       var id = setInterval(() => {
    	   $.ajax({
               url: svrUrl + "/api/iat",
               type: "post",
               async: false,
               dataType : 'json',
               success: function (data) {
                 var reg=new RegExp("[。 ， ！ ？]","g")
                 if(data.message!=null)
            	   $("#search").val(data.message.replace(reg,""))
            	   if (data.code == '2'){
            		   clearInterval(id);
            	   }
               }
           });
	   }, 10);
    }
  });
}

function playRecording() {
    recorder.play(audio);
}

export {
  playRecording,
  startRecording,
  stopRecording
}
