import styled from "styled-components";

export const ActivityWrapper = styled.div`
    .right-part{
        width: 880px;
    }
    .gallery-list{
        margin: 0;
        padding: 0;
        width: 880px;
        display: flex;
        flex-wrap: wrap;
    }
    .gallery-item{
        width: 880px;
        height: 60px;
        padding: 15px 10px 20px;
        border-bottom: 1px dashed #E2E2E2;

        &:hover{
            background-color: #FAFAFA;
        }
    }
`