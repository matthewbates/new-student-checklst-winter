import { AccordionItemA } from "../AccordionItem/AccordionItemElements";

import { TARGET, REL } from "../utils/helpers";

export const GettingStarted = ({ value }) => {
  const { text, hyperlinkText, hyperlink, subTextOne, subTextTwo } = value;

  return (
    <>
      {text}
      <AccordionItemA href={hyperlink} target={TARGET} rel={REL}>
        {hyperlinkText}
      </AccordionItemA>
      <ul>
        {subTextOne.map(({ id, text, subText }) => (
          <li key={id}>
            {text}
            <ul>
              {subText.map(({ id, text, subText }) => (
                <>
                  <li key={id}>{text}</li>
                  {id === 3 &&
                    subText.map(({ id, text }) => (
                      <ul key={id}>
                        <li key={id}>{text}</li>
                      </ul>
                    ))}
                </>
              ))}
            </ul>
          </li>
        ))}
        {subTextTwo.map(({ id, text, subText }) => (
          <li key={id}>
            {text}
            <ul>
              {subText.map(({ id, text }) => (
                <li key={id}>{text}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};
