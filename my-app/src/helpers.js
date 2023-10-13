/**function to choose a random item from array */
let randomChoice = (items) => {
    let i = Math.floor(Math.random() * items.length)
    return items[i];
}

/**returns a copy of the array without the item chosen*/
let removeChoice = (item, items) => {
    for(let i =0; i < items.length; i++) {
        if(items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i +1)]
        }
    }
};

export {randomChoice, removeChoice};