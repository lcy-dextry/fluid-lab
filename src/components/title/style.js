import styled from "styled-components";

export const TitleWrapper = styled.div`
    width: 1200px;
    margin-bottom: 50px;
    .title{
        height: 56px;
        position: relative;
        font-size: 26px;
    }
    .title::after{
        position: absolute;
        bottom: 0px;
        left: 0px;
        content: '';
        width: 38px;
        height: 0;
        border-bottom: 4px solid #f09621;
    }
`
