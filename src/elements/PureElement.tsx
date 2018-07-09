import * as React from 'react'
import UIElement from "../interfaces/UIElement";

import { Provider, Subscribe ,Container} from 'unstated-x'

import Types from 'prop-types';
import {CreateElement} from '../lib/element';
interface Data {
    content? :string,
    open :any,
    Event:{
        onmousedown:Function
    },
    container: any
}
export default CreateElement({initialState:{}})
(
    class PureElement extends React.Component<Data,Data> implements UIElement{
    static defaultProps = {
        text:  'input'
    }

    static propTypes = {
		open: Types.bool
    }
    handClick  = () => {
        this.props.Event.onmousedown()
    }

    render(){
        const { Event ,container } = this.props;
        console.log(container);

        return  <input value={container.state.text} onChange ={(e)=>{ container.setState({text : e.target.value})}}     {...this.props.Event} />
    }
}
)
