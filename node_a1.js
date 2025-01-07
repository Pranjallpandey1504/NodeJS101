const fs = require("fs")
const path = require("path")

const folderPath = "space_project"
const filePath = path.join(folderPath, "log.txt")
const newFilePath = path.join(folderPath, "update.txt")


//1. Synchronous

// fs.mkdirSync(folderPath)
// console.log("Folder 'space_project' created synchronously")

 // Asynchronous
// fs.mkdir(folderPath, (err) => {
//     if (!err || (err && err.code === "EEXIST")) {
//         console.log("Folder 'space_project' created asynchronously")
//     } else {
//         throw err
//     }
// })

//2.  Synchronous

// fs.writeFileSync(filePath, "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.")
// console.log("File 'log.txt' created synchronously with initial content");

//Asynchronous

// fs.writeFile(filePath, "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.", (err) => { 
//     if (err) throw err
//     console.log("File 'log.txt' created asynchronously with initial content");
// })


//3. Synchronous

// fs.writeFileSync(filePath, "ISRO has started working on Gaganyaan.")
// console.log("File 'log.txt' updated synchronously")

//Asynchronous
// fs.writeFile(filePath, "ISRO has started working on Gaganyaan.", (err) => {
//     if (err) throw err
//     console.log("File 'log.txt' updated asynchronously")
// })

//4. Synchronous
// fs.appendFileSync(filePath, " The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.")
// console.log("Content appended synchronously to 'log.txt'")


//Asynchronous

// fs.appendFile(filePath, " The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.", (err) => {
//     if (err) throw err
//     console.log("Content appended asynchronously to 'log.txt'")
// });


// 5. // Synchronous
// fs.renameSync(filePath, newFilePath);
// console.log("File renamed synchronously to 'update.txt'")


//Asynchronous
// fs.rename(filePath, newFilePath, (err) => {
//     if (err) throw err;
//     console.log("File renamed asynchronously to 'updatee.txt'")
// })


// 6. Synchronous
// let data = fs.readFileSync(newFilePath, "utf8")
// console.log("Content of 'update.txt' (synchronously):", data)
// console.log("We are excited (synchronous)")

// Asynchronous
// fs.readFile(newFilePath, "utf8", (err, data) => {
//     if (err) throw err
//     console.log("Content of 'update.txt' (asynchronously):", data)
//     console.log("We are excited (asynchronous)")
// })

//7.Synchronous
// fs.unlinkSync(newFilePath)
// console.log("File 'update.txt' deleted synchronously")

// Asynchronous
// fs.unlink(newFilePath, (err) => { 
//     if (err) throw err
//     console.log("File 'update.txt' deleted asynchronously")
// });

//8.Synchronous
fs.rmdirSync(folderPath)
console.log("Folder 'space_project' deleted synchronously")


// Asynchronous
fs.rmdir(folderPath, (err) => {
    if (err) throw err
    console.log("Folder 'space_project' deleted asynchronously")
})
