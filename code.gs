var url = ""// use a sheet url 
//main event
// grabbing param and sending main html page
function doGet(event) {
  //  Logger.log(event.parameters);

  var page = HtmlService.createTemplateFromFile("index");
  return page.evaluate();
  };
// this doesn't work
//function include(styleSheet) {
//  return HtmlService.createHtmlOutputFromFile(styleSheet)
//      .getContent();
//};

// id 
// text number
// include function for adding style and js to html
// that's the only way I know to use style and js with an html file in google web apps
function include(fileName){
  
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}


// getting user info and appending to a spreadsheet

function clicked(id, phone){
  var gs = SpreadsheetApp.openByUrl(url);
  var sheet = gs.getSheetByName("template");
  sheet.appendRow([id,phone,new Date()])
  
  Logger.log(id)
  Logger.log(phone)
  
}
// a function to return data from the sheet
// I'm trying to get the data but it's not working
// FIXME: try to fix the map function or the list 
function everything(){
  var gs = SpreadsheetApp.openByUrl(url);
  var sheet = gs.getSheetByName("template");
  var list = sheet.getRange(1,1,sheet.getRange("A1").getDataRegion().getLastRow(),1).getValues();
 var obj = list.map(function(value){return value[0]})
  Logger.log(list)
}
