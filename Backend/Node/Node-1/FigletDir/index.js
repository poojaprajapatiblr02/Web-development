/*----------------------------------------Installing Packages-------------------------------------------*/
//here i have installed figlet package
//installing a package in any directory creates 3 folders/files
//1.node_modules    2.package-lock.json                  3.package.json
//code pasted from npm https://www.npmjs.com/package/figlet to use the figlet packages
//figlet package uses different symbols and texts to print text on command line
var figlet = require("figlet");  //no need of ./ while requiring packages

figlet("Hello Pooja", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});