"use client";

import usePaperformEmbed from "./use-paperform-embed";

export default function PaperformPopupEmbed({ slug }: { slug: string }) {
  const { props } = usePaperformEmbed({
    slug,
    type: "popup",
  });

  return (
    <button
      {...props}
      className="rounded-md border border-white px-3 py-2 hover:bg-white hover:text-black transition-colors"
    >
      Open popup
    </button>
  );
}
