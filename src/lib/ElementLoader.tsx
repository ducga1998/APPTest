import * as React from 'react'
import {Subscribe,Container} from 'unstated-x'
import DataItems from '../store/Data'
export default class ElementLoader  extends  React.Component<{type: string, container? : any,id : number|string }> {
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
		console.log("ANKVBHBJUBJH", Element)
		this.setState({Instance: Element.default})
	}

	render() {
		const {Instance} = this.state
		// console.log("hahahahahahahaha   ", Instance.InspectorA.listComponent)
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
