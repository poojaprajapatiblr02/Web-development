module.exports to share data between directories 

index.js(Should always be named index.js only) is a special file that acquires data(that has to be exported) from all the files  and then exports it to the required directory

whenever data is acquired in another directory , it first looks for index.js within the directory and gets all its data from there , hence the name index.js is compulsory.