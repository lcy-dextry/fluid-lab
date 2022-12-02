import styled from "styled-components";

export const NewsCardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 270px;
    height: 300px;

    .img-part{
        width: 270px;
        height: 180px;
    }
    .news-msg{
        width: 270px;
    }
    .news-title{
        margin: 5px 0 15px;
        width: 270px;
        height: 26px;
        font-size: 15px;
        font-weight: 600;
        color: #0066FF;
    }
    .news-date{
        margin-bottom: 10px;
        width: 270px;
        height: 18px;
        line-height: 18px;
        font-size: 12px;
        color: #666;

        .anticon-calendar{
            margin-right: 5px;
        }
    }
    
`