export default function Menu() {
  const path = window.location.pathname;
  return (
    <>
      
      <div className="menu_box">
        <div className="menu_title">Horror playbox <span>Choose movie below</span></div>

        <div className="menu_elements">
          <a href="/shinning" className="title_btn shinning">
            Shinning
          </a>
          <a href="/thing" className="title_btn thing">
            The Thing
          </a>
          <a href="/ring" className="title_btn ring">
            The Ring
          </a>
          <a href="/alien" className="title_btn alien">
            Alien
          </a>
          <a href="/exorcist" className="title_btn exorcist">
            Exorcist
          </a>
          <a href="/juon" className="title_btn exorcist">
            Juon
          </a>
          <a href="/anaconda" className="title_btn anaconda">
            Or play Anaconda The Game 
          </a>
        </div>
       </div>

       <div className="submenu_author">
          <a href="/author" className="title_btn author">
            About author
          </a>
        </div>
    </>
  );
}
