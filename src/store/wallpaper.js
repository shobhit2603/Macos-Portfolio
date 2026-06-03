import { create } from 'zustand';

const useWallpaperStore = create((set) => ({
    currentWallpaper: localStorage.getItem('wallpaper') || '/images/wallpaper4.png',
    setWallpaper: (wallpaperPath) => set(() => {
        localStorage.setItem('wallpaper', wallpaperPath);
        return { currentWallpaper: wallpaperPath };
    }),
}));

export default useWallpaperStore;
