import styled from "styled-components";

export const StudentCardWrapper = styled.div`
    display: flex;
    width: 330px;
    height: 134px;
    padding: 19px;
    margin-right: 48px;
    margin-bottom: 40px;
    box-sizing: content-box;
    background-color: #f2f7fb;

    &:nth-child(3n){
        margin-right: 0;
    }

    .photo{
        width: 150px;
        height: 134px;
        background-color: #005cbb;
    }

    .stu-msg{
        width: 160px;
        margin-left: 20px;

        .name{
            position: relative;
            width: 160px;
            height: 40px;
            font-size: 18px;
            font-weight: 600;
            color: #005cbb;
            font-family: '楷体'
        }
        .name::after{
            content: '';
            width: 30px;
            height: 1px;
            background-color: #cccccc;
            position: absolute;
            left: 0;
            bottom: 0;
        }
        .email{
            margin-top: 14px;
            font-size: 16px;
        }
    }
`