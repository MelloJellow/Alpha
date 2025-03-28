import {css} from "styled-components"



export const mobile = (props) =>{
    return css`
    @media only screen and (max-wdith: 380px){
        ${props}
    }
    `;
};

export const tablet = (props) =>{
    return css`
    @media only screen and (max-wdith: 1024px){
        ${props}
    }
    `;
};