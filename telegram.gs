//Variíveis

var token = <tokenBot>>;
var telegramUrl = "https://api.telegram.org/bot" + token;
var webAppUrl = <webAppUrl>;
var ssId = <idGoogleSheet>;   
var chat_id = <chatId>
var link = <urlPlanilha>

function getMe() {
  var url = telegramUrl + "/getMe";
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function getUpdates() {
  var url = telegramUrl + "/getUpdates";
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function getRow() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var row = sheet.getLastRow();
  
  //Pegando a coluna do squad da ultima linha
  
  var squad = sheet.getRange(row, 3);
  var squadResponse = squad.getValues();

  //Pegando a coluna do nome do projeto na ultima linha
  
  var projeto = sheet.getRange(row, 2);
  var projetoResponse = projeto.getValues();

  //Envio da notificação ao grupo no telegram
  
  var url = telegramUrl + "/sendMessage?chat_id=" + chat_id + "&text=" + " 🔘 Projeto: " + row + "  -  " + "Squad: " + squadResponse[0][0] + "  -  Criação do projeto:  " + projetoResponse[0][0] + "  -  "+ link ;
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}
