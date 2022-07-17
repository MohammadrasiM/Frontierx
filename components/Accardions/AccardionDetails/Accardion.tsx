import React, { useState, useRef, useEffect } from "react";
import { RiApps2Line } from "react-icons/ri";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import StringContent from "./StringContent";
import ArrayContent from "./ArrayContent";
import { AiOutlineQuestionCircle } from "react-icons/ai";
type AccordionProps = {
  title: string;
  content: any;
};

const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpened, setOpened] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("0px");
  const contentElement = useRef<any>(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement?.current?.scrollHeight}px` : "0px");
  };
  useEffect(() => {
    HandleOpening();
  }, []);
  return (
    <div className="border border-[#0d0d0d] border-opacity-50 mb-8">
      <div
        className={
          "bg-[#0d0d0d] bg-opacity-50  p-8 flex justify-between items-center text-white "
        }
      >
        <h4 className="font-semibold flex items-center gap-2  ">
          <RiApps2Line />
          {title}
          {typeof content === "string" ? (
            ""
          ) : (
            <AiOutlineQuestionCircle size="15" color="#A2A2A2" />
          )}
        </h4>
        <div>
          {isOpened ? (
            <RiArrowUpSLine
              size={"1rem"}
              className="cursor-pointer"
              onClick={HandleOpening}
            />
          ) : (
            <RiArrowDownSLine
              size={"1rem"}
              className="cursor-pointer"
              onClick={HandleOpening}
            />
          )}
        </div>
      </div>
      {typeof content === "string" ? (
        <StringContent
          contentElement={contentElement}
          height={height}
          content={content}
        />
      ) : (
        <ArrayContent
          contentElement={contentElement}
          height={height}
          content={content}
          isOpened={isOpened}
        />
      )}
    </div>
  );
};

export default Accordion;
