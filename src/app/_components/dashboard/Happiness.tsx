"use client";
import { Spotify } from "@/components/Spoify";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function HappinessMeter() {
  const { isLoaded, isSignedIn, user } = useUser();

  const [text, setText] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [emotion, setEmotion] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const handleAnalyze = async (inputText: string) => {
    if (!inputText.trim()) return;

    setLoading(true);

    const res = await fetch("/api/happiness", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: inputText }),
    });

    const data = await res.json();
    setScore(data.happiness);
    setEmotion(data.dominantEmotion);
    setLoading(false);
  };

  const placeholders = [
    "How was your day today?",
    "What are the biggest challenges you are facing right now?",
    "What made you smile today?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleAnalyze(text);
  };

  const getSpotifyLink = (score: number, emotion: string) => {
    if (score >= 75) {
      return "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH";
    }

    if (score >= 40) {
      return "https://open.spotify.com/track/3KkXRkHbMCARz0aVfEt68P";
    }

    if (score < 40) {
      return "https://open.spotify.com/track/6kkwzB6hXLIONkEk9JciA6";
    }

    return "https://open.spotify.com/track/7ouMYWpwJ422jRcDASZB7P";
  };

  const spotifyLink =
    score !== null && emotion !== null ? getSpotifyLink(score, emotion) : null;

  return (
    <div>
      <div className="p-6 md:px-10 flex flex-col items-center mt-6 rounded-2xl shadow-xl bg-zinc-700 bg-[url('/dashboard-bg.jpg')] bg-cover bg-center bg-blend-overlay">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Greetings{" "}
            <span className="text-emerald-300 capitalize">
              {user.firstName}
            </span>
            ,
          </h1>
          <div className="text-lg text-white mb-6">
            <h2>Welcome to the Happiness Meter!</h2>
            <p>
              Feel free to share your pain and joy. Because a Happy Teacher
              creates a happy classroom!
            </p>
          </div>
        </div>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        {/* Optional Separate Button */}
        <button
          onClick={() => handleAnalyze(text)}
          disabled={loading}
          className="mt-4 text-white font-bold px-6 py-2 rounded-lg backdrop-blur-2xl bg-zinc-950 hover:bg-emerald-300 hover:text-zinc-950 disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
        {score !== null && (
          <div className="mt-6 w-full max-w-md">
            <h2 className="text-xl font-semibold text-white mb-3 text-center">
              Today&apos;s Happiness Score
            </h2>
            <div className="flex justify-center mb-2">
              <span className="text-4xl font-bold text-emerald-400">
                {score}%
              </span>
            </div>
            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-400 transition-all duration-500"
                style={{ width: `${score}%` }}
              />
            </div>
          </div>
        )}
      </div>
      <div className="mt-8 flex justify-center w-full flex-col gap-2">
        <div>
          {spotifyLink && <h1 className="text-2xl font-bold">You Might Want to Listen to</h1>}
        </div>
        <div className="">
          {spotifyLink && <Spotify wide link={spotifyLink} />}
        </div>
      </div>
    </div>
  );
}
