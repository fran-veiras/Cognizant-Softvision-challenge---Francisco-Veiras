import styled from "styled-components";

export const Container = styled.div`
    margin: 1rem;
    background: #fff;
    width: 18%;
    padding: 1rem 1rem;
`

export const Section = styled.section`
    display: flex;
    flex-direction: row;
`

export const Add = styled.a`
    display:inline-block;
    padding:0.35em 1.2em;
    border:0.1em solid #FFFFFF;
    margin:2rem 0.3em 0.3em 0;
    border-radius:0.12em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color:#000;
    text-align:center;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        color:#000000;
        background-color:#FFFFFF;
    }
`