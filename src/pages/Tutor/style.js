import styled from "styled-components";

export const TutorWrapper = styled.div`
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
        width: 44px;
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
        width: 44px;
        height: 3px;
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
    .tutor-photo{
        margin-left: 300px;
        width: 600px;
        height: 400px;
        background-image: url(${require('@/assets/img/tutor-photo.png')});
        background-size: cover;
    }
    .linear{
        margin-top: 10px;
        width: 1200px;
        height: 5px;
        border-top: 2px solid #118BCE;
        border-bottom: 1px solid #118BCE;
    }
    .brief{
        margin-top: 30px;
        font-size: 16px;
        line-height: 32px;
    }
    .project{
        font-size: 16px;
        line-height: 32px;
    }
    .honor{
        font-size: 16px;
        line-height: 32px;
    }
`