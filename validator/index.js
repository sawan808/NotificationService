"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var port = process.env.PORT || 5001;
app.listen(port, function () { return console.log("Server started on ".concat(port)); });
