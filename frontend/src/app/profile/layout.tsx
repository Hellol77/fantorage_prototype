"use client";
import ProfileLinkButton from "@/components/common/button/ProfileLinkButton";
import MainContainer from "@/components/common/container/MainContainer";
import BoardIcon from "@/components/common/icon/BoardIcon";
import HeartEmptyIcon from "@/components/common/icon/HeartEmptyIcon";
import ProfileIcon from "@/components/common/icon/ProfileIcon";
import Divider from "@/components/common/ui/Divider";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { userId } = useParams();

  return (
    <MainContainer className="flex  flex-col overflow-auto md:flex-row ">
      <section className=" sticky top-0 flex h-14  min-w-fit items-center rounded-lg px-1 py-2 font-poorStory dark:bg-[#18181b] md:mr-4  md:h-[600px] md:w-48 md:flex-col md:gap-2 md:px-4 md:py-2">
        <ProfileLinkButton
          text="프로필"
          href={`/profile/${userId || ""}`}
          // className=" rounded-r-none"
        >
          <ProfileIcon size="16" />
        </ProfileLinkButton>
        {!userId && (
          <>
            {/* <Divider className="mx-1 h-full w-[1px] md:h-[1px] md:w-full" /> */}
            <Link
              href={"/profile/like"}
              className="flex h-full w-full items-center justify-center gap-4 rounded-xl hover:bg-[#272727] md:h-12 md:justify-start md:pl-2"
            >
              <HeartEmptyIcon size="16" />
              <p>좋아요</p>
            </Link>
          </>
        )}
        {/* <Divider className="mx-1 h-full w-[1px]  md:h-[1px] md:w-full" /> */}
        <ProfileLinkButton
          text="게시물"
          href={`/profile/${userId || ""}/post`}
          // className=" rounded-l-none"
        >
          <BoardIcon size="16" />
        </ProfileLinkButton>
      </section>

      {children}
    </MainContainer>
  );
}
