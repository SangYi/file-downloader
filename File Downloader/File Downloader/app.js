var http = require('http');
var fs = require('fs');



//var file = fs.createWriteStream("EURUSD_2004_1_Week1.zip");
//var request = http.get("http://ratedata.gaincapital.com/2004/01%20January/EUR_USD_Week1.zip", function (response) {
//    console.log(response.statusMessage);
//    response.pipe(file);
//});

//var file = fs.createWriteStream("EURUSD_2000.zip");

//var request = http.get("http://ratedata.gaincapital.com/2000/EUR_USD_2000.zip", function (response) {

//    //console.log(response.statusMessage);
//    console.log(response.statusMessage);
//    if (response.statusMessage === "OK") {
//        console.log("it works!");

//    } else {
//        console.log("it doesn't work!");
//    }
//    response.pipe(file);
//});


function weekCount(year, month_number) {
    
    // month_number is in the range 1..12
    
    var firstOfMonth = new Date(year, month_number - 1, 1);
    var lastOfMonth = new Date(year, month_number, 0);
    
    var used = firstOfMonth.getDay() + lastOfMonth.getDate();
    
    return Math.ceil(used / 7);
}

function fileName(yr, mo, wk){
    return ("EURUSD_" + yr + "_" + mo + "_Week" + wk + ".zip");

}
//console.log(fileName(2015, 4, 3));

//http://ratedata.gaincapital.com/2004/01%20January/EUR_USD_Week1.zip

function fileURL(yr, mo, wk){
    return ("http://ratedata.gaincapital.com/" + yr + "/" + months[mo - 1] + "/EUR_USD_Week" + wk + ".zip");

}


//function makeRequest(link){
//    var request = http.get(link, function (response){
//        response.statusMessage;
//        //console.log(response.statusMessage);    
//        console.log("it works!");
                        
//    });
//    //return response.statusMessage;
//}
var link2 = "http://ratedata.gaincapital.com/2004/01%20January/EUR_USD_Week1.zip";
//console.log(makeRequest(link2));
//console.log(link2);



var months = ["01%20January", "02%20February", "03%20March", "04%20April", "05%20May", "06%20June", "07%20July", "08%20August", "09%20September", "10%20October", "11%20November", "12%20December"];

//console.log(fileURL(2004, 1, 1));

var file;
//var file = fs.createWriteStream(fileName);

var fileURL;
//var request = http.get(fileURL, function (response) {
//    console.log(response.statusCode);
//    response.pipe(file);
//});

var year, month, week, weeksInMonth;
var request;
var checkLink;
for (year = 2004; year <= 2004; year++) {
    //console.log("this is year print out");
    for (month = 1; month <= 1; month++) {
        //console.log("this is month print out");
        //weeksInMonth = weekCount(year, month);
        //console.log("year" + year + "month" + month);
        for (week = 1; week <= 2; week++) {

            //console.log("this is week print out");
            //console.log(weeksInMonth);
            //console.log("Year " + year + " month " + month + " week " + week);
            
            //console.log(fileURL(year, month, week));
            
            //file = fs.createWriteStream(fileName(year, month, week));
            checkLink = fileURL(year, month, week);
            newFileName = fileName(year, month, week);
            
            //console.log(checkLink);
            //console.log(newFileName);

            //var request = http.get(checkLink, function (response) {
                
   

            //});
            //console.log("it works! Year: " + year + " Month: " + month + " Week: " + week);


        }
    }
}

//console.log(months[1]);