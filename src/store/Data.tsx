import {Container} from 'unstated-x'
import { Children } from 'react';
type ForOption = {
	id: number , 
	type: string,
	data: any ,
	children : any 
	
}
// export class ElementContainer extends Container<any,any>{
// 	instance : any;
// 	state = Data;
// 	getFirstItem = 	() => {
// 		let key = Object.keys(this.state)[0]
		
// 	}
// 	addItem = async (option : ForOption) => {
// 		if(!option.id) {
// 			return ""
// 		}
// 		await this.setState({[option.id]: option})

// 	}
// }
export class ElementContainer extends Container<any,any>{}
var Data = {
	1 : new ElementContainer({type : 'Section' , children : [2,3,4] , data: {
	}  }), // have children , Not Hoc
	2 : new ElementContainer({type : 'Paragraph', children: [],data : {
		text : 'Data 2'
	}}), // not children  ,, Hoc
	3 : new ElementContainer({type : 'Heading' , children : [] ,data : {
		text : 'data 3'
	}}),
	4 : new ElementContainer({type : 'Heading' , children : [] ,data : {
		text : 'Data 4'
	}}),
	5 : new ElementContainer({type : 'Section' , children : [6,7,8,9,10] ,data : {
		text : 'Data 5'
	}}),
	6: new ElementContainer({type : 'Heading' , children : [] ,data : {
		text : 'Data 6'
	}}),
	7: new ElementContainer({type : 'Heading' , children : [] ,data : {
		text : 'Data 7'
	}}),
	8: new ElementContainer({type : 'Heading' , children : [] ,data : {
		text : 'Data 8'
	}}),
	9: new ElementContainer({type : 'Button' , children : [] ,data : {
		text : 'Data 9'
	}}),
	10: new ElementContainer({type : 'Button' , children : [] ,data : {
		text : 'Data 9'
	}})

}

export default Data;
