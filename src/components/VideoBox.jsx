import MoreVertIcon from "@mui/icons-material/MoreVert";

const VideoBox = () => {
  return (
    <div className="w-full md:w-[320px] md:h-72 lg:w-[340px] lg:h-72">
      <div className="container group">
        <img
          src="https://www.cumhuriyet.com.tr/Archive/2020/11/17/180930941-04dead3-superjumbo.jpg"
          alt="Video"
          className="w-full max-h-48 md:h-52 rounded-xl cursor-pointer"
        />
        <div className="w-full flex justify-between gap-2 mt-4">
          <div className="flex gap-2">
            <img
              src="https://yt3.ggpht.com/yti/AHXOFjVUv9n4xuGAVyc0I0O3bdikXSIxvtL-uQ9lBA=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="Neşathan Öztürk"
              className="max-h-6 max-w-6 md:max-w-8 md:max-h-8 rounded-full cursor-pointer"
            />
            <div>
              <h1 className="text-[0.8rem] sm:text-sm md:text-base text-white font-semibold">
                (TWD) Here's Negan | Choice
              </h1>
              <p className="text-[#b4b4b4] text-[0.6rem] sm:text-xs md:text-sm">
                PyroSync
              </p>
              <p className="text-[#b4b4b4] text-[0.6rem] sm:text-xs md:text-sm">
                70 B görüntüleme - 2 yıl önce
              </p>
            </div>
          </div>
          <div>
            <span className="hidden group-hover:block">
              <MoreVertIcon className="text-white cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBox;
