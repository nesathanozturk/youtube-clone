import VideoBox from "./VideoBox";

const Content = () => {
  return (
    <main className="w-full h-full p-10 mt-12 sm:mt-24 md:mt-24">
      <div className="ml-0 xs:ml-16 grid place-items-center xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-3 gap-y-6 2xl:gap-x-0">
        <VideoBox />
        <VideoBox />
        <VideoBox />
        <VideoBox />
        <VideoBox />
        <VideoBox />
        <VideoBox />
        <VideoBox />
        <VideoBox />
        <VideoBox />
        <VideoBox />
        <VideoBox />
      </div>
    </main>
  );
};

export default Content;
