import styled from "styled-components";

export const GalleyMenuWrapper = styled.div`
    width: 245px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    
    .choosen-one{
        padding-left: 15px; 
        width: 245px;
        height: 55px;
        line-height: 55px;
        font-size: 16px;
        font-weight: 600;
        font-family: '微软雅黑';
        background-color: #118BCE;
        color: white;
    }
    .show-galley-list{
        padding: 0;
        width: 245px;
        display: flex;
        flex-wrap: wrap;

        .show-galley-item{
            position: relative;
            padding-left: 30px; 
            width: 245px;
            height: 40px;
            border: 1px solid white;
            border-left: none; 
            line-height: 40px;
            font-size: 16px;
            font-weight: 600;
            font-family: '微软雅黑';
            background-color: #f2f7fb;
            color: #666;

            &:hover::after{
                background-color: #118BCE;
            }
        }
        .show-galley-item::after{
            position: absolute;
            top: 7px;
            left: 0;
            content: '';
            width: 5px;
            height: 26px;
            background-color: transparent;
        }
        .active::after{
            background-color: #118BCE;
        }
    }
`