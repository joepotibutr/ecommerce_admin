import React, { Component } from 'react'
import { Form , List , Input } from 'semantic-ui-react'
import CategoryDropDown from '../CategoryDropDown'
import Dropzone from 'react-dropzone'
import axios from 'axios'


class CreateProductForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            images : [],
            isLoading : false,
            data : {
                id : '',
                title : '',
                category : '',
                price : 0,
                color : '',
                thumbnial : '',
                images : [],
                inventory : {
                    S : 0,
                    M : 0,
                    L : 0,
                    XL : 0
                },
                description : ''
            }
        }
    }
    
    onDrop(images) {
        this.setState({
            images
        })
    }

    inventoryOnChange = e => {
        this.setState({
            data : {
                ...this.state.data,
                inventory : {
                    ...this.state.data.inventory,[e.target.name] : e.target.value
                }
            }
        })
    }

    categoryOnChange = (e,data) => {
        this.setState({
           data : {
                ...this.state.data,
                category : data.value
           }
        })
    }

    onChange = e => {
        this.setState({ 
            data : { ...this.state.data,[e.target.name] : e.target.value }
        })
    }

      submit = (images) => {
        this.setState({isLoading : true})
        
         const upload = images.map(image => {
            const data = new FormData()
            data.append('file',image)
            data.append('upload_preset','dxdnjizh')
            data.append('api_key','653988778996542')
            data.append('timestamp',Date.now()/1000)
           return axios.post('https://api.cloudinary.com/v1_1/josphr/image/upload',data)
            .then(res => {
                const fileUrl = res.data.secure_url
                console.log(fileUrl)
                this.setState({ 
                    data : {
                        ...this.state.data,
                        images : [...this.state.data.images,fileUrl]
                    }
                })
            }).then(res => this.props.submit(this.state.data)
            .catch(err =>  this.setState({ isLoading : false })))
           
         })
        axios.all(upload).then((res) => console.log('axios.all'))
      }

    render() {
        const { images , isLoading , data } = this.state
        return (
            <Form 
                onSubmit={() => this.submit(images)} 
                size='small' 
                loading={isLoading}
            >
            <Form.Group>
                <Form.Field width={12}>
                    <Form.Input 
                    name='title' 
                    label={'Product Name'} 
                    type="text"
                    onChange={this.onChange}
                />
                </Form.Field>
                <Form.Field width={4}>
                    <Form.Input 
                    name='id' 
                    label={'ID'} 
                    type="text"
                    onChange={this.onChange}
                />
                </Form.Field>
            </Form.Group>
                <Form.Field>
                    <label>Category</label>
                    <CategoryDropDown
                        valueOnChange={this.categoryOnChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Form.TextArea 
                        name='description' 
                        label='Description' 
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Form.Group>
                <Form.Field width={8}>
                    <Form.Input 
                        name='price' 
                        label={'Price'} 
                        type="number" 
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Form.Field width={8}>
                    <Form.Input 
                        name='color' 
                        label={'Color'} 
                        type="string" 
                        onChange={this.onChange}
                    />
                </Form.Field>
                </Form.Group>
             
                    <Form.Field>
                        <label>Inventory</label>
                    </Form.Field>
                    
                <Form.Group>
                    <Form.Field width={'8'}>
                     <Input
                        name='S'
                        fluid label={{ basic: true, content: 'S ' }}
                        labelPosition='left' 
                        type="number"
                        onChange={this.inventoryOnChange} 
                        
                    />
                    </Form.Field>
                    <Form.Field width={'8'}>
                    <Input 
                        name='M'
                        fluid label={{ basic: true, content: 'M ' }}
                        labelPosition='left' 
                        type="number" 
                        onChange={this.inventoryOnChange} 
                    />
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Field width={'8'}>
                    <Input
                        name='L' 
                        fluid label={{ basic: true, content: 'L ' }}
                        labelPosition='left' 
                        type="number" 
                        onChange={this.inventoryOnChange} 
                    />
                   </Form.Field>
                   <Form.Field width={'8'}>
                   <Input 
                        name='XL'
                        fluid label={{ basic: true, content: 'XL' }}
                        labelPosition='left' 
                        type="number" 
                        onChange={this.inventoryOnChange} 
                    />
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
                            {images.map((image,idx) => 
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