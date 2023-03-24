const fs = require('fs')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve,reject)=>{
		fs.appendFile(fileName,fileContent,(err)=>{
			if(err){
				reject("Error")
			}

		})
		resolve (console.log("File is created"));
	})

}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve,reject)=>{
		fs.readFile(fileName,(err)=>{
			if(err){
				reject("Error")
			}
			
		
		})
		resolve (console.log(fileName));
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve,reject)=>{
		fs.writeFile(fileName,fileContent,(err)=>{
			if(err){
				reject("Error")
			}
		
		})
		resolve (console.log(fileContent));
	})
	
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve,reject)=>{
		fs.unlink(fileName,(err)=>{
			if(err){
				reject("Error")
			}
		})
		resolve(console.log(`${fileName} is Deleted`));
	})
}
myFileWriter("File.txt","Hello");
myFileReader("File.txt");
myFileUpdater("File.txt","World");
myFileDeleter("File.txt");


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }



/*Create File
function createFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("File created successfully.");
    });
}

//Read File
function readFile(fileName) {
    fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}

//Update File
function updateFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("File updated successfully.");
    });
}

//Delete File
function deleteFile(fileName) {
    fs.unlink(fileName, (err) => {
        if (err) throw err;
        console.log("File deleted successfully.");
    });
}
*/