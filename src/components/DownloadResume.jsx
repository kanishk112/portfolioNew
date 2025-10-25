import React, { useEffect, useState } from "react";

const BASE = import.meta.env.BASE_URL;

export default function DownloadResume({
  label = "Download Resume",
  path = `${BASE}assets/kanishkSharda.pdf`,
}) {
  const [loading, setLoading] = useState(false);
  const [supportsDownload, setSupportsDownload] = useState(true);

  useEffect(() => {
    // Feature-detect anchor download support (basic)
    try {
      const a = document.createElement("a");
      setSupportsDownload("download" in a);
    } catch {
      setSupportsDownload(false);
    }
  }, []);

  async function handleProgrammaticDownload() {
    setLoading(true);
    try {
      const res = await fetch(path, { cache: "no-store" });
      if (!res.ok) throw new Error("Network error");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = path.split("/").pop();
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed", err);
    } finally {
      setLoading(false);
    }
  }

  // If browser supports anchor[download], render a single <a>.
  // Otherwise render a single <button> that triggers the blob download.
  if (supportsDownload) {
    return (
      <a
        href={path}
        download
        className="inline-flex items-center px-4 py-2 bg-midnight text-white rounded hover:opacity-90"
        aria-label={label}
      >
        {loading ? "Preparing..." : label}
      </a>
    );
  }

  return (
    <button
      onClick={handleProgrammaticDownload}
      disabled={loading}
      className="inline-flex items-center px-4 py-2 bg-midnight text-white rounded hover:opacity-90"
      aria-label={label}
    >
      {loading ? "Downloading…" : label}
    </button>
  );
}