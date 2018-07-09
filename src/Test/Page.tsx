import { Component,RefObject} from 'react';
import * as React from 'react'
import styled from 'styled-components';

const DIV = styled.div`
	.overLay {
		position: absolute;
		outline: 1px dashed #337ab7;
		pointer-events: none;
	}
	.solid {
		position: absolute;
		outline: 1px solid #337ab7;
		pointer-events: none;
	}
`
export default class Page extends Component<any>{
    get document(){
        return this.props.document
    }

    componentDidMount(){
		window.page = this;
	}
    HandOnDragStart = e => {
		const target = e.target;
		const elementId = target.dataset
       	console.log("Element ididididid ",  elementId)
        const id = target.getAttribute("id");
        e.dataTransfer.setData("text" ,id)
    }
    HandOnDrapOver = e => {
        e.preventDefault();
        let  el = e.nativeEvent.path.find(el => 
            {
                if(el.matches){
                    return el.matches('.h1')
                }
                return null
            }
    )
        if(el) {
			
			return false
		}
        else {
            
        }

    }
    
    HandOnDrop = e => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text") 
		e.target.appendChild(this.document.getElementById(id))
		const el = e.target.closest('.h1')
		if (el) {
			return false
		}
    }


    handClick = e => {
		const el = e.target.closest('.section')
		// const el = e.target
		console.log("style", this.overlayRef.current)
		if (el) {
			const rect = el.getBoundingClientRect()

			Object.assign(this.overlayRef.current.style, {
				visibility: 'visible',
				top		  : rect.top  + 1 +'px',
				left      : rect.left + 1+'px',
				width     : rect.width + 'px',
				height    : rect.height + 'px'
			})
		} else {
			console.log("ss",this.overlayRef.current.style)
			Object.assign(this.overlayRef.current.style, {
				visibility: 'hidden'
			})
		}
        
	}
	handleDragEnd =(e) =>{
		console.log(" hansle drap end !!run!")

	}
	HandMouseOver = e => {
		const rect = e.target.getBoundingClientRect()
		Object.assign(this.solid.current.style, {
				visibility: 'visible',
				top		  : rect.top + 'px',
				left	  : rect.left +1 + 'px',
				width     : rect.width + 'px',
				height    : rect.height + 'px'
			})
    }

    getHTML = () => {
		let A  = this.document.cloneNode(true)
		A.querySelectorAll("[contenteditable=true]").forEach(element => {
		 	element.setAttribute('contenteditable','false') 
		});
		A.querySelector(".overLay").style.display = 'none'
		A.querySelector(".solid").style.display = 'none'
		console.log(A.getElementsByTagName('html')[0].outerHTML.trim())
	}

    overlayRef: RefObject<any> = React.createRef()
    solid: RefObject<any> = React.createRef()
    
    render() {
        return (
            <DIV 
						onClickCapture 		= {this.handClick} 
						onDropCapture 		= {this.HandOnDrop} 
						onDragStartCapture 	= {this.HandOnDragStart} 
						onDragOverCapture 	= {this.HandOnDrapOver}
						onDragEndCapture 	= {this.handleDragEnd}
						onMouseOverCapture	= {this.HandMouseOver}
					>	
                    {this.props.children}
                    <div className = "solid"   ref = {this.solid} ></div>
					<div className = "overLay" ref = {this.overlayRef} ><p id="infoSection"></p></div>
            </DIV>
        )
    }
}