import MoreVertIcon from "@mui/icons-material/MoreVert";

const VideoBox = () => {
  return (
    <div className="w-full md:max-w-[320px] md:max-h-72 lg:max-w-[340px] 2xl:w-[85%] lg:max-h-72">
      <div className="container group">
        <img
          src="https://i.ytimg.com/vi/yKNxeF4KMsY/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC6cwBse6xhHEeiEzdadIsABYG4Xg"
          alt="Coldplay - Yellow (Official Video)"
          className="w-full max-h-48 md:max-h-52 rounded-xl cursor-pointer"
        />
        <div className="w-full flex justify-between gap-2 mt-4">
          <div className="flex gap-2">
            <img
              src="https://yt3.ggpht.com/nCMHKdzJCDlE5uX_9HplknQdYgrKEs3yZMSQNx2yYs8gRA05NJAZQAe8TMNpna_EEIaKx6FR=s48-c-k-c0x00ffffff-no-nd-rj"
              alt="Coldplay"
              className="max-h-6 max-w-6 md:max-w-8 md:max-h-8 rounded-full cursor-pointer"
            />
            <div>
              <h1 className="text-[0.8rem] sm:text-sm md:text-base text-white font-semibold">
                Coldplay - Yellow
              </h1>
              <p className="text-[#b4b4b4] text-[0.6rem] sm:text-xs md:text-sm">
                Coldplay
              </p>
              <p className="text-[#b4b4b4] text-[0.6rem] sm:text-xs md:text-sm">
                864 Mn görüntüleme 11 yıl önce
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
