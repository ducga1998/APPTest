import * as React from 'react'
import UIElement from "../interfaces/UIElement";
import { Provider, Subscribe ,Container} from 'unstated-x'
import { SketchPicker } from 'react-color'
import {StyleContainer} from '../store/SelectedContainer'
export const allStyle = new StyleContainer()
interface data {
    target :any ,
    container : any,
    display: boolean,
    Event: any
}
// export function getStyleSheet(frame:Document , nameData:string) {
// 	let ListStyleSheet:StyleSheetList = frame.styleSheets
// 	return Array.from(ListStyleSheet).find(a => {
// 		return a.ownerNode.isEqualNode(frame.querySelector(`style[data-css="${nameData}"]`))
// 	})
// }
export default class RenderInspetor extends  React.Component<data> implements UIElement {

    constructor(props){
         super(props);
    }
    // componentDidMount(){
    // 	allStyle.instance = getStyleSheet(window.frame, 'all' )
    // }
    get container() {
		return this.props.container
	}

     render(){
        const {container}  = this
        let value = "";
        let ArrrayControl =[];
        if (typeof container.state != 'undefined'){
            value = container.state.data.text
            ArrrayControl  = container.state.listComponent;
        }
        const Render = ArrrayControl.map((item,id) => {
            return React.createElement(item , {
                value : container.state.data.text,
                container : container,
                key : id
            })
           
        })
        console.log("render", Render)
        return this.props.display && (<div>{Render}
        <SketchPicker  />
        </div>
        )
     }
}
