import { useState } from "react";

import { AccordionItem } from "../AccordionItem";

import { accordionData } from "../../utils/data";

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActiveIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      {Object.entries(accordionData).map(([key, value], index) => (
        <AccordionItem
          key={key}
          value={value}
          title={key}
          index={index}
          activeIndex={activeIndex}
          toggle={toggleActiveIndex}
        />
      ))}
    </>
  );
};
