import styled from "styled-components";

export const YearMenuWrapper = styled.div`
    width: 12.25rem;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    
    .choosen-one{
        padding-left: 0.75rem; 
        width: 12.25rem;
        height: 2.75rem;
        line-height: 2.75rem;
        font-size: 0.8rem;
        font-weight: 600;
        font-family: '微软雅黑';
        background-color: #118BCE;
        color: white;
    }
    .show-year-list{
        padding: 0;
        width: 12.25rem;
        display: flex;
        flex-wrap: wrap;

        .show-year-item{
            position: relative;
            padding-left: 1.5rem; 
            width: 12.25rem;
            height: 2rem;
            border: 1px solid white;
            border-left: none; 
            line-height: 2rem;
            font-size: 0.8rem;
            font-weight: 600;
            font-family: '微软雅黑';
            background-color: #f2f7fb;
            color: #666;

            &:hover::after{
                background-color: #118BCE;
            }
        }
        .show-year-item::after{
            position: absolute;
            top: 0.35rem;
            left: 0;
            content: '';
            width: 0.25rem;
            height: 1.3rem;
            background-color: transparent;
        }
        .active::after{
            background-color: #118BCE;
        }
    }
`