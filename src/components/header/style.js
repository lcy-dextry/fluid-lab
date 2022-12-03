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
        height: 4rem;
    }
    .lab-name{
        width: 10.1rem;
        height: 4rem;
        background-image: url(${require('@/assets/img/lab-name.png')});
        background-size: cover;
    }
    .guide-list{
        margin: 0;
        width: 40rem;
        height: 4rem;
        display: flex;

        .guide-item{
            flex: 1;
            height: 4rem;
            line-height: 4rem;
            text-align: center;
            font-size: 0.8rem; 
            color: #FFF;
        }
        .active{
            background-color: #118BCE;
        }
        .search-icon{
            font-size: 1rem; 
        }
    }
`
