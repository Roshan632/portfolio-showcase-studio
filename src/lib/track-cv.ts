// Lightweight client-side tracking for CV downloads.
// Stores a local count, dispatches a window CustomEvent, and forwards to
// any analytics globals that happen to be present (gtag, plausible, posthog,
// umami, fathom). Safe no-op when none are loaded.

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  plausible?: (event: string, opts?: { props?: Record<string, unknown> }) => void;
  posthog?: { capture: (event: string, props?: Record<string, unknown>) => void };
  umami?: { track: (event: string, props?: Record<string, unknown>) => void };
  fathom?: { trackEvent: (event: string) => void };
};

const STORAGE_KEY = "cv_download_count";

export function trackCvDownload(source: string = "unknown") {
  if (typeof window === "undefined") return;

  const w = window as AnalyticsWindow;
  const payload = {
    source,
    file: "alex-dev-cv.pdf",
    timestamp: new Date().toISOString(),
  };

  // Local counter (handy during dev, visible in DevTools → Application → Local Storage)
  try {
    const next = (Number(localStorage.getItem(STORAGE_KEY)) || 0) + 1;
    localStorage.setItem(STORAGE_KEY, String(next));
  } catch {
    // ignore quota / privacy-mode errors
  }

  // Custom event other code can listen to: window.addEventListener('cv:download', ...)
  window.dispatchEvent(new CustomEvent("cv:download", { detail: payload }));

  // Forward to whichever analytics provider is on the page.
  try {
    w.gtag?.("event", "cv_download", payload);
    w.plausible?.("CV Download", { props: payload });
    w.posthog?.capture("cv_download", payload);
    w.umami?.track("cv_download", payload);
    w.fathom?.trackEvent("CV Download");
  } catch {
    // never break the download because of analytics
  }

  // Always log so it's visible in dev without a provider configured.
  console.info("[analytics] cv_download", payload);
}

export function getCvDownloadCount(): number {
  if (typeof window === "undefined") return 0;
  try {
    return Number(localStorage.getItem(STORAGE_KEY)) || 0;
  } catch {
    return 0;
  }
}