const VideoBox = () => {
  return (
    <div className="md:w-[320px] md:w-h-72 lg:w-[340px] lg:h-80">
      <div className="container">
        <img
          src="https://www.cumhuriyet.com.tr/Archive/2020/11/17/180930941-04dead3-superjumbo.jpg"
          alt="Video"
          className="w-full max-h-48 md:h-52 rounded-xl cursor-pointer"
        />
        <div className="w-full flex gap-2 mt-4">
          <div>
            <img
              src="https://yt3.ggpht.com/yti/AHXOFjVUv9n4xuGAVyc0I0O3bdikXSIxvtL-uQ9lBA=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="Neşathan Öztürk"
              className="h-6 w-6 md:w-8 md:h-8 rounded-full cursor-pointer"
            />
          </div>
          <div>
            <h1 className="text-xs sm:text-sm md:text-base text-white font-semibold">
              (TWD) Here's Negan | Choice
            </h1>
            <p className="text-[#b4b4b4] text-xs md:text-sm">PyroSync</p>
            <p className="text-[#b4b4b4] text-xs md:text-sm">
              70 B görüntüleme - 2 yıl önce
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBox;
