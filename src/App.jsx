import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

import { Navbar, Welcome, Dock } from '@components';
import { Terminal, Safari, Resume, Finder, Text, Image } from '@windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      {/* Components */}
      <Navbar />
      <Welcome />
      <Dock />

      {/* Windows */}
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
    </main>
  )
}

export default App;