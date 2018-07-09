import * as React from 'react'
import UIControl from '../../interfaces/UIControl'


import styled from 'styled-components' 
const Field = styled.div`
    &{
        margin: 20px;
    }
    input {
        padding: 5px 10px;
        display:block;
       
    }
    input:focus{
        border: 2px solid black;
    }

`
export default class UIInput 
    extends React.Component<any>
    implements UIControl {
    render() { 
        var flag = 'text'
        const {value,container,bind } = this.props;
        if(bind){
            return (
                <Field> Edit Text : <input value = {value}  onChange = {(e) => {
                    console.log(flag)
                    container.setStateSync({data : {
                        link: e.target.value
                    }})
                 }} />
                </Field>
            )
        }
        else
        {
            return (
                <Field> Edit Text : <input value = {value}  onChange = {(e) => {
                    console.log(flag)
                    container.setStateSync({data : {
                        text: e.target.value
                    }})
                 }} />
                </Field>
            )
        }
        
        
}
    }
