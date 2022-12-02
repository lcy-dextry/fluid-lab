import styled from "styled-components";

export const MemberWrapper = styled.div`
    .guide-list{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 65px;
        border-bottom: 2px solid #F1F1F1;
    }
    .guide-item{
        position: relative;
        padding: 0 6px 3px;
        margin: 0 15px;
        width: 108px;
        height: 65px;
        line-height: 65px;
        text-align: center; 
        font-size: 16px;
        color: #333;

        &:hover{
            color: #118BCE;
        }
        &:hover::after{
            background-color: #118BCE;
        }
    }
    .guide-item::after{
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        width: 108px;
        height: 3px;
        background-color: transparent;
    }
    .active{
        color: #118BCE;
    }
    .active::after{
        background-color: #118BCE;
    }
    .members-list{
        width: 1200px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
`
