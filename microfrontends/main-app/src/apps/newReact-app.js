import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "./utils";

const loadReactApp = async () => {
    await runScript('http://localhost:3005/static/js/main.js');
    return window.newreactApp;
};


export const registernewReactApp = () => {
    singleSpa.registerApplication('newreact-app', loadReactApp, matchingPathname(['/newreact', '/']));
};