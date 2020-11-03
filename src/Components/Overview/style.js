import styled from 'styled-components'

export const AboutUs=styled.section`
    height: 100vh;
    width: 100%;
    display: flex;      
       
@media (max-width:520px){
    
   
        font-size: 1rem;
      
        text-align: center;
    }  
    `
export const Text=styled.div`
    margin-top: 10%;
    max-width: 700px;
    text-align: center;
    float: left;
    `
   
export const Div_img=styled.div`
    max-width: 50%;;
    height: 100%;
    overflow: hidden;
    @media (max-width:520px){
        max-width: 0%;;
        height: 100%;
        overflow: hidden;

    `
    export const Titel=styled.h2`
    text-align:center;
    font-family: 'Vidaloka';
       text-transform: uppercase;
      

    `
export const Img=styled.img`
    max-width: 100%; 
    display:block; 
    margin-top: 10%;
    height: auto;
    `


export const Textp=styled.p`
    font-size: 1.8rem;
    line-height: 1.5;
    text-align: center;
    `
