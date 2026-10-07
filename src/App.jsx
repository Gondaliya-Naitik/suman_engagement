import { useEffect, useRef, useState } from "react";
import { wedding } from "./config";
import Gate from "./components/Gate";
import PhotoFeedback from "./components/PhotoFeedback";
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
  // the photo question is asked before anything else ("" turns it off)
  const [asked, setAsked] = useState(() => Boolean(wedding.feedback?.question));
  const [autoOpen, setAutoOpen] = useState(false);
  const audioRef = useRef(null);

  // Lock scrolling while the opening gate is showing
  useEffect(() => {
    document.body.classList.toggle("locked", !opened);
    return () => document.body.classList.remove("locked");
  }, [opened]);

  // Start the song inside the very first tap/keypress (browsers only allow
  // audible playback from a real gesture) and retry until it actually begins.
  useEffect(() => {
    if (!wedding.music.src) return undefined;
    const kick = () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.volume = 1; // full sound
      audio
        .play()
        .then(() => {
          setMusicOn(true);
          window.removeEventListener("pointerdown", kick);
          window.removeEventListener("keydown", kick);
        })
        .catch(() => {});
    };
    window.addEventListener("pointerdown", kick);
    window.addEventListener("keydown", kick);
    return () => {
      window.removeEventListener("pointerdown", kick);
      window.removeEventListener("keydown", kick);
    };
  }, []);

  const playMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 1; // full sound
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
    <div className={`card${opened ? " is-open" : ""}`}>
      {wedding.music.src && (
        <audio ref={audioRef} src={wedding.music.src} loop preload="metadata" />
      )}

      {!opened && <Gate onOpen={handleOpen} autoOpen={autoOpen} />}

      {asked && (
        <PhotoFeedback
          onGood={() => {
            setAsked(false);
            setAutoOpen(true); // answered "Achhe" — open the card for them
          }}
        />
      )}

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
