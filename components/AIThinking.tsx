"use client";

import { useEffect, useState } from "react";

const messages = [
  "Analyzing industrial data pipelines...",
  "Building workflow optimization model...",
  "Generating predictive analytics...",
  "Deploying AI-enhanced software architecture...",
  "Ensuring high availability & reliability...",
  "Creating efficient intelligent solutions...",
];

export default function AIThinking() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let interval = setInterval(() => {
      setDisplayed(messages[index]);
      setIndex((i) => (i + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-mpx-aqua text-xl mt-10 opacity-80">
      <span className="text-mpx-blue">AI ></span> {displayed}
    </div>
  );
}
