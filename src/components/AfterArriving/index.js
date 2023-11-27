import { AccordionItemA } from "../AccordionItem/AccordionItemElements";

import { TARGET, REL } from "../utils/helpers";

export const AfterArriving = ({ value }) => {
  const { textOne, textTwo, hyperlinkText, hyperlink } = value;

  return (
    <>
      {textOne}
      <AccordionItemA href={hyperlink} target={TARGET} rel={REL}>
        {hyperlinkText}
      </AccordionItemA>
      {textTwo}
    </>
  );
};
