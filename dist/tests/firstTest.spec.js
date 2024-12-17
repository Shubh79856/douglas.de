"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
//import data from './testData/data.json';
(0, test_1.test)('homepage test', (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    // Navigate to a website
    yield page.goto('https://www.douglas.de/de');
    yield page.locator('.sc-dcJsrY.eIFzaz').waitFor({
        state: 'visible', // Options: 'attached', 'detached', 'hidden', 'visible'
        timeout: 50000
    });
    yield page.locator('.sc-dcJsrY.eIFzaz').click();
    yield page.locator('//a[normalize-space()="PARFUM" or normalize-space()="PERFUME"]').click();
    yield page.pause();
}));
