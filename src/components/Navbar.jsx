import dayjs from "dayjs"
import { navLinks, navIcons } from "@constants"
import useWindowStore from "@store/window"
import { useState, useEffect } from "react"

const Navbar = () => {
    const { openWindow } = useWindowStore();
    const [appleMenuOpen, setAppleMenuOpen] = useState(false);

    useEffect(() => {
        if (!appleMenuOpen) return;
        const closeMenu = () => setAppleMenuOpen(false);
        window.addEventListener('click', closeMenu);
        return () => window.removeEventListener('click', closeMenu);
    }, [appleMenuOpen]);

    return (
        <nav className="relative z-[9999]">
            <div className="relative flex items-center">
                <img 
                    src="/images/logo.svg" 
                    alt="logo" 
                    className="cursor-pointer hover:opacity-80 transition-opacity mr-3"
                    onClick={(e) => { e.stopPropagation(); setAppleMenuOpen(!appleMenuOpen); }}
                />
                {appleMenuOpen && (
                    <div className="apple-menu">
                        <button onClick={() => openWindow('settings')}>
                            System Settings...
                        </button>
                        <div className="menu-separator" />
                        <button onClick={() => openWindow('terminal')}>
                            Terminal (Tech Stack)
                        </button>
                        <button onClick={() => openWindow('safari')}>
                            Safari (Developer Blog)
                        </button>
                        <button onClick={() => openWindow('resume')}>
                            Resume.pdf
                        </button>
                    </div>
                )}
                <p className="font-bold select-none cursor-default">Shobhit's Portfolio</p>
                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img src={img} className="icon-hover" alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>

                <time>{dayjs().format('ddd MMM D h:mm A')}</time>
            </div>
        </nav>
    )
}

export default Navbar