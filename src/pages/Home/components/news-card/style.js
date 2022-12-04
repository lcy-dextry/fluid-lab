import styled from "styled-components";

export const NewsCardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: calc(100% / 4 - 38px * 3 / 4);
    height: 15rem;

    .img-part{
        width: 100%;
        height: 60%;
    }
    .news-msg{
        width: 100%;
    }
    .news-title{
        margin: 0.25rem 0 0.75rem;
        width: 100%;
        height: 1.3rem;
        font-size: 0.75rem;
        font-weight: 600;
        color: #0066FF;
    }
    .news-date{
        margin-bottom: 0.5rem;
        width: 100%;
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: 0.6rem;
        color: #666;

        .anticon-calendar{
            margin-right: 0.25rem;
        }
    }
    
`