import { useRef } from "react";

import {
  AccordionItemContainer,
  AccordionItemBtn,
  AccordionItemContentWrapper,
  AccordionItemContent,
  AccordionItemUL,
  AccordionItemLI,
  AccordionItemA,
} from "./AccordionItemElements";

import { GettingStarted } from "../GettingStarted";
import { BeforeArriving } from "../BeforeArriving";
import { AfterArriving } from "../AfterArriving";

import { splitAndCapitalizeTitle, TARGET, REL } from "../../utils/helpers";
import { Arrow } from "../Arrow";
import { Register } from "../Register";

export const AccordionItem = ({ value, title, index, activeIndex, toggle }) => {
  const contentRef = useRef(null);

  return (
    <AccordionItemContainer $index={index} $activeIndex={activeIndex}>
      <AccordionItemBtn
        $index={index}
        $activeIndex={activeIndex}
        onClick={() => toggle(index)}
      >
        <Arrow index={index} activeIndex={activeIndex} />
        {splitAndCapitalizeTitle(title)}
      </AccordionItemBtn>
      <AccordionItemContentWrapper
        ref={contentRef}
        $contentRef={contentRef}
        $index={index}
        $activeIndex={activeIndex}
      >
        <AccordionItemContent>
          {Object.entries(value).map(([key, value]) => (
            <div key={key}>
              {value.id === 5 ? (
                <GettingStarted value={value} />
              ) : value.id === 10 ? (
                <Register value={value} />
              ) : value.id === 11 ? (
                <BeforeArriving value={value} />
              ) : value.id === 15 ? (
                <AfterArriving value={value} />
              ) : (
                <>
                  {value.text}
                  <AccordionItemA
                    href={value.hyperlink}
                    target={TARGET}
                    rel={REL}
                  >
                    {value.hyperlinkText}
                  </AccordionItemA>
                  <strong>{value.deadline}</strong>
                </>
              )}
            </div>
          ))}
        </AccordionItemContent>
      </AccordionItemContentWrapper>
    </AccordionItemContainer>
  );
};
