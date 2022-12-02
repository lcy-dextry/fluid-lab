import styled from "styled-components"

export const HomeWrapper = styled.div`
    .news-part{
        width: 1200px;
    }
    .title-part{
        margin: 50px 0;
        display: flex;
        flex-wrap: wrap;

        a{
            width: 1200px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: #545454;

            &:hover{
                color: #005cbb;
            }
        }
    }
    .title-chinese{
        position: relative;
        font-size: 25px;
        font-weight: 600;
        font-family: 'microsoft yahei','Open Sans', sans-serif;
        letter-spacing: 5px;
    }
    .title-english{
        font-size: 15px;
        font-family: 'Consolas'
    }
    .title-chinese::before{
        position: absolute;
        left: 400px;
        bottom: 0;
        content: '';
        width: 80px;
        height: 1px;
        background-color: black;
    }
    .title-chinese::after{
        position: absolute;
        right: 400px;
        bottom: 0;
        content: '';
        width: 80px;
        height: 1px;
        background-color: black;
    }
    .news-list{
        display: flex;
        justify-content: flex-start;

        .sc-jSUZER{
            margin-right: 40px;
        }
        .sc-jSUZER:last-child{
            margin-right: 0;
        }
    }
`