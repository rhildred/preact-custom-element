import register from './index.js';
//import register from "@rhildred/preact-custom-element";

function Scoped() {
	return <h1>In Scoped custom Element</h1>;
}

const sheet = new CSSStyleSheet();
sheet.replaceSync('h1 { color: blue; border: 2px dotted black;}');

register(Scoped, 'x-scoped', [], { shadow: true, adoptedStyleSheets: [sheet] });
