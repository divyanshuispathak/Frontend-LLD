import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const data = [
  {
    title: "Item1",
    body: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the first item's accordion body.",
  },
  {
    title: "Item2",
    body: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the second item's accordion body. Let's imagine this being filled with some actual content.",
  },
  {
    title: "Item3",
    body: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-[50%] m-auto mt-5">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          body={item.body}
          isOpen={index === openIndex ? true : false} // first accordion will go true and false for other accordion items
          setIsOpen={() => {
            index === openIndex ? setOpenIndex(null) : setOpenIndex(index)
          }}
        />
      ))}
    </div>
  );
};

export default Accordion;
