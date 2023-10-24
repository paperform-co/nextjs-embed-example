import PaperformInlineEmbed from "./paperform-inline-embed";
import PaperformPopupEmbed from "./paperform-popup-embed";

export default function Home() {
  const slug = "edk2keqq";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="mb-8 font-bold text-2xl">Here is a popup embed</h2>
      <PaperformPopupEmbed slug={slug} />

      <h2 className="mt-16 mb-8 font-bold text-2xl">Here is an inline embed</h2>
      <PaperformInlineEmbed slug={slug} />
    </main>
  );
}
