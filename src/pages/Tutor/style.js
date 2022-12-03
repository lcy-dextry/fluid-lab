import styled from "styled-components";

export const TutorWrapper = styled.div`
    .guide-list{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 3.25rem;
        border-bottom: 0.1rem solid #F1F1F1;
    }
    .guide-item{
        position: relative;
        padding: 0 0.3rem 0.15rem;
        margin: 0 0.75rem;
        width: 2.2rem;
        height: 3.25rem;
        line-height: 3.25rem;
        text-align: center; 
        font-size: 0.8rem;
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
        width: 2.2rem;
        height: 0.15rem;
        background-color: transparent;
    }
    .active{
        color: #118BCE;
    }
    .active::after{
        background-color: #118BCE;
    }
    .wrap-v1{
        display: flex;
        flex-wrap: wrap;
    }
`