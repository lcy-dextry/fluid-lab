import styled from "styled-components";

export const NewsWrapper = styled.div`
    .left-part{
        padding-left: 15px; 
        width: 245px;
        height: 55px;
        line-height: 55px;
        font-size: 16px;
        font-weight: 600;
        font-family: '微软雅黑';
        background-color: #118BCE;
        color: white;
    }
    .right-part{
        width: 880px;
    }
    .location-box{
        display: flex;
        width: 880px;
        height: 56px;
        padding-top: 25px;
        border-bottom: 1px solid #E6E6E6;

        .anticon-home{
            margin-right: 10px;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            color: #999;
        }
        .text{
            height: 30px;
            line-height: 30px;
            font-size: 12px;
            color: #999;
        }
    }
    
`