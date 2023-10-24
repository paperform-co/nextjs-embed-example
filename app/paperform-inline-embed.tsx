"use client";

import usePaperformEmbed, {
  UsePaperformEmbedOptions,
} from "./use-paperform-embed";

export default function PaperformInlineEmbed(
  props: Omit<UsePaperformEmbedOptions, "type">
) {
  const { props: embedProps } = usePaperformEmbed({
    ...props,
    type: "inline",
  });

  return <div {...embedProps} className="w-full" />;
}
