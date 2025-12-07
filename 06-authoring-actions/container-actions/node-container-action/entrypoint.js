
const greetingName = process.env.INPUT_WHO_TO_GREET || 'World';
console.log(`Hello ${greetingName}! from a Node.js container action!`);