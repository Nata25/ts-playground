"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Art = (function () {
    function Art(title, author, created, country) {
        this.title = title;
        this.author = author;
        this.created = created;
        this.country = country || '';
    }
    Art.prototype.estimate = function () {
        return true;
    };
    return Art;
}());
exports.ArtClass = Art;
