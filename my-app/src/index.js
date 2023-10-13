import fruits from './fruits';
import {randomChoice, removeChoice} from './helpers'

let fruit = randomChoice(fruits);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

let remaining = removeChoice(fruit, fruits);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);