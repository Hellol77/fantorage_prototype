import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CloseIcon from "@/app/icon/CloseIcon";

export default function PhotoModal({
  imageUrl,
  title,
  content,
  id,
  setPhotoClicked,
  ...props
}: {
  imageUrl: string;
  title: string;
  content: string;
  id: string;
  setPhotoClicked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClose = () => {
    setPhotoClicked(false);
  };
  return (
    <>
      <motion.div
        key="photoModal-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className=" fixed left-0 top-0 z-40 h-full w-screen bg-[#101010] opacity-20"
      ></motion.div>
      <motion.div
        key={`${id}-modal`}
        layoutId={id}
        className="absolute left-0 right-0 top-20 z-50  m-auto flex h-fit w-fit   flex-col items-center  justify-center  overflow-hidden  rounded-lg  bg-black"
      >
        <div
          className=" absolute right-1 top-2 z-[60] flex h-10  w-10 items-center justify-center"
          onClick={handleClose}
        >
          <CloseIcon className=" stroke-white" />
        </div>

        <div className="relative h-[100vw] w-[80vw] rounded-md md:h-[40vw] md:w-[30vw]">
          <Image src={imageUrl} alt={id} fill={true} />
        </div>
        <div className=" relative z-50 mt-4 w-full justify-end px-4 font-poorStory text-2xl tracking-wider">
          {title}
        </div>
        <div className=" relative z-50 w-[80vw] break-all px-4 pb-6 pt-2 font-poorStory tracking-wide md:w-[30vw]">
          {content}
        </div>
      </motion.div>
    </>
  );
}
