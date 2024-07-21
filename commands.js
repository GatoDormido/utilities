import 'dotenv/config';
import {InstallGlobalCommands} from './utils.js';

//type: 1 indicates slash command
const TEST_COMMAND = {
  name: 'test', //Same as custom_id
  description: 'Basic command',
  type: 1, //Slash command
};

/*const TEST_MODAL_COMMAND = {
  name: 'test-modal',
  description: 'Testing modals',
  type: 1, //Slash command
};

const RUFFLE_CREATION_MODAL = {
  name: 'ruffle-creation',
  description: 'Creates a new ruffle',
  type: 1, //Slash command
}*/

const ALL_COMMANDS = [TEST_COMMAND, /*TEST_MODAL_COMMAND, RUFFLE_CREATION_MODAL*/];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);