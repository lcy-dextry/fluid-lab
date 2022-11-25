import styled from "styled-components";

export const GalleryWrapper = styled.div`
    .pic-list{
        width: 1200px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
        margin: 0;
    }
    .pic-item{
        width: 800px;
        height: 533px;
        margin-bottom: 50px;
    }
    .pic-item:last-child{
        margin: 0;
    }
`