import { useRef } from "react";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  AccordionItemContainer,
  AccordionItemBtn,
  AccordionItemSpan,
  AccordionItemContentWrapper,
  AccordionItemContent,
  AccordionItemUL,
  AccordionItemLI,
  AccordionItemA,
} from "./AccordionItemElements";

import { splitAndCapitalizeTitle, TARGET, REL } from "../utils/helpers";
import { GettingStarted } from "../GettingStarted";
import { BeforeArriving } from "../BeforeArriving";
import { AfterArriving } from "../AfterArriving";

export const AccordionItem = ({ value, title, index, activeIndex, toggle }) => {
  const contentRef = useRef(null);

  return (
    <AccordionItemContainer $index={index} $activeIndex={activeIndex}>
      <AccordionItemBtn
        $index={index}
        $activeIndex={activeIndex}
        onClick={() => toggle(index)}
      >
        {splitAndCapitalizeTitle(title)}
        <AccordionItemSpan>
          {index === activeIndex ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </AccordionItemSpan>
      </AccordionItemBtn>
      <AccordionItemContentWrapper
        ref={contentRef}
        $contentRef={contentRef}
        $index={index}
        $activeIndex={activeIndex}
      >
        <AccordionItemContent>
          <AccordionItemUL>
            {Object.entries(value).map(
              ([key, { id, text, hyperlinkText, hyperlink, deadline }]) => (
                <AccordionItemLI key={key}>
                  {id === 4 ? (
                    <GettingStarted />
                  ) : id === 8 ? (
                    <BeforeArriving />
                  ) : id === 14 ? (
                    <AfterArriving />
                  ) : (
                    <>
                      {text}
                      <AccordionItemA
                        href={hyperlink}
                        target={TARGET}
                        rel={REL}
                      >
                        {hyperlinkText}
                      </AccordionItemA>
                      <strong>{deadline}</strong>
                    </>
                  )}
                </AccordionItemLI>
              )
            )}
          </AccordionItemUL>
        </AccordionItemContent>
      </AccordionItemContentWrapper>
    </AccordionItemContainer>
  );
};
// <AccordionItemLI key={key}>
//   {text}
//   <AccordionItemA href={hyperlink} target={TARGET} rel={REL}>
//     {hyperlinkText}
//   </AccordionItemA>
//   <strong>{deadline}</strong>
// </AccordionItemLI>
