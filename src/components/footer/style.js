import styled from "styled-components"

export const FooterWrapper = styled.div`
    position: relative;
    height: 120px;
    background-color: #005cbb;
    margin-top: 50px;

    .wrap-v1{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        height: 75px;
        margin: auto;
    }
    .footer-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 50px;
        margin: 0;
        padding: 0;
        
        .footer-item{
            width: 1200px;
            height: 15px;
            line-height: 15px;
            text-align: center;
            font-size: 13px; 
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