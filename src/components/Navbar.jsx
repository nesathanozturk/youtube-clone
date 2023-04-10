import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Navbar = () => {
  return (
    <nav className="px-6">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-center items-center">
          <span className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-youtube-hover">
            <MenuIcon
              sx={{ fontSize: "26px", color: "white", cursor: "pointer" }}
            />
          </span>
          <a href="https://youtube.com" title="YouTube Ana Sayfası">
            <img src={logo} alt="YouTube" width={150} height={170} />
          </a>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="flex justify-center items-center w-[600px] ">
            <input
              type="text"
              className="bg-[#121212] p-2 rounded-l-full w-full text-white pl-5 focus:outline-none border border-[#303030] active:border focus:border-blue-600 placeholder:text-[#808080]"
              placeholder="Ara"
            />
            <span className="w-[4rem] p-[0.57rem] flex justify-center items-center rounded-r-full bg-[#222222] cursor-pointer">
              <SearchIcon className="cursor-pointer text-[#f4f4f4]" />
            </span>
          </div>
          <span className="w-10 h-10 flex justify-center items-center rounded-full bg-[#191919] text-white cursor-pointer hover:bg-youtube-hover transition-all">
            <MicIcon size={20} />
          </span>
        </div>
        <div className="flex justify-center items-center gap-5">
          <span className="w-10 h-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-youtube-hover">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "24px",
                height: "24px",
              }}
            >
              <g fill="#fff">
                <path d="M18,8.83V5H2v14h16v-5.83L22,15V7L18,8.83z M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z"></path>
              </g>
            </svg>
          </span>
          <span className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-youtube-hover">
            <NotificationsNoneIcon
              size={20}
              className="text-white cursor-pointer"
            />
          </span>
          <img
            src="https://yt3.ggpht.com/yti/AHXOFjVUv9n4xuGAVyc0I0O3bdikXSIxvtL-uQ9lBA=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="Neşathan Öztürk"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
