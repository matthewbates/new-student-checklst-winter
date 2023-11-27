import { AccordionItemA } from "../AccordionItem/AccordionItemElements";

import { TARGET, REL } from "../utils/helpers";

export const BeforeArriving = ({ value }) => {
  const { textOne, textTwo, hyperlink } = value;

  return (
    <>
      <AccordionItemA href={hyperlink} target={TARGET} rel={REL}>
        {textOne}
      </AccordionItemA>
      {textTwo}
    </>
  );
};
