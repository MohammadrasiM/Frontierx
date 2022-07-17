import React from "react";
interface AccordionProps {
  contentElement?: any;
  height?: string;
  content?: any;
  isOpened?: boolean;
}
function ArrayContent({
  contentElement,
  height,
  content,
  isOpened,
}: AccordionProps) {
  return (
    <div
      ref={contentElement}
      style={{ height: height }}
      className={
        isOpened
          ? `bg-[#0d0d0d] bg-opacity-50 overflow-hidden transition-all duration-200     p-4`
          : `bg-[#0d0d0d] bg-opacity-50 overflow-hidden transition-all duration-200`
      }
    >
      <div className="relative">
        <div className="absolute mx-[1.2rem] w-[1px] h-[92%] bg-[rgb(86,86,86)]  left-[91.3%] z-[-1] "></div>
        <div className="max-h-80  overflow-y-auto overflow-x-hidden scrollbar mx-[1.2rem] gap-y-2 w-[92%] pb-8 ">
          <div className=" grid grid-cols-12  gap-2   w-[96%]">
            {content?.map((data: any) => (
              <div
                key={data.id}
                className="bg-[#0D0D0D] flex flex-col items-center justify-center col-span-12  md:col-span-4 rounded-md w-full h-24 border-[2px] border-[#0D0D0D] hover:border-red-700"
              >
                <p className="text-[#8E8B8F] text-sm">{data?.thing}</p>
                <p>{data?.name}</p>
                <p className="text-[#8E8B8F] text-sm">{data?.percent}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArrayContent;
