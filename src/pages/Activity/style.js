import styled from "styled-components";

export const ActivityWrapper = styled.div`
    .right-part{
        width: 44rem;
    }
    .gallery-list{
        margin: 0;
        padding: 0;
        width: 44rem;
        display: flex;
        flex-wrap: wrap;
    }
    .gallery-item{
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