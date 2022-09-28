"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = __importDefault(require("./carro"));
const cliente_1 = __importDefault(require("./cliente"));
const compraCarro_1 = __importDefault(require("./compraCarro"));
const funcionario_1 = __importDefault(require("./funcionario"));
let car = new carro_1.default('Logan', 1999, 10000);
let cliente = new cliente_1.default('Evanilson', 4999);
let funcionario = new funcionario_1.default("João");
let compra = new compraCarro_1.default(cliente, funcionario, car);
compra.detalharCompra();
