"use client";
import React, { ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";

// import { Button } from "@nextui-org/react";

import PostMoreIcon from "@/components/common/icon/PostMoreIcon";
import UploadIcon from "@/components/common/icon/UploadIcon";
import { UserDataContext } from "@/contexts/AuthContext";
import ModalTriggerButtonProvider from "@/contexts/ModalTriggerButton.context";

const ContentIcon = {
  uploadIcon: <UploadIcon color="white" className="h-4 w-4" />,
  postMoreIcon: <PostMoreIcon />,
};

export default function ModalTriggerButton({
  text,
  content,
  children,
  isLoading,
  size = "lg",
  loginRequired = false,
}: {
  text: string;
  children: ReactNode;
  content?: keyof typeof ContentIcon;
  loginRequired?: boolean;
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const userData = useContext(UserDataContext);
  const [onClick, setOnClick] = useState(false);
  const handleOnClick = () => {
    if (loginRequired && !userData?.user.userId) {
      toast.warn("로그인이 필요합니다.");
      return;
    }
    setOnClick(true);
  };
  const handleCloseOnClick = () => {
    setOnClick(false);
  };
  return (
    <>
      <button
        className=" flex items-center justify-center font-poorStory"
        // size={size}
        // variant="bordered"
        // isLoading={isLoading}
        color="primary"
        // endContent={content ? ContentIcon[content] : null}
        onClick={handleOnClick}
      >
        {text}
      </button>
      <ModalTriggerButtonProvider
        onClick={onClick}
        handleCloseOnClick={handleCloseOnClick}
      >
        {children}
      </ModalTriggerButtonProvider>
    </>
  );
}
