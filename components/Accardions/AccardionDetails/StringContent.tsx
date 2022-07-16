import React from "react";
import { RiShareBoxLine } from "react-icons/ri";
import { SiDiscord, SiInstagram, SiTwitter } from "react-icons/si";
interface AccordionProps {
  contentElement?: any;
  height?: string;
  content?: any;
}
function StringContent({ contentElement, height, content }: AccordionProps) {
  return (
    <div
      ref={contentElement}
      style={{ height: height }}
      className="bg-[#0d0d0d] bg-opacity-50 overflow-hidden transition-all duration-200 px-4"
    >
      <p className="p-4 text-sm">{content}</p>

      <div className="mt-6 px-4 flex flex-col mb-12 w-11/12 text-[96%]">
        <div className="flex items-center  justify-start ">
          <div className="flex gap-3 items-center">
            <RiShareBoxLine size={22} color="white" />
            <p className="text-[#FC364C]">Lorem ipsum.com</p>
          </div>
          <div className="flex gap-3 items-center ml-8 ">
            <SiDiscord size={22} color="white" />
            <p className="text-[#FC364C]">@Lorem ipsum</p>
          </div>
        </div>
        <div className="flex items-center  justify-start mt-4">
          <div className="flex gap-3 items-center">
            <SiInstagram size={22} color="white" />
            <p className="text-[#FC364C]">@Lorem ipsum</p>
          </div>
          <div className="flex gap-3 items-center ml-[3.2rem] md:ml-[3.2rem] lg:ml-[3.2rem]">
            <SiTwitter size={22} color="white" />
            <p>@Lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StringContent;
