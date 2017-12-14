import styled from 'styled-components'

export const Sidebar = styled.div`
    position:absolute;
    float:left;
    width:200px;
    height:1000px;
    background-color:#1b1c1d;
    top:71px;
    left:0;
    bottom:0;
`

export const List = styled.ul`
    list-style-type: none;
    margin:0;
    padding:0;
`

export const Item = styled.li`
    display:flex;
    text-decoration:none;
    width:100%;
    height:60px;
    padding-left:35px;
    align-items:center;
    transition:.3s;
    :hover{
        background:black;
        color:white;
    }
`