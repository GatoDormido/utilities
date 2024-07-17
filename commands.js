import 'dotenv/config';
import { getGreetChoices } from './cogs/greet.js';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Get the game choices from game.js
function createCommandChoices() {
  const choices = getGreetChoices();
  const commandChoices = [];

  for (let choice of choices) {
    commandChoices.push({
      name: capitalize(choice),
      value: choice.toLowerCase(),
    });
  }

  return commandChoices;
}

// Simple test command
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
};


const GREET_COMMAND = {
  name: 'greet',
  description: 'Greet fellow discord member',
  options: [
    {
      type: 3, //String
      name: 'object',
      description: 'Pick your object',
      required: true,
      choices: createCommandChoices(),
    }
  ],
  type: 1,//Slash command
};

const ALL_COMMANDS = [TEST_COMMAND, GREET_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);