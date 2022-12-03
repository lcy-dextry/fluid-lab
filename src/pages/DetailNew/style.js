import styled from "styled-components";

export const DetailNewWrapper = styled.div`
    .brief-msg{
        margin-top: 1rem;
        width: 60rem;
        height: 7.55rem;
        font-family: '宋体';

        .title-part{
            height: 1.4rem;
            line-height:1.4rem;
            text-align: center;
            font-size: 1.2rem;
            font-weight: 600;
        }
        .pub-time{
            height: 3.65rem;
            line-height: 3.65rem;
            text-align: center;
            font-size: 0.7rem;
            color: #515151;
            border-bottom: 1px #d1d1d1 solid;
        }
    }
    .markdown-part{
        width: 60rem;

        .markdownStyle{
            img{
                width: 30rem;
                height: 20rem;
            }
        }
    }
`