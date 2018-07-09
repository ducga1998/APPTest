import UIElement from '../interfaces/UIElement'
import * as React from 'react'
import { Component ,RefObject} from 'react';
import { Subscribe ,Container} from 'unstated-x'
import { SelectedContainer } from "../store/SelectedContainer";
import Inspector from '../../pagefly-client/src/shared/inspectors/index';
import uuid from 'uuid'

export async function getParent(): Promise<UIElement> {
	// Do whatever shit to find its parent
	return null
}

export async function removeElement(): Promise<boolean> {
	// Do whatever shit to remove element
	return true
}

// handle Element 

export const CreateElement = ({initialState}) => (Elements : any) =>
{ 
	return  class WrapperElement extends Component<any,any>
	{
		DOMNodeRef: RefObject<HTMLElement> = React.createRef()
		elementRef: RefObject<Component> = React.createRef()
		styledRefs: RefObject<Component> = React.createRef()
		id: string = this.props.id || uuid()
		 	container : any;
			constructor(props){
				super(props);
				let ArrayElement;
				
				this.state = {
					...initialState
				}
				if(Elements.inspector)
				{
					ArrayElement  =  Elements.inspector();
				}
			
				const containerState = {
					...this.state,
					...ArrayElement,
				}
				const A = this.props.containerElement
				A.state = { ...A.state , ...containerState}
				this.container = A;

			}
			static get InspectorA(){
				return Elements.inspector();
			}
			
			componentDidMount() {
				// setState   in element  has been overide setStateSync in container 
				this.element.current.setState = this.container.setStateSync.bind(this.container)
				//   a bit later. inside Element, We call setState and this a here, it don't point this class a here
			}

			element: RefObject<Component> = React.createRef();
			HandMouseDown = () => {
				SelectedContainer.setState({selected: this, display: true})
			}
			render(){
				
				return (
					<Subscribe to={[this.container]}>
					{
						container => {
							console.log("Test Props " , this.props)
							console.log("csacascasc", container)
							return  <Elements Event = { 
									{ 
										onMouseDown : this.HandMouseDown,
										ref: this.styledRefs,
										draggable: true,
										
									} 
								}
									{...this.props}  
									state = {this.state} ref = {this.element} container = {container}
								/>
						}
					} 
					</Subscribe>
			    )	
				
 				
			}
		}
}
