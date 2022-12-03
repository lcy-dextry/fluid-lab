import styled from "styled-components"

export const HomeWrapper = styled.div`
    .news-part{
        width: 100%;
    }
    .title-part{
        margin: 2.5rem 0;
        display: flex;
        flex-wrap: wrap;

        a{
            width: 100%;
            height: 1.5rem;
            line-height: 1.5rem;
            text-align: center;
            color: #545454;

            &:hover{
                color: #005cbb;
            }
        }
    }
    .title-chinese{
        position: relative;
        font-size: 1.25rem;
        font-weight: 600;
        font-family: 'microsoft yahei','Open Sans', sans-serif;
        letter-spacing: 0.25rem;
    }
    .title-english{
        font-size: 0.75rem;
        font-family: 'Consolas'
    }
    .title-chinese::before{
        position: absolute;
        left: 20rem;
        bottom: 0;
        content: '';
        width: 4rem;
        height: 1px;
        background-color: black;
    }
    .title-chinese::after{
        position: absolute;
        right: 20rem;
        bottom: 0;
        content: '';
        width: 4rem;
        height: 1px;
        background-color: black;
    }
    .news-list{
        display: flex;
        justify-content: flex-start;

        .sc-jSUZER{
            margin-right: 2.5vw;
        }
        .sc-jSUZER:last-child{
            margin-right: 0;
        }
    }
`