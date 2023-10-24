"use client";

import { useEffect } from "react";

type EmbedType = "inline" | "popup" | "takeover";

export interface UsePaperformEmbedOptions {
  slug: string;
  type: EmbedType;
  // Must be provided if you are not in the default Paperform region
  // e.g. "au.paperform.co"
  paperformDomain?: string;
}

export interface UsePaperformEmbedReturn {
  props: Record<string, string | number>;
}

export default function usePaperformEmbed(
  options: UsePaperformEmbedOptions
): UsePaperformEmbedReturn {
  const { slug, paperformDomain } = options;

  useEffect(() => {
    const src = "https://paperform.co/__embed.min.js";
    const existingScript = document.querySelector(`script[src="${src}"]`);

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = src;
      document.body.appendChild(script);
    }
  }, []);

  const props: UsePaperformEmbedReturn["props"] = {
    ["data-paperform-id"]: slug,
  };

  if (paperformDomain) {
    props["data-url"] = `https://${slug}.${paperformDomain}`;
  }

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
