import { App } from './app.jsx';
import register from "./index.js";

const sheet = new CSSStyleSheet();
sheet.replaceSync("h1 { color: blue; border: 2px dotted black;}");


register(App, "x-rich", [], {shadow:true, adoptedStyleSheets:[sheet]});
