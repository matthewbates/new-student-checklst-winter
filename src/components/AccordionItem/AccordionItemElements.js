import styled from "styled-components";

export const AccordionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 800px;
`;

export const AccordionItemBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #721c28;
  color: #ffffff;
  padding: 1em;
  font-size: 1em;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid #ffffff;
`;

export const AccordionItemSpan = styled.span``;

export const AccordionItemContentWrapper = styled.div`
  height: ${({ contentRef, index, activeIndex }) =>
    contentRef && index === activeIndex
      ? `${contentRef.current.scrollHeight}px`
      : "0px"};
  transition: 0.3s ease;
`;

export const AccordionItemContent = styled.div`
  ul {
  }

  li {
    &:first-child {
      padding-top: 1em;
    }

    &:last-child {
      padding-bottom: 1em;
    }
  }

  a {
    color: #721c28;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
