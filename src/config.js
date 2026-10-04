// ============================================================
//  ENGAGEMENT INVITATION — CARD CONFIG
//  ------------------------------------------------------------
//  This is the ONLY file you need to edit to personalise the
//  card. Replace the sample data below with your own details.
//
//  Images : put your photos inside the "public/images" folder,
//           then reference them as "/images/your-file.jpg".
//  Music  : put your song inside "public/music" and set
//           music.src to "/music/your-song.mp3"
//           (leave "" to hide the music button).
// ============================================================

export const wedding = {
  // ---------- Envelope opening screen ----------
  envelope: {
    seal: "S & N", // initials on the wax seal
    hint: "Tap to open", // small hint text under the envelope
  },

  // ---------- Hero (Ganesh + names + date) ----------
  hero: {
    background: "/images/couple-animated.png", // shown soft-blurred behind the names
    ganesh: "/images/ganesh.png", // small Ganesh image at the top
    mantra: "॥ ॐ गं गणपतये नमो नमः ॥",
    kicker: "Celebrating the engagement of",
    dateLabel: "18 October 2026", // shown under the names
  },

  // ---------- Countdown ----------
  countdown: {
    heading: "Until the Celebration",
    date: "2026-10-18T19:00:00", // YYYY-MM-DDTHH:mm:ss — engagement date & time
    labels: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
  },

  // ---------- Story / poem block ----------
  story: {
    heading: "Two Hearts, One Promise",
    lines: [
      "Two hearts from different worlds,",
      "one promise to walk together forever.",
      "And so, the countdown to forever begins.",
    ],
  },

  // ---------- Couple + parents ----------
  couple: {
    photo: "/images/scene-night.png", // the two of you together (full-width photo)
    withText: "With",
    bride: {
      name: "Suman", // hero + couple section
      parents: "(D/O: Mr. Rajesh & Mrs. Sunita, G/D: Mr. Mohan & Late Smt. Kamla)",
      photo: "/images/bride.png",
    },
    groom: {
      name: "Naitik",
      parents: "(S/O: Mr. Mahesh & Mrs. Kavita, G/S: Late Shri Ramlal & Smt. Shanti)",
      photo: "/images/groom.png",
    },
  },

  // ---------- Events ----------
  // Copy one block below and edit it to add more functions.
  // "theme" is optional (a second dress-code line).
  events: {
    items: [
      {
        name: "Engagement & Ring Ceremony",
        img: "/images/event-engagement.png",
        date: "Sunday, 18 October 2026",
        time: "07:00 PM Onwards",
        venue: "Hotel Tulsi Icon, Surat",
        dress: "Glitz & Glam",
        theme: "",
      },
    ],
  },

  // ---------- Venue ----------
  venue: {
    name: "Hotel Tulsi Icon, Surat",
    address: "Lal Darwaja, Railway Station Road, Surat, Gujarat 395003",
    mapUrl: "https://maps.app.goo.gl/1DdjTYeeHFi59fxJ9", // exact pin shared by you
  },

  // ---------- Hearts & Horizons ----------
  hearts: {
    heading: "Hearts & Horizons",
    logo: "/images/logo.png",
    text: "Naitik, who begins every new journey with a smile, and Suman, who turns everyday moments into memories, now find their greatest joy in walking life's path together. With blessings and happy hearts, they begin their beautiful new chapter.",
  },

  // ---------- Blessings band ----------
  blessings: {
    video: "/videos/blessings.mp4", // loops silently above the blessing lines
    image: "", // optional still photo (used only when "video" is empty)
    text: "With the blessings of our elders and the love of our families, as we step into this beautiful new chapter, having you beside us makes it complete.",
    calendarLabel: "Add to Calendar",
    calendarTitle: "Suman & Naitik — Engagement",
  },

  // ---------- Sharing the joy ----------
  joy: {
    heading: "Sharing The Joy",
    host: "Mr. Rohit Patel",
    hostNote: "With Best Compliments",
    compliments: [
      "Mr. Mukesh & Mrs. Aakanksha",
      "Mr. Durgesh & Mrs. Sangeeta",
      "Mr. Janmay",
      "Mr. Rishabh",
    ],
  },

  // ---------- Assistance & coordination ----------
  contacts: {
    heading: "Assistance & Coordination",
    note: "Presents In Blessings Only.",
    people: [
      { name: "Rahul", phone: "+91 90000 00001" },
      { name: "Meera", phone: "+91 90000 00002" },
      { name: "Kunal", phone: "+91 90000 00003" },
    ],
  },

  // ---------- Footer ----------
  footer: {
    names: "Suman & Naitik",
    dateLine: "18-10-2026",
    craftedBy: "Crafted With Love",
    craftedUrl: "", // optional link (Instagram etc.)
  },

  // ---------- Background music ----------
  music: {
    src: "/audio/aaj-sajeya.mp3", // plays at full volume once the envelope is tapped
  },
};

// ============================================================
//  Helpers — no need to edit below this line
// ============================================================

/** Google Maps link for the venue (auto-search when mapUrl is empty). */
export function getMapUrl() {
  const { venue } = wedding;
  if (venue.mapUrl) return venue.mapUrl;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    venue.name
  )}`;
}

/** "Add to Calendar" Google Calendar link. */
export function getCalendarUrl() {
  const start = new Date(wedding.countdown.date);
  const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);
  const pad = (n) => String(n).padStart(2, "0");
  const fmt = (d) =>
    `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(
      d.getHours()
    )}${pad(d.getMinutes())}00`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: wedding.blessings.calendarTitle,
    dates: `${fmt(start)}/${fmt(end)}`,
    details: `We would love to have you with us. — ${wedding.couple.bride.name} & ${wedding.couple.groom.name}`,
    location: wedding.venue.name,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export default wedding;
