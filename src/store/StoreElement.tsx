

let ElementData  = {

	Paragraph : {
		type:'Paragraph',
		load: import('../elements/SpanElement')
	},
	Section : {
		type : 'Section',
		load: import('../elements/Section')
	},
	Heading : {
		type: 'Heading',
		load : import('../elements/Heading')
	},
	Button : {
		type : 'Button',
		load : import('../elements/Button')
	}
}
export default ElementData;