

import * as React from 'react'

import ListItemIPhong from 'Test/ListItemIPhong'

import { Provider, Subscribe } from 'unstated-x'

import RenderInspertor from 'elements/RenderInspertor'
import {SelectedContainer} from './store/SelectedContainer'

import styled from 'styled-components';
import PortalFrame from 'react-portal-frame'
import {StyleContainer} from './store/SelectedContainer'
const Inspertor = styled.div`
    position: absolute;
    right: 0px;
`
const LayoutFlex = styled.div`
    &{
    display : flex;
    flex-flow: row;
    background-color: #fff4f47a
    }
    .Content{
        flex: 4 1 0;
        order: 1;
    }
    .inspertor {
        order: 2;
        background-color: #98b9ea;
        box-shadow: -2px 3px 19px 0px ##98b9ea;
    }
`
// container.setState({selected: this.container})
const allStyle = new StyleContainer();

 export default class app extends React.Component {
 	state = {
 		frame : null
    }
     linkCss =`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    	<style data-css="all"></style>
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">`
render(){
    const frame = this.state
	return (
        <Provider>
            <LayoutFlex>
               
                        <Subscribe to={[SelectedContainer,allStyle]} >
                                {
                                    ({state:{selected , display}})=> {
                                        return (
                                            <Subscribe to={[selected.container]}>
                                                {
                                                    container => { 
                                                        return  <div className = "inspertor"><RenderInspertor allStyle ={allStyle} display={display}  container ={container} />  </div>
                                                    }
                                                }
                                            </Subscribe>
                                        )
                                    }
                                    
                                        
                                }
                        </Subscribe> 
              
                <div className="Content" >
                        <PortalFrame style = {{ height:'1000px'}} head ={this.linkCss}
                                     >
                            <ListItemIPhong  />

                        </PortalFrame>
                </div>
            </LayoutFlex>
         </Provider>
        )   
    }
 }
 // render  ... 