import styled from "styled-components";

export const GalleryWrapper = styled.div`
    .brief-msg{
        margin-top: 20px;
        width: 1200px;
        height: 151px;
        font-family: '宋体';

        .title-part{
            height: 28px;
            line-height:28px;
            text-align: center;
            font-size: 24px;
            font-weight: 600;
        }
        .pub-time{
            height: 73px;
            line-height:73px;
            text-align: center;
            font-size: 14px;
            color: #515151;
            border-bottom: 1px #d1d1d1 solid;
        }
    }
    .markdown-part{
        width: 1200px;

        .markdownStyle{
            img{
                width: 600px;
                height: 400px;
            }
        }
    }
`