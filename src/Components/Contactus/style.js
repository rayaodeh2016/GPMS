
import styled from 'styled-components'


export const Input = styled.input`
    width: 100%;
    padding: 12px ;

    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    
    `
export const Container = styled.div
  `
    box-sizing: border-box;
    max-width:100%;
 
    `
export const Form_S = styled.form`
margin:0;
padding:0;
    `
export const Textarea = styled.textarea`
    width: 100%;
    padding: 12px;

    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
   

    `
export const Form = styled.form`
    @media screen and (max-width: 570px) 
  margin:auto;
    `
export const Titel = styled.div`
    
    text-align:center;
    font-family: 'Vidaloka';
       text-transform: uppercase;
    

    `

export const Lable = styled.label`
    
     
    color: black;
    text-align:right
    `
export const InputSubmit = styled.input`
    
      background-color: rgb(7, 212, 212) ;
     
      color: white;
      padding: 12px 20px;
      position:center;
      border: none;
      cursor: pointer;

      @media screen and (max-width: 570px) 
        
    &:hover 
        background-color: rgb(10, 161, 161) ;
        width: 90px;
          margin-bottom: 5px;
          
      
      `

export const Column_S = styled.div`
        float: left;
        width: 50%;
        margin-top: 6px;
        padding: 20px ;
        @media (max-width:570px){
        width: 100%;
      margin-top: 0;
        }
        `

export const H2 = styled.h2`
        text-align:center;
        font-family: 'Vidaloka';
           text-transform: uppercase;
          
    
        `

export const Row_s = styled.div`
      &:active
        content: "";
        display: table;
        clear: both;
        `
export const Img = styled.img`
     @media (max-width:570px){
      max-width: 0;
      height: 100%;
      overflow: hidden;
      display:none
      `