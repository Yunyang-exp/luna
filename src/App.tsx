export default function App() {
  return (
    <div className="root">
      <div className="desktop">

        <div className="icons">
          <div className="icon">
            <div className="icon-img icon-img--user" />
            <span className="icon-label">About Me</span>
          </div>

          <div className="icon">
            <div className="icon-img icon-img--folder" />
            <span className="icon-label">My Projects</span>
          </div>

          <div className="icon">
            <div className="icon-img icon-img--notepad" />
            <span className="icon-label">readme.txt</span>
          </div>
        </div>        
        <div
          className="window"
          style={{ left: 160, top: 90, width: 420, height: 280 }}
        >
          <div className="titlebar">
            <div className="titlebar-icon" />
            <span className="titlebar-text">About Me</span>
            <div className="titlebar-buttons">
              <button type="button" className="tb-btn tb-btn--min" aria-label="Minimize" />
              <button type="button" className="tb-btn tb-btn--max" aria-label="Maximize" />
              <button type="button" className="tb-btn tb-btn--close" aria-label="Close" />
            </div>
          </div>

          <div className="window-body">
            <h1>Your Name</h1>
            <p>Two or three sentences about who you are.</p>
          </div>
        </div>
      </div>
            <div className="taskbar">
        <button type="button" className="start">
          <span className="start-flag" />
          start
        </button>
        <div className="taskbar-items"></div>
        <div className="tray"><span>11:45</span></div>
      </div>
    </div>
  );
}