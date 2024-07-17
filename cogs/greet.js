import { capitalize } from '../utils.js';


// options to greet
const GreetChoices = {
  hi: {
    description: 'basic, friendly',
    text: 'hi',
  },
  hello: {
    description: 'formal but simple',
    text: 'hello',
  },
  wassup: {
    description: 'friendly',
    text: 'What is up',
  }
};

export function getGreetChoices() {
  return Object.keys(GreetChoices);
}

// Function to fetch shuffled options for select menu
export function getShuffledOptions() {
  const allChoices = getGreetChoices();
  const options = [];

  for (let c of allChoices) {
    // Formatted for select menus
    // https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure
    options.push({
      label: capitalize(c),
      value: c.toLowerCase(),
      description: GreetChoices[c]['description'],
    });
  }

  return options.sort(() => Math.random() - 0.5);
}