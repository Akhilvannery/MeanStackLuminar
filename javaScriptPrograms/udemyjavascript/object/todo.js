let input = prompt("what do u like to do?");
let todo = ["collect chicken eggs", "water the plants", "wash the car"]

while (input !== "quit" && input !== "q") {

    if (input == "list") {
        console.log("********************");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);

        }
        console.log("********************");

    } else if (input == "new") {
        const newTodo = prompt("okay! what would you like to add?")
        todo.push(newTodo);
        console.log(newTodo + " added to the list")
    } else if (input == "delete") {
        const index = prompt("enter the index to delete !")
        todo.splice(index-1,1);
        console.log(todo[index]+ "removed from list");
    }



    input = prompt("what do u like to do?");
}
console.log("_______exit_____")