"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var simpleClass_1 = require("./simpleClass");
var ArtClass_1 = require("./ArtClass");
var instance = simpleClass_1.default;
var message = instance.message;
exports.message = message;
var artPiece = new ArtClass_1.ArtClass('Black Square', 'Malevich', 1915, 'Ukraine');
exports.artPiece = artPiece;
function toConsole() {
    console.log(message);
    console.log(artPiece);
}
exports.default = toConsole;
