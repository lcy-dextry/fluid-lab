import styled from "styled-components"

export const FooterWrapper = styled.div`
    position: relative;
    height: 6rem;
    background-color: #005cbb;
    margin-top: 2.5rem;

    .wrap-v1{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        height: 3.8rem;
        margin: auto;
    }
    .footer-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 2.5rem;
        margin: 0;
        padding: 0;
        
        .footer-item{
            width: 100%;
            height: 0.75rem;
            line-height: 0.75rem;
            text-align: center;
            font-size: 0.65rem; 
            color: white;
        }
    }
    .certification{
        display: block;
        margin-top: 10px;
        height: 15px;
        line-height: 15px;
        text-align: center;
        font-size: 13px; 
        color: white;
    }
`