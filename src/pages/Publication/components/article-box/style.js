import styled from "styled-components";

export const ArticleBoxWrapper = styled.div`
    padding: 0.75rem 0.5rem 1rem 0.5rem;
    width: 44rem;
    border-bottom: 1px dashed #E2E2E2;

    &:hover{
        background-color: #FAFAFA;
    }
    .article-msg{
        width: 43rem;
        font-size: 0.6rem;
        font-family: 'Microsoft Yahei';
        color: #666;
        line-height: 1.4rem;
        word-wrap: break-word;
    }
`