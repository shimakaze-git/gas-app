function getGmailApp(FindSubject) {
  //指定した件名のスレッドを検索して取得 
  var myThreads = GmailApp.search(FindSubject, 0, 10); 
  //スレッドからメールを取得し二次元配列に格納
  var myMessages = GmailApp.getMessagesForThreads(myThreads);
  
  return myMessages;
}

function NotifyGmailtoLine(FindSubject) {

  // GmailAppを二次元配列で取得.
  var myMessages = getGmailApp(FindSubject);
  
  for(var i in myMessages){
    for(var j in myMessages[i]){
      //スターがないメッセージのみ処理   
      if(!myMessages[i][j].isStarred()){ 
        
        var strDate　=　myMessages[i][j].getDate();
        var strSubject　=　myMessages[i][j].getSubject();
        var strMessage　=　myMessages[i][j].getPlainBody().slice(0,200);

        // LINEにメッセージを送信
        sendLine(strDate,strSubject,strMessage);
 
        // 処理済みのメッセージをスターをつける
        myMessages[i][j].star(); 
      }
    }
  }
}

function myFunction() {
  // Findyからのメールを取得
  var FindSubject = 'subject:Findy';
  NotifyGmailtoLine(FindSubject);
}