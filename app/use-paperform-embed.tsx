"use client";

import { useEffect } from "react";

type EmbedType = "inline" | "popup" | "takeover";

interface UsePaperformEmbedOptions {
  slug: string;
  type: EmbedType;
}

export interface UsePaperformEmbedReturn {
  props: Record<string, string | number>;
}

export default function usePaperformEmbed(
  options: UsePaperformEmbedOptions
): UsePaperformEmbedReturn {
  const { slug } = options;

  useEffect(() => {
    const src = "https://paperform.co/__embed.min.js";
    const existingScript = document.querySelector(`script[src="${src}"]`);

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = src;
      document.body.appendChild(script);
    }
  }, []);

  const props = {
    ["data-paperform-id"]: slug,
  };

  if (options.type === "popup") {
    return {
      props: {
        ...props,
        ["data-popup-button"]: 1,
      },
    };
  }

  if (options.type === "takeover") {
    return {
      props: {
        ...props,
        ["data-takeover"]: 1,
      },
    };
  }

  return { props };
}
