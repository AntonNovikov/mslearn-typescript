import { returnGreeting } from './greetings_module.js';  
import * as allGreetingFunctions from './greetings_module.js';
import { returnGreeting as returnGreetingLength } from './greetings-utilities_module.js';
returnGreeting('Hola!')  // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour');  // Displays 'The message from Greetings_module is Bonjour!'
returnGreetingLength('Ciao!'); 