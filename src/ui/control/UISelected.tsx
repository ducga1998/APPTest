import * as React from 'react'
import UIControl from '../../interfaces/UIControl'
import { Provider, SubscribeOne ,Container} from 'unstated-x'
import Select from 'react-select';
import styled from 'styled-components' 
const Input = styled.input`
    padding: 5px 10px;
    &:focus{
        border: 2px solid black;
    }
`
export default class UISelected
    extends React.Component<{}>
    implements UIControl {
        state ={
            selectedOption : ''
        }
    handChange(e){
            console.log(e.target.value);

        }
    render() {
        const { selectedOption } = this.state;
        return <div>
            <SubscribeOne to={ OpenContainer } bind={['text']} >
            {
                container => {
                  return  <Select
                  name="form-field-name"
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                  ]}
                />
                }
            }
            </SubscribeOne>
            
        </div>
    }

}
