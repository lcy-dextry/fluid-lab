import styled from "styled-components";

export const NewsWrapper = styled.div`
    .left-part{
        padding-left: 0.75rem; 
        width: 12.25rem;
        height: 2.75rem;
        line-height: 2.75rem;
        font-size: 0.8rem;
        font-weight: 600;
        font-family: '微软雅黑';
        background-color: #118BCE;
        color: white;
    }
    .right-part{
        width: 44rem;
    }
    .location-box{
        display: flex;
        width: 44rem;
        height: 2.8rem;
        padding-top: 1.25rem;
        border-bottom: 1px solid #E6E6E6;

        .anticon-home{
            margin-right: 0.5rem;
            height: 1.5rem;
            line-height: 1.5rem;
            font-size: 0.7rem;
            color: #999;
        }
        .text{
            height: 1.5rem;
            line-height: 1.5rem;
            font-size: 0.6rem;
            color: #999;
        }
    }
    .news-list{
        margin: 0;
        padding: 0;
        width: 44rem;
        display: flex;
        flex-wrap: wrap;
    }
    .news-item{
        width: 44rem;
        height: 3rem;
        padding: 0.75rem 0.5rem 1rem;
        border-bottom: 1px dashed #E2E2E2;
        font-size: 0.65rem;
        font-family: 'Microsoft Yahei';
        color: #666;

        &:hover{
            background-color: #FAFAFA;
        }
    }
    .wrap-v1{
        justify-content: space-between;
    }
`