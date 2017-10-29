import styled from 'styled-components'

export const Sidebar = styled.div`
    position:fixed;
    float:left;
    width:230px;
    
    background-color:#333;
    top:0;
    left:0;
    bottom:0;

`

export const List = styled.ul`
    list-style-type: none;
    margin:0;
    padding:0;
    padding-top:80px;
`

export const Item = styled.li`
    display:inline-block;
    text-decoration:none;
    width:100%;
    height:70px;
    padding-left:50px;
`