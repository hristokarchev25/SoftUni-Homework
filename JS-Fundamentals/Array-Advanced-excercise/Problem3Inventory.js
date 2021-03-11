function solve(array) {
    let inventoryText = array.shift();
    let inventory = inventoryText.split(", ");
    let command = array.shift();
    while (command !== "Craft!") {
        let splitCommand = command.split(" - ");
        let otherCommand = splitCommand[0];
        let argument = splitCommand[1];
        if (otherCommand === "Collect") {
            if (!inventory.includes(argument)) {
                inventory.push(argument);
            }
        } else if (otherCommand === "Drop") {
            let indexItems = inventory.indexOf(argument);

            if (indexItems > -1) {
                inventory.splice(indexItems, 1);
            }
        } else if (otherCommand === "Combine Items") {
            let [oldItem, newItem] = argument.split(':');
            combineItems(inventory, oldItem, newItem);
        } else if (otherCommand === "Renew") {
            let itemIndex = inventory.indexOf(argument);

            if (itemIndex > -1) {
                inventory.splice(itemIndex, 1);
                inventory.push(argument);
            }
        }
        command = array.shift();
    }
    function combineItems(inventory, oldItem, newItem) {
        let oldItemsIndex = inventory.indexOf(oldItem);

        if (oldItemsIndex > -1) {
            inventory.splice(oldItemsIndex + 1, 0, newItem);
        }
    }
    console.log(inventory.join(", "));
}
solve(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);