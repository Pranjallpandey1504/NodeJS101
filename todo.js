const fs = require("fs")
const filePath = "./todos.txt"

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "", "utf8")
}

let fun = process.argv
let count = fs.readFileSync(filePath, "utf-8").split("\n").length - 1

switch (fun[2]) {
  case "add":
    if (fun[3] === undefined) {
      console.log("Error: Please provide a task description.")
      console.log('Example: node index.js add "Buy groceries"')
    } else {
      let task = fun.slice(3).join(" ")
      addTask(task)
      console.log(`"${task}" added successfully!`)
    }
    break

  case "help":
    console.log("To Do List Commands:")
    console.log('Example: node index.js [command] [arguments]')
    console.log("Commands:")
    console.log("  add    - Add a new task")
    console.log("  list   - List all tasks")
    console.log("  remove - Remove a task by number")
    console.log("  clear  - Clear all tasks")
    console.log("  help   - Show this help message")
    break

  case "list":
    listTasks()
    break

  case "remove":
    let taskNumber = parseInt(fun[3])
    if (fun[3] === undefined || isNaN(taskNumber)) {
      console.log("Error: Please provide a valid task number to remove.")
      console.log('Example: node index.js remove 1')
      console.log('Use the "list" command to see the available tasks.')
    } else if (taskNumber <= 0 || taskNumber > count) {
      console.log("Error: Task number out of range.")
      console.log('Use the "list" command to see the available tasks.')
    } else {
      removeTask(taskNumber)
    }
    break

  case "clear":
    clearTasks()
    break

  default:
    console.log("Invalid command.")
    console.log('Example: node index.js [command] [arguments]')
    console.log("Commands:")
    console.log("  add    - Add a new task")
    console.log("  list   - List all tasks")
    console.log("  remove - Remove a task by number")
    console.log("  clear  - Clear all tasks")
    console.log("  help   - Show this help message")
}

function addTask(task) {
  count++
  fs.appendFileSync(filePath, `${count}. ${task}\n`)
}

function listTasks() {
  let tasks = fs.readFileSync(filePath, "utf8")
  if (tasks.trim() === "") {
    console.log("No tasks found.")
  } else {
    console.log(tasks)
  }
}

function removeTask(taskNumber) {
  let data = fs.readFileSync(filePath, "utf-8").split("\n")
  fs.truncateSync(filePath, 0)

  count = 0
  for (let i = 0; i < data.length - 1; i++) {
    let task = data[i].split(". ")
    if (task[0] == taskNumber) {
      console.log(`Task "${task[1]}" removed successfully.`)
    } else {
      addTask(task[1])
    }
  }
}

function clearTasks() {
  fs.truncateSync(filePath, 0)
  console.log("All tasks cleared.")
}

