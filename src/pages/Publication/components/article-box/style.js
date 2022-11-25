import styled from "styled-components";

export const ArticleBoxWrapper = styled.div`
    padding: 15px 10px 20px 10px;
    width: 880px;
    border-bottom: 1px dashed #E2E2E2;

    &:hover{
        background-color: #FAFAFA;
    }
    .article-msg{
        width: 860px;
        font-size: 12px;
        font-family: 'Microsoft Yahei';
        color: #666;
        line-height: 28px;
        word-wrap: break-word;
    }
`