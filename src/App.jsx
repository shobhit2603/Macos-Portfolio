import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useEffect } from 'react';

import { Navbar, Dock, Home } from '@components';
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos, Settings } from '@windows';
import useWallpaperStore from '@store/wallpaper';

gsap.registerPlugin(Draggable);

const App = () => {
  useEffect(() => {
    // Set initial wallpaper
    document.body.style.backgroundImage = `url(${useWallpaperStore.getState().currentWallpaper})`;

    // Subscribe imperatively to avoid re-rendering the whole App tree
    const unsubscribe = useWallpaperStore.subscribe((state) => {
      document.body.style.backgroundImage = `url(${state.currentWallpaper})`;
    });

    return unsubscribe;
  }, []);

  return (
    <main>
      {/* Components */}
      <Navbar />
      <Dock />
      <Home />

      {/* Windows */}
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
      <Settings />
    </main>
  )
}

export default App;