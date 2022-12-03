import styled from "styled-components";

export const TitleWrapper = styled.div`
    width: 100%;
    margin-bottom: 2.5rem;
    .title{
        height: 2.8rem;
        position: relative;
        font-size: 1.3rem;
    }
    .title::after{
        position: absolute;
        bottom: 0px;
        left: 0px;
        content: '';
        width: 1.9rem;
        height: 0;
        border-bottom: 0.2rem solid #f09621;
    }
`
