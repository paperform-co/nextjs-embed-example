"use client";

import usePaperformEmbed from "./use-paperform-embed";

export default function PaperformInlineEmbed({ slug }: { slug: string }) {
  const { props } = usePaperformEmbed({
    slug,
    type: "inline",
  });

  return <div {...props} className="w-full" />;
}
