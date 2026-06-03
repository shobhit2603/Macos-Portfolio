import { locations } from "@constants/index"
import { useGSAP } from "@gsap/react";
import useLocationStore from "@store/location";
import useWindowStore from "@store/window";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";
import { useState, useEffect } from "react";
import Welcome from "./Welcome";

const projects = locations.work?.children ?? [];

const Home = () => {
    const { setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore();
    const [menuPosition, setMenuPosition] = useState(null);

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow("finder");
    }

    const handleContextMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setMenuPosition({ x: e.clientX, y: e.clientY });
    };

    const closeMenu = () => setMenuPosition(null);

    useEffect(() => {
        if (!menuPosition) return;
        window.addEventListener('click', closeMenu);
        window.addEventListener('contextmenu', closeMenu);
        return () => {
            window.removeEventListener('click', closeMenu);
            window.removeEventListener('contextmenu', closeMenu);
        };
    }, [menuPosition]);

    useGSAP(() => {
        Draggable.create(".folder");
    }, [])

    return (
        <section id="home" onContextMenu={handleContextMenu}>
            <Welcome />
            
            <ul>
                {projects.map((project) => (
                    <li
                        key={project.id}
                        className={clsx("group folder", project.windowPosition)}
                        onClick={() => handleOpenProjectFinder(project)}
                    >
                        <img src="/images/folder.png" alt={project.name} />
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>

            {menuPosition && (
                <div 
                    className="desktop-context-menu" 
                    style={{ top: menuPosition.y, left: menuPosition.x }}
                >
                    <button onClick={() => openWindow('settings')}>
                        Change Wallpaper...
                    </button>
                    <div className="menu-separator" />
                    <button onClick={() => openWindow('terminal')}>
                        Show Tech Stack
                    </button>
                    <button onClick={() => openWindow('contact')}>
                        Contact Me
                    </button>
                    <button onClick={() => openWindow('resume')}>
                        View Resume
                    </button>
                </div>
            )}
        </section>
    )
}

export default Home