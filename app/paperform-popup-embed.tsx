"use client";

import usePaperformEmbed, {
  UsePaperformEmbedOptions,
} from "./use-paperform-embed";

export default function PaperformPopupEmbed(
  props: Omit<UsePaperformEmbedOptions, "type">
) {
  const { props: embedProps } = usePaperformEmbed({
    ...props,
    type: "popup",
  });

  return (
    <button
      {...embedProps}
      className="rounded-md border border-white px-3 py-2 hover:bg-white hover:text-black transition-colors"
    >
      Open popup
    </button>
  );
}
