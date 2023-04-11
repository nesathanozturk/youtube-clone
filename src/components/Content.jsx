import VideoBox from "./VideoBox";

const Content = () => {
  return (
    <main className="w-full h-full p-10 pl-12">
      <div className="max-w-full grid place-items-center xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-x-3 gap-y-4">
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
        <VideoBox />
        <VideoBox />
      </div>
    </main>
  );
};

export default Content;
