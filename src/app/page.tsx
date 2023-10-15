import hanroroMainImage from "/public/photo/circle/hanroromain.png";
import hanroro1 from "/public//photo/circle/hanroro1.png";
import hanroro2 from "/public//photo/circle/hanroro2.png";
import VideoSection from "./components/section/VideoSection";
import CircleImageSection from "./components/section/CircleImageSection";

export default function Home() {
  const circlePhotoList = [hanroroMainImage, hanroro1, hanroro2];

  const changeNftImage = () => {
    const randomIndex = Math.floor(Math.random() * circlePhotoList.length);
    return circlePhotoList[randomIndex];
  };

  return (
    <main className="z-1 h-full w-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <CircleImageSection />
      <VideoSection title="입춘" />
      <VideoSection title="정류장" />
      <VideoSection title="화해" />
      <VideoSection title="사랑하게 될 거야" />
    </main>
  );
}
