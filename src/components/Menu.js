export default function Menu() {

  const ReloadHandleBtn = (e) => 
  {
    e.preventDefault();
    window.location.reload();
  }
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
            Play Anaconda The Game 
          </a>
        </div>
       </div>

       <div className="tv_box">
        <button onClick={ReloadHandleBtn} className="btn_one"> Reload Animation</button>
        <a href="/" className="btn_two"> Turn Off</a>

        <div href="/" className="ab--primary"/>
        
      

        <div className="element el1"></div>
        <div className="element el2"></div>
        <div className="element el3"></div>
        <div className="element el4"></div>
        <div className="element el5"></div>
        <div className="element el6"></div>
        <div className="element el7"></div>
        <div className="element el8"></div>
        <div className="element el9"></div>
        <div className="element el10"></div>
        <div className="element el11"></div>
        <div className="element el12"></div>

       </div>

       <div className="submenu_author">
          <a href="/author" className="title_btn author">
            About author
          </a>
        </div>
    </>
  );
}
