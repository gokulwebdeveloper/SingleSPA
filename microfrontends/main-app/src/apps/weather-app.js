import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "./utils";

const loadReactApp = async () => {
    await runScript('http://localhost:3006/static/js/main.js');
    return window.weather;
};


export const registerweatherApp = () => {
    singleSpa.registerApplication('weather', loadReactApp, matchingPathname(['/weather', '/']));
};