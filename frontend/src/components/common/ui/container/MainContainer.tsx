import React from "react";

export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="z-1 flex h-full min-h-screen w-screen overflow-x-hidden px-6 pt-20 scrollbar-hide  md:px-20  md:pt-36">
      <section className="relative mx-auto h-full w-screen max-w-[1280px]">
        {children}
      </section>
    </main>
  );
}
