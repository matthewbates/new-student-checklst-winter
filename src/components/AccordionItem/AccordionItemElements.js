import styled from "styled-components";

export const AccordionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 700px;
  overflow: hidden;
`;

export const AccordionItemBtn = styled.button`
  display: flex;
  align-items: center;
  background: ${({ $index, $activeIndex }) =>
    $index === $activeIndex ? "#a89968" : "#721c28"};
  color: #ffffff;
  padding: 1em;
  font-size: 1em;
  gap: 0.5em;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-bottom: ${({ $index, $activeIndex }) =>
    $index === $activeIndex ? "none" : "1px solid #f1f2f2"};
  transition: 0.3s ease-in-out;
`;

export const AccordionItemContentWrapper = styled.div`
  height: ${({ $contentRef, $index, $activeIndex }) =>
    $contentRef && $index === $activeIndex
      ? `${$contentRef.current.scrollHeight}px`
      : "0px"};
  transition: 0.3s ease;
`;

export const AccordionItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1em;
  gap: 0.25em;
  border: 1px solid #f1f2f2;

  div {
    &:first-child {
      padding-top: 1.5em;
    }
    &:last-child {
      padding-bottom: 1.5em;
    }
  }
`;

export const AccordionItemA = styled.a`
  text-decoration: none;
  color: #721c28;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
