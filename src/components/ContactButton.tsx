type ContactButtonProps = {
  className?: string
}

const CONTACT_HREF = 'mailto:adelzahid01@gmail.com'

function ContactButton({ className = '' }: ContactButtonProps) {
  return (
    <a
      href={CONTACT_HREF}
      className={`inline-flex rounded-full border-2 border-white/90 bg-[linear-gradient(123deg,#18011F_7%,#B600A8_37%,#7621B0_72%,#BE4C00_100%)] px-8 py-3 text-xs font-medium uppercase tracking-[0.22em] text-white shadow-[inset_4px_4px_12px_#7721B1,0px_4px_4px_rgba(181,1,167,0.25)] outline outline-2 outline-white -outline-offset-[3px] transition-opacity duration-300 hover:opacity-90 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
    >
      Contact Me
    </a>
  )
}

export default ContactButton
