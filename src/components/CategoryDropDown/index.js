import React from 'react'
import { Select } from 'semantic-ui-react'

const category = [
    { key : 't-shirts' , value : 't-shirts' , text : 'T-Shirts' },
    { key : 'jackets' , value : 'jackets', text : 'Jackets' },
    { key : 'sweatshirts' , value : 'sweatshirts' , text : 'Sweatshirts' },
]

const CategoryDropDown = () => {
    return (
        <Select
            placeholder={'Select Category'}
            options={category}
         />
    )
}

export default CategoryDropDown