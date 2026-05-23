type LiveProjectButtonProps = {
  href: string
}

function LiveProjectButton({ href }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-[0.24em] text-[#D7E2EA] transition-colors duration-300 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      View Project
    </a>
  )
}

export default LiveProjectButton
