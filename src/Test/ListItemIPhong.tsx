
import * as React from 'react'
import PropTypes from 'prop-types';
import ElementItems from '../store/StoreElement'
import Data from '../store/Data'
import {RefObject} from 'react'
// it 's container
import {Subscribe,Container} from 'unstated-x'
import Page from './Page';
export class ElementContainer extends Container<>{}
var DataItems = Data
var  ElementData=  ElementItems
window.addItemElement = function AddItemElement (id :number|string , type : string) {
	DataItems[id] = new ElementContainer({type: type, children: [],data : {}})

} 	
// class  recerice props is type and container , create element ,
// to type , it import dynamic
class ElementLoader  extends  React.Component<{type: string, container? : any,id : number|string }> {
	//  use type render element
	// transform props element
	state = {
		Instance: ()  => null
	}

	componentDidMount(){
		this.loadElement()
	}
		 // when just props.type change then call loadElement
	componentDidUpdate(preProps: { type: string }) {
		// if change type, call element
		if (preProps.type !== this.props.type) {
			this.loadElement()
		}
	}

	loadElement = async () => {
		const Element = await ElementData[this.props.type].load;
	
		this.setState({Instance: Element.default})
	}

	render() {
		const {Instance} = this.state

		return <Subscribe to = {[this.props.container]}>
			{
				container => {
					console.log("Id ID id",this.props.id)
					return <Instance  id={this.props.id}  DrapDrop={true}  containerElement = {container} {...container.state} />
				}
			}
			</Subscribe>

	}
}

export function renderElementById(id: string | number){
	const ItemContainer  =  DataItems[id]  // it's Elment
	return <ElementLoader id={id} type={ItemContainer.state.type} container={ItemContainer}/>
}

export default class ListItemIPhong extends React.Component<any, any>{
	constructor(props,context){
		super(props,context)

	}
	
	static contextTypes = {
		document: PropTypes.any
	};
	componentDidUpdate(){
		window.frame = this;
	}
	
	insertChild(id : number |string,  type: string ,data:Object ){
		let dataItem = {}
		 	if(data){
				dataItem = data
		}
		 else {
			dataItem = {
				text : 'Text Default'
			}
		}
		DataItems[id] = new ElementContainer({type: type, children: [],data : dataItem})
		this.forceUpdate()
	}
	componentDidMount() {
		window.frame = this.page.current.ownerDocument;
	}
	SaveData =() => {
		let ArrayItems = []
		for(let item in DataItems){
			ArrayItems.push(DataItems[item].state)
		} 
		
		const DataSave = ArrayItems.map(item => {
			let obj 	 = {} 
			obj.type 	 = item.type;
			obj.data 	 = item.data
			obj.children = item.children;
			return obj
		 })
		 localStorage.setItem('data',JSON.stringify(DataSave))
	}
	
	HandDataToLocalStorage =() => {
		let ObjListItem = {}
		if(localStorage.getItem('data')){
			let Obj =  JSON.parse( localStorage.getItem('data'))
			let number = 1
			for(let item in Obj ) {
				ObjListItem[number] = new ElementContainer({item})
				number++;
			}
			return ObjListItem 	
		}
		return null
	}
	get document(){
		return this.context.document
	}	
	page: RefObject<any> = React.createRef()
	render() {
		// let datas ={}
		// if(this.HandDataToLocalStorage()){
		// 	datas = this.HandDataToLocalStorage()
		// }
		// let total =[]
		// for(let  a in DataItems){
		// 	total.push(renderElementById(a))
		// }
		// this.HandDataToLocalStorage()
		
		return (
			<React.Fragment>
				<div ref ={this.page}  ></div>
				<Page  document = {this.document}>
					
						{renderElementById(1)}
						{renderElementById(5)}
				</Page>
			</React.Fragment>
		)
	}
}


