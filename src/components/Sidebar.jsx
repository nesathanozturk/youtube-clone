import SidebarBox from "./SidebarBox";

const Sidebar = () => {
  return (
    <aside className="bg-youtube hidden xs:block xs:top-20 xs:z-50 xs:fixed xs:left-0 xs:bottom-0 xs:w-[80px] xs:h-full 2xl:left-5 2xl:top-28 2xl:pl-4">
      <SidebarBox />
    </aside>
  );
};

export default Sidebar;
