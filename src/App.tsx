const ICONS = [
  { id: "about", title: "About Me", variant: "user" },
  { id: "projects", title: "My Projects", variant: "folder" },
  { id: "readme", title: "readme.txt", variant: "notepad" },
];

export default function App() {
  return (
    <div className="root">
      <div className="desktop">

        <div className="icons">
          <div className="icons">
            {ICONS.map((icon) => (
              <DesktopIcon key={icon.id} title={icon.title} variant={icon.variant} />
            ))}
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

interface DesktopIconProps {
  title: string;
  variant: string;
}

function DesktopIcon({ title, variant }: DesktopIconProps) {
  return (
    <div className="icon">
      <div className={`icon-img icon-img--${variant}`} />
      <span className="icon-label">{title}</span>
    </div>
  );
}