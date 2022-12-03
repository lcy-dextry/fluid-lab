import styled from "styled-components";

export const StudentCardWrapper = styled.div`
    display: flex;
    width: 16.5rem;
    height: 6.7rem;
    padding: 0.95rem;
    margin-right: 2.4rem;
    margin-bottom: 2rem;
    box-sizing: content-box;
    background-color: #f2f7fb;

    &:nth-child(3n){
        margin-right: 0;
    }

    .photo{
        width: 7.5rem;
        height: 6.7rem;
        background-color: #005cbb;
    }

    .stu-msg{
        width: 8rem;
        margin-left: 1rem;

        .name{
            position: relative;
            width: 8rem;
            height: 2rem;
            font-size: 0.9rem;
            font-weight: 600;
            color: #005cbb;
            font-family: '楷体'
        }
        .name::after{
            content: '';
            width: 1.5rem;
            height: 1px;
            background-color: #cccccc;
            position: absolute;
            left: 0;
            bottom: 0;
        }
        .email{
            margin-top: 0.7rem;
            font-size: 0.8rem;
        }
    }
`