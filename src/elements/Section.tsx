import { renderElementById } from '../Test/ListItemIPhong';
import * as React from 'react';
import UIElement from "../interfaces/UIElement";
import Types from 'prop-types';
import {CreateElement} from '../lib/element';
import UIInput from '../ui/control/UIInput';
import styled from 'styled-components';
import { Container } from 'unstated-x';
import { default } from '../../pagefly-client/src/shared/containers/page';

const Sectionstyle = styled.input `
    background-color : red;
    solid:
`
const DIV = styled.div `
`
interface Data {
    content? :string,
    open :any,
    Event:{
        onmousedown:Function
    },
    containerElement: any,
    DrapProps: any,
    text : any,
    id : any,
}


export default CreateElement({initialState:{}})(
    class Section extends React.Component<Data,Data> implements UIElement{
        handClick =() =>{
            window.section = this
          
            // console.log("window section", this.props.containerElement)
        }
        handChildren(...arg){
            this.props.containerElement.setStateSync({children: arg})
        }
        render(){
            const { text ,Event ,containerElement,DrapProps,children ,id } = this.props;

            return (
                <DIV  className="section" id ={id} >
                    {React.Children.map([this.props.children], renderElementById)}
                </DIV>
            )
        }
    }
)
// text từ props 
// text từ defaultProps
// data của container truyền xuống ,
// phân biệt giữa component và element ,
// element sẽ ko có input đâu 
// rút kinh nghiệm khi viết JSON ,
// rút kinh nghiệm 
