function getProperty(property){
  var token = PropertiesService.getScriptProperties().getProperty(property);
  Logger.log(token); 

  return token
}
