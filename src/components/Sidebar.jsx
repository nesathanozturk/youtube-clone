import SidebarBox from "./SidebarBox";

const Sidebar = () => {
  return (
    <aside className="bg-youtube hidden xs:block xs:top-20 xs:z-50 xs:fixed xs:left-0 bottom-0 xs:w-[80px] xs:h-full 2xl:w-[15%]">
      <SidebarBox />
    </aside>
  );
};

export default Sidebar;
