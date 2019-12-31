function sendLine(strDate,strSubject,strMessage){
   
  //Lineに送信するためのトークン
  var strToken = getProperty('LINENotifyToken');

  var options = {
     "method"  : "post",
     "payload" : "message=" + strDate + strSubject + strMessage,
     "headers" : {"Authorization" : "Bearer "+ strToken}
  };

   Logger.log(options);
 
   UrlFetchApp.fetch("https://notify-api.line.me/api/notify",options);
}