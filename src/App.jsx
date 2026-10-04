import { useEffect, useRef, useState } from "react";
import { wedding } from "./config";
import Envelope from "./components/Envelope";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Story from "./components/Story";
import Couple from "./components/Couple";
import Events from "./components/Events";
import Venue from "./components/Venue";
import Hearts from "./components/Hearts";
import Blessings from "./components/Blessings";
import Joy from "./components/Joy";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import MusicToggle from "./components/MusicToggle";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  // Lock scrolling while the envelope is showing
  useEffect(() => {
    document.body.classList.toggle("locked", !opened);
    return () => document.body.classList.remove("locked");
  }, [opened]);

  const playMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio
      .play()
      .then(() => setMusicOn(true))
      .catch(() => setMusicOn(false));
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (musicOn) {
      audio.pause();
      setMusicOn(false);
    } else {
      playMusic();
    }
  };

  const handleOpen = () => {
    playMusic();
    window.scrollTo({ top: 0, behavior: "auto" });
    setOpened(true);
  };

  return (
    <div className="card">
      {wedding.music.src && (
        <audio ref={audioRef} src={wedding.music.src} loop preload="metadata" />
      )}

      {!opened && <Envelope onOpen={handleOpen} />}

      <main>
        <Hero />
        <Countdown />
        <Story />
        <Couple />
        <Events />
        <Venue />
        <Hearts />
        <Blessings />
        <Joy />
        <Contacts />
      </main>

      <Footer />

      {wedding.music.src && (
        <MusicToggle playing={musicOn} onToggle={toggleMusic} />
      )}
    </div>
  );
}
