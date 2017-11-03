import React, { Component } from 'react'
import { Form , List } from 'semantic-ui-react'
import CategoryDropDown from '../CategoryDropDown'
import Dropzone from 'react-dropzone'


class CreateProductForm extends Component {
    constructor(props) {
        super(props)
        this.state = { files: [] }
      }
    
      onDrop(files) {
        this.setState({
          files
        });
      }
    render() {
        return (
            <Form>
                <Form.Field>
                    <Form.Input label={'Product Name'} type="text"/>
                </Form.Field>
                <Form.Field>
                    <label>Category</label>
                    <CategoryDropDown/>
                    </Form.Field>
                <Form.Group>
                    <Form.Field width={12}>
                        <Form.Input label={'Price'} type="number" />
                    </Form.Field>
                    <Form.Field width={4}>
                        <Form.Input label={'Quantity'} type="number" />
                    </Form.Field>
                </Form.Group>
                    <Form.Field>
                        <label>Product Images Upload</label>
                        <br/>
                        <Dropzone 
                            onDrop={this.onDrop.bind(this)}
                            style={{width: '100%',
                                height: '200px',
                                borderWidth: '2px',
                                borderColor: 'rgb(102, 102, 102)',
                                borderStyle: 'dashed',
                                borderRadius: '5px'}}
                            />
                    </Form.Field>
                    <Form.Field>
                        <List>
                            {this.state.files.map(f => 
                                <List.Item 
                                    style={{overflow:'hidden'}} 
                                    key={f.name}
                                >
                                <div>
                                    <div style={{width:'92%',overflow:'hidden'}}>
                                    <p> {f.name} </p></div>
                                    <List.Icon name={'x'}
                                        style={{position:'relative',top:'-18px',left:'304px'}}
                                    />
                                </div>
                                </List.Item>)}
                        </List>
                    </Form.Field>
                    <Form.Field>
                        <Form.Button fluid content={'Add'} />
                    </Form.Field>
            </Form>
        )
    }
}

export default CreateProductForm