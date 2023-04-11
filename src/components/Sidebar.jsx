import SidebarBox from "./SidebarBox";

const Sidebar = () => {
  return (
    <aside className="bg-youtube hidden xs:block xs:w-[80px] xs:h-full 2xl:w-[15%]">
      <div className="container">
        <SidebarBox />
        <div className="hidden 2xl:flex text-[0.8rem] text-[#a4a4a4] font-medium flex-wrap gap-1 mb-4 p-1">
          <a href="https://about.youtube/">Hakkında</a>
          <a href="https://blog.youtube/">Basın</a>
          <a href="https://www.youtube.com/howyoutubeworks/policies/copyright/">
            Telif hakkı
          </a>
          <a href="https://www.youtube.com/t/contact_us/">Bize ulaşın</a>
          <a href="https://www.youtube.com/creators/">İçerik Üreticiler</a>
          <a href="https://www.youtube.com/ads/">Reklam verme</a>
          <a href="https://developers.google.com/youtube?hl=tr">
            Geliştiriciler
          </a>
        </div>
        <div className="hidden 2xl:flex text-[0.8rem] text-[#a4a4a4] font-medium flex-wrap gap-1 mb-4 p-1">
          <a href="https://www.youtube.com/t/terms">Şartlar</a>
          <a href="https://policies.google.com/u/1/privacy?hl=tr">Gizlilik</a>
          <br />
          <a href="https://www.youtube.com/howyoutubeworks/policies/community-guidelines/">
            Politika ve Güvenlik
          </a>
          <a href="https://www.youtube.com/howyoutubeworks/?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen">
            YouTube Nasıl Çalışıyor?
          </a>
          <a href="https://www.youtube.com/new">Yeni özellikleri deneyin</a>
        </div>
        <p className="hidden 2xl:block text-[0.8rem] text-[#717171]">
          &copy; 2023 Google LLC
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
