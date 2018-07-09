import { Container } from 'unstated-x'


export const SelectedContainer = new Container({
	selected: { container: Container},
	display :false
})
// export class StyleContainer extends Container<object> {
// 	instance
// }
//
export class StyleContainer extends Container<object> {
	[x: string]: any;
	instance: CSSStyleSheet
	state = {}

	setStyle = (selector: string, style: object = {}) => {
		const cssRules = Array.from(this.instance.cssRules)
		let rule = cssRules.find((s: CSSStyleRule) => s.selectorText === selector ) as CSSStyleRule

		if (!rule) {
			const ruleIndex = this.instance.insertRule(`${selector} {}`)
			console.log('selector ' , selector)
			rule = this.instance.cssRules[ruleIndex] as CSSStyleRule
		}
		const currentStyle = rule.style
		Object.assign(currentStyle, style)
		Object.assign( this.state, {[selector]: style})
		console.log('new Style', currentStyle, this.state)
		this._listeners.forEach(fn =>{
			console.log(fn)
			return fn(style)
		})
		
	}
	
	getStyle = (selector: string)  => {
		return this.state[selector] || {}
	}
}