import React , {Component} from 'react'
import { Select } from 'semantic-ui-react'

const category = [
    { key : 't-shirts' , value : 't-shirts' , text : 'T-Shirts' },
    { key : 'jackets' , value : 'jackets', text : 'Jackets' },
    { key : 'sweatshirts' , value : 'sweatshirts' , text : 'Sweatshirts' },
    { key : 'hoodie' , value : 'hoodie' , text : 'Hoodie' },
    { key : 'shirts' , value : 'shirts' , text : 'Shirts' }
]

class CategoryDropDown extends Component {
    render() {
        const handleChange = e => this.props.valueOnChange(e.target.value)
        return (
            <Select
            placeholder={'Select Category'}
            options={category}
         />
        )}
}


export default CategoryDropDown