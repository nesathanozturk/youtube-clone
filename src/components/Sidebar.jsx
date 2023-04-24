import SidebarBox from "./SidebarBox";

const Sidebar = () => {
  return (
    <aside className="bg-youtube hidden xs:block xs:top-20 xs:z-50 xs:fixed xs:left-0 xs:bottom-0 xs:w-[80px] xs:h-full 2xl:pl-7">
      <SidebarBox />
    </aside>
  );
};

export default Sidebar;
