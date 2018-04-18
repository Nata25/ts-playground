import simpleClass from './simpleClass';
import { ArtClass } from './ArtClass';

const instance = simpleClass;
const artPiece = new ArtClass('Black Square', 'Malevich', 1915, 'Ukraine'); 

console.log(instance.message);

console.log(artPiece);
