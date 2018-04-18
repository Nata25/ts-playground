"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArtClass_1 = require("./ArtClass");
var simpleClass_1 = require("./simpleClass");
var artPiece = new ArtClass_1.ArtClass('Black Square', 'Malevich', 1915, 'Ukraine');
var instance = simpleClass_1.default;
console.log(artPiece);
console.log(instance.message);
