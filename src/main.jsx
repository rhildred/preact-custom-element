import register from './index.js';
//import register from "@rhildred/preact-custom-element";
import styles from './main.scss?inline';

function Scoped() {
	return (
		<>
			<h1>In Scoped custom Element</h1>
			<form>
				<label>
					question
					<input placeholder="Ask me Anything" />
				</label>
				<label>
					object
					<input name="noun" placeholder="Enter a noun" />
				</label>
				<button
					onClick={(evt) => {
						alert('question');
					}}
				>
					Ask
				</button>
			</form>
		</>
	);
}

const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

register(Scoped, 'x-scoped', [], { shadow: true, adoptedStyleSheets: [sheet] });
