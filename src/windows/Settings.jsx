import WindowControls from "@components/WindowControls";
import WindowWrapper from "@hoc/WindowWrapper";
import { WALLPAPERS } from "@constants";
import useWallpaperStore from "@store/wallpaper";
import { Palette, Wallpaper, Monitor } from "lucide-react";

const Settings = () => {
    const { currentWallpaper, setWallpaper } = useWallpaperStore();

    return (
        <>
            <div id="window-header">
                <WindowControls target="settings" />
                <h2>System Settings</h2>
            </div>

            <div className="settings-container">
                <div className="sidebar">
                    <div className="profile">
                        <img src="/images/shobhit.jpg" alt="Shobhit Shrivastava" />
                        <div>
                            <p className="font-semibold text-xs text-gray-200">Shobhit Shrivastava</p>
                            <p className="text-[10px] text-gray-500">Apple ID</p>
                        </div>
                    </div>

                    <ul>
                        <li className="inactive">
                            <Palette size={16} />
                            <p>Appearance</p>
                        </li>
                        <li className="active">
                            <Wallpaper size={16} />
                            <p>Wallpaper</p>
                        </li>
                        <li className="inactive">
                            <Monitor size={16} />
                            <p>Displays</p>
                        </li>
                    </ul>
                </div>

                <div className="content-area">
                    <h3>Desktop & Screensaver</h3>
                    <div className="wallpaper-grid">
                        {WALLPAPERS.map((wp) => (
                            <div 
                                key={wp.id} 
                                className="wallpaper-card"
                                onClick={() => setWallpaper(wp.path)}
                            >
                                <div className={`thumbnail-container ${currentWallpaper === wp.path ? 'active' : ''}`}>
                                    <img src={wp.path} alt={wp.name} decoding="async" loading="lazy" />
                                </div>
                                <p>{wp.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

const SettingsWindow = WindowWrapper(Settings, 'settings');

export default SettingsWindow;
