import simpleClass from './simpleClass';
import { ArtClass } from './ArtClass';

const instance = simpleClass;
const message = instance.message;
const artPiece = new ArtClass('Black Square', 'Malevich', 1915, 'Ukraine'); 

function toConsole(): void {
  console.log(message);
  console.log(artPiece);
}  

export { message, artPiece }
export default toConsole;
