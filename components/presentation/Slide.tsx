import Image from "next/image";
import type { DeckSlide } from "@/content/seoOsDeck";

export default function Slide({ slide }: { slide: DeckSlide }) {
  return (
    <section className="rounded-2xl border p-6 md:p-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl md:text-2xl font-semibold">{slide.title}</h2>
        {slide.subtitle && <p className="text-sm md:text-base opacity-75">{slide.subtitle}</p>}
      </div>

      <div className="mt-5 space-y-4">
        {slide.body.map((p, i) => (
          <p key={i} className="leading-relaxed opacity-90">
            {p}
          </p>
        ))}

        {slide.bullets?.length ? (
          <ul className="mt-4 list-disc pl-6 space-y-1 opacity-90">
            {slide.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        ) : null}

        {slide.imageSrc ? (
          <div className="mt-6 overflow-hidden rounded-xl border">
            <Image
              src={slide.imageSrc}
              alt={slide.imageAlt ?? slide.title}
              width={1600}
              height={900}
              className="h-auto w-full"
              unoptimized
              priority={slide.id === "traditional-seo-problem"}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}


