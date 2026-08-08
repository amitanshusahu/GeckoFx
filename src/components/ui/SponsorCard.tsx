import { ArrowUpRightIcon } from "@phosphor-icons/react";

export default function SponsorCard() {
  return (
    <div className="flex flex-col gap-2">
      <div className="border border-line border-dashed px-4 py-2 w-full flex items-center justify-between gap-4">
        <span className="text-xs text-secondary">cli docs</span>
        <ArrowUpRightIcon size={14} className="text-neutral-400" />
      </div>
      <div className="border border-line border-dashed px-4 py-2 w-full flex items-center justify-between gap-4">
        <span className="text-xs text-secondary">npx geckofx skill</span>
        <ArrowUpRightIcon size={14} className="text-neutral-400" />
      </div>

      {/* <div className="border border-line border-dashed px-4 py-2 w-full text-xs font-mono flex items-center mt-2">
        by
        <a href="https://x.com/geckostack/" target="_blank" rel="noopener noreferrer" className="ml-1 text-secondary hover:text-secondary/80 transition-all duration-300">
          @geckostack
        </a>
      </div> */}
    </div>
  )
}