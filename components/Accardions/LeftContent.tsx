import React from "react";
import Accardion from "./AccardionDetails/Accardion";
function LeftContent() {
  let accardionsData = [
    {
      id: 12,
      title: "Lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    },
  ];
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-6 w-full h-full  rounded-xl p-4">
      <div className="lg:p-4 h-full ">
        {accardionsData.map((accardion) => (
          <Accardion
            key={accardion.id}
            title={accardion.title}
            content={accardion.content}
          />
        ))}
      </div>
    </div>
  );
}

export default LeftContent;
