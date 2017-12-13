import React, { Component } from 'react'
import { Form , List , Input } from 'semantic-ui-react'
import CategoryDropDown from '../CategoryDropDown'
import Dropzone from 'react-dropzone'
// import superagent from 'superagent'
import axios from 'axios'
import sha1 from 'sha1'


class CreateProductForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            images : []
        }
    }
    
      onDrop(images) {
        this.setState({
            images
        })
      }

      submit = (images) => {

         const upload = images.map(image => {
            const data = new FormData()
            data.append('file',image)
            data.append('upload_preset','dxdnjizh')
            data.append('api_key','653988778996542')
            data.append('timestamp',Date.now()/1000)
            data.append
           return axios.post('https://api.cloudinary.com/v1_1/josphr/image/upload',data)
            .then(res => {
                const data = res.data
                const fileUrl = data.secure_url
                console.log(data)
            })
         })
        axios.all(upload).then((res) => console.log(res))
      }

    render() {
        return (
            <Form onSubmit={this.submit(this.state.images)} >
                <Form.Field>
                    <Form.Input label={'Product Name'} type="text"/>
                </Form.Field>
                <Form.Field>
                    <label>Category</label>
                    <CategoryDropDown/>
                </Form.Field>
                <Form.Group>
                <Form.Field width={8}>
                    <Form.Input label={'Price'} type="number" />
                </Form.Field>
                <Form.Field width={8}>
                    <Form.Input label={'Color'} type="string" />
                </Form.Field>
                </Form.Group>
             
                    <Form.Field>
                        <label>Inventory</label>
                    </Form.Field>
                    
                <Form.Group>
                    <Form.Field width={'8'}>
                     <Input fluid label={{ basic: true, content: 'S ' }}
                    labelPosition='left' type="number" />
                    </Form.Field>
                    <Form.Field width={'8'}>
                    <Input fluid label={{ basic: true, content: 'M ' }}
                    labelPosition='left' type="number" />
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Field width={'8'}>
                    <Input fluid label={{ basic: true, content: 'L ' }}
                    labelPosition='left' type="number" />
                   </Form.Field>
                   <Form.Field width={'8'}>
                   <Input fluid label={{ basic: true, content: 'XL' }}
                   labelPosition='left' type="number" />
                   </Form.Field>
                </Form.Group>
                    <Form.Field>
                        <label>Product Images Upload</label>
                        <br/>
                        <Dropzone 
                            onDrop={this.onDrop.bind(this)}
                            style={{width: '100%',
                                height: '100px',
                                borderWidth: '2px',
                                borderColor: 'rgb(102, 102, 102)',
                                borderStyle: 'dashed',
                                borderRadius: '5px'}}
                            />
                    </Form.Field>
                    <Form.Field>
                        <List>
                            {this.state.images.map((image,idx) => 
                                <List.Item 
                                    style={{overflow:'hidden'}} 
                                    key={idx}
                                >
                                <div>
                                    <div style={{width:'92%',overflow:'hidden'}}>
                                    <p> {image.name} </p></div>
                                    <List.Icon name={'x'}
                                        style={{position:'relative',top:'-18px',left:'304px'}}
                                    />
                                </div>
                                </List.Item>)}
                        </List>
                    </Form.Field>
                    <Form.Field>
                        <Form.Button 
                        fluid content={'Add'} />
                    </Form.Field>
            </Form>
        )
    }
}

export default CreateProductForm