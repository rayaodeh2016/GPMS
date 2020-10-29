import styled from 'styled-components'

export const SideBar_S = styled.div`
background:  rgb(7, 212, 212);
  margin-top: 70px;
  padding-top: 30px;
  position: fixed;
  left: 0;
  width: 250px;
  height: 100vh;
  transition: 0.5s;
  transition-property: left;

`
export const Imgestyle =styled.img`
width: 100px;
height: 100px;
border-radius: 100px;
margin-bottom: 10px;
`
export const Head_4 =styled.h4`
color: #fff;
margin-top: 0;
margin-bottom: 20px;
@media (max-width:1200px) {
  font-size:16px;
}
`
export const A_S =styled.a`
color: #fff;
  display: block;
  width: 100%;
  line-height: 60px;
  text-decoration: none;
  padding-left: 40px;
  box-sizing: border-box;
  transition: 0.5s;
  transition-property: background;
}

&:hover{
  background: rgb(10, 161, 161);
  color:white;
  text-decoration: none;
}
`
export const Header_S =styled.div`

position: fixed;
background: rgb(7, 212, 212);
padding: 10px;
width: 100%;
height: 75px;
    `
    export const H3_S =styled.h3`
    color: #fff;
    background-color: rgb(7, 212, 212);
    margin: 0;
    text-transform: uppercase;
   top:120px;
    margin-right: 40px;
    font-size: 24px;
    padding-left: "10px" 
    font-weight: 900;
    `
    export const Button_S =styled.a `
    padding-top: 5px;

    text-decoration: none;
    float: right;
    margin-top: -30px;
    margin-right: 40px;
    border-radius: 2px;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    transition: 0.5s;
    font-size: 2rem;
     padding-right:1.5%;
  
  
  &:hover{
  color: rgb(10, 161, 161);
  }

  
`