"use client";

import { useState, useRef, useEffect } from "react";

interface Song {
  name: string;
  artist: string;
  album: string;
  cover: string;
  src: string; // TODO mp3 source
}

export default function MusicWindow() {
  // placeholder song list
  const songs: Song[] = [
    {
      name: "Midnight Sun",
      artist: "Zara Larsson",
      album: "Midnight Sun",
      cover: "/music_cover/midnight_sun.png",
      src: "/music_mp3/midnight_sun.mp3",
    },
    {
      name: "True Romance",
      artist: "Pinkpantheress",
      album: "Heaven Knows",
      cover: "/music_cover/true_romance.png",
      src: "/music_mp3/true_romance.mp3",
    },
    {
      name: "Radio",
      artist: "Bershy",
      album: "---",
      cover: "/music_cover/radio.jpg",
      src: "/music_mp3/radio.mp3",
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = songs[currentIndex];

  // play / pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // next / prev
  const nextSong = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  // update currentTime
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  };

  // reset time when song changes
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    if (isPlaying) audioRef.current.play();
  }, [currentIndex]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const progressPercent = audioRef.current
    ? (currentTime / audioRef.current.duration) * 100 || 0
    : 0;

  return (
    <div className="flex flex-col w-full h-full p-4 gap-6 overflow-y-auto">

      {/* song container */}
      <div className="flex gap-4 items-center">
        <div className="w-20 h-20 bg-gray-200 rounded-md shrink-0 overflow-hidden">
          <img
            src={currentSong.cover}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl" style={{ fontFamily: "var(--font-pixelify)" }}>
            {currentSong.name}
          </h2>
          <p className="text-sm text-gray-700" style={{ fontFamily: "var(--font-raleway)" }}>
            {currentSong.artist}
          </p>
          <p className="text-sm text-gray-500" style={{ fontFamily: "var(--font-raleway)" }}>
            {currentSong.album}
          </p>
          <p className="text-xs text-gray-400">
            {currentIndex + 1} / {songs.length}
          </p>
        </div>
      </div>

      {/* duration bar */}
      <div className="flex flex-col gap-1">
        <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-2 bg-blue-500 rounded-full"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(audioRef.current?.duration || 0)}</span>
        </div>
      </div>

      {/* buttons */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
          onClick={prevSong}
        >
          Prev
        </button>
        <button
          className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
          onClick={togglePlay}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
          onClick={nextSong}
        >
          Next
        </button>
      </div>


      {/* audio */}
      <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={nextSong}
      />
    </div>
  );
}
