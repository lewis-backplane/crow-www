import React from "react";

const Avatar = ({ name, role, photo, bio }) => {
  return (
    <>
      <div className="flex flex-row gap-5 card shadow-2xl w-130">
        <div className="w-1/4 bg-gray-50">
          <div className="text-center justify-center  mt-10 items-center text-gray-500 dark:text-gray-400  ">
            <img
              className="mx-auto mb-4 w-24 h-24 rounded-full"
              src={photo}
              alt={name}
            />
          </div>
        </div>
        <div className=" w-96 rounded p-5 text-left flex flex-col">
          <div className="flex flex-row items-center justify-between font-bold text-xl ">
            <div className="text-lg">{name}</div>
            <div>
              <img src="img/crow.svg" className="w-8 ml-auto" />
            </div>
          </div>
          <div className="text-md mb-5">{role}</div>
          <div className="text-sm">{bio}</div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
