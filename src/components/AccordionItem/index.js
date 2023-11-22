import { useRef } from "react";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  AccordionItemContainer,
  AccordionItemBtn,
  AccordionItemSpan,
  AccordionItemContentWrapper,
  AccordionItemContent,
} from "./AccordionItemElements";

import { splitAndCapitalizeTitle, TARGET, REL } from "../utils/helpers";

export const AccordionItem = ({ value, title, index, activeIndex, toggle }) => {
  const contentRef = useRef(null);

  return (
    <AccordionItemContainer index={index} activeIndex={activeIndex}>
      <AccordionItemBtn onClick={() => toggle(index)}>
        {splitAndCapitalizeTitle(title)}
        <AccordionItemSpan>
          {index === activeIndex ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </AccordionItemSpan>
      </AccordionItemBtn>
      <AccordionItemContentWrapper
        ref={contentRef}
        contentRef={contentRef}
        index={index}
        activeIndex={activeIndex}
      >
        <AccordionItemContent>
          <ul>
            {Object.entries(value).map(
              ([key, { text, hyperlinkText, hyperlink, deadline }]) => (
                <li key={key}>
                  {text}
                  <a href={hyperlink} target={TARGET} rel={REL}>
                    {hyperlinkText}
                  </a>
                  <strong>{deadline}</strong>
                </li>
              )
            )}
          </ul>
        </AccordionItemContent>
      </AccordionItemContentWrapper>
    </AccordionItemContainer>
  );
};
