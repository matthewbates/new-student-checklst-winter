import styled from "styled-components";

import { CONSTANTS } from "../utils/constants";

export const AccordionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 800px;
  overflow: hidden;
`;

export const AccordionItemBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ $index, $activeIndex }) =>
    $index === $activeIndex
      ? `${CONSTANTS.colors.duGold}`
      : `${CONSTANTS.colors.duCrimson}`};
  color: #ffffff;
  padding: 1em;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid #ffffff;
  transition: 0.3s ease;
`;

export const AccordionItemSpan = styled.span``;

export const AccordionItemContentWrapper = styled.div`
  height: ${({ $contentRef, $index, $activeIndex }) =>
    $contentRef && $index === $activeIndex
      ? `${$contentRef.current.scrollHeight}px`
      : "0px"};
  transition: 0.3s ease;
`;

export const AccordionItemContent = styled.div`
  ul {
  }
`;

export const AccordionItemUL = styled.ul``;

export const AccordionItemLI = styled.li`
  &:first-child {
    padding-top: 1em;
  }

  &:last-child {
    padding-bottom: 1em;
  }
`;

export const AccordionItemA = styled.a`
  text-decoration: none;
  color: ${CONSTANTS.colors.duCrimson};
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
