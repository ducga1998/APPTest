import * as React from 'react'
import UIElement from "../interfaces/UIElement";
import { Provider, Subscribe ,Container} from 'unstated-x'
import { CreateElement } from '../lib/element';
import { RefObject, Component } from 'react';
import UIInput from '../ui/control/UIInput';
import styled from  'styled-components'

interface Data {
    Event:{
        onmousedown:Function
    },
    container: any,
    text :string,
    data: Array<{
        id:number,
        type:string,
        text : any
    }>,
    id : any,
    type : any,
    abc:any
}
const DIV = styled.div ``
export default CreateElement({initialState:{

}})
(   class Heading extends React.Component<Data> implements UIElement{
      
    static defaultProps = {
        text:  'HEADING 1'
    }
    static inspector =  () => {
        return {
            listComponent : [
                UIInput ,
            
        ]}
    }
    get container(){
        return this.props.container;
    }
    get data () {
        return this.props.data
    }
    get ElementSpan() {
        return this.element.current;
    }
    componentDidMount() {
        this.ElementSpan.innerHTML = this.container.state.data.text
      
	}
    componentDidUpdate(nextProps: {
		text: string
	}) {
       
        this.ElementSpan.innerHTML =this.container.state.data.text;
	}
    element : RefObject<HTMLDivElement> = React.createRef();
    handClick  = (e) => {
    	this.props.Event.onmousedown();
        this.container.setStateSync({text :this.ElementSpan.innerText})
       
    }
    HandChange = () => {
        this.container.setStateSync({data:{
            text : this.ElementSpan.innerText + ""
        }
    })
        // this.data.filter(item => item.id == this.props.id)[0].text = this.ElementSpan.innerText
    }
    
    render(){
        console.log(" data props to Element", this.props.data)
        const { text , container ,data ,id,type} = this.props;
        console.log("props to elmement" , this.props)
        return <DIV  {...this.props.Event} className = "h1" id ={id}>
          <h1 >  <span ref={(this.element)}
                onInput={ this.HandChange.bind(this)}
                onBlur={ this.HandChange.bind(this)}
               
                contentEditable={true} 
                />
                </h1>
            </DIV>
    }
}
)
