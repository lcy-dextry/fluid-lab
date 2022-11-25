import styled from "styled-components"

export const HeaderWrapper = styled.div`
    position: fixed;
    z-index: 100;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #005cbb;

    .wrap-v1{
        display: flex;
        justify-content: space-between;
        height: 80px;
    }
    .lab-name{
        width: 202px;
        height: 80px;
        background-image: url(${require('@/assets/img/lab-name.png')});
        background-size: cover;
    }
    .guide-list{
        margin: 0;
        width: 800px;
        height: 80px;
        display: flex;

        .guide-item{
            flex: 1;
            height: 80px;
            line-height: 80px;
            text-align: center;
            font-size: 16px; 
            color: #FFF;
        }
        .active{
            background-color: #118BCE;
        }
        .search-icon{
            font-size: 20px; 
        }
    }
`
