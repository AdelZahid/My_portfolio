import { Facebook, Github, Linkedin, Mail } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import AnimatedText from './components/AnimatedText'
import ContactButton from './components/ContactButton'
import FadeIn from './components/FadeIn'
import LiveProjectButton from './components/LiveProjectButton'
import Magnet from './components/Magnet'

const portraitImage =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png'

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

const aboutText =
  "I am Adel Mohammad Zahid, a Bachelor of Science student in Computer Science and Engineering at Ahsanullah University of Science and Technology. I am passionate about software development, machine learning, and solving complex computational problems through innovative technology. My technical expertise spans C, C++, Java, Python, JavaScript, PHP, C#, Flutter, and the MERN Stack. I have hands-on experience in desktop applications, mobile apps, web platforms, and intelligent systems. My primary interests lie in Machine Learning, Deep Learning, Artificial Intelligence, and Data Science. I am always eager to learn new technologies, collaborate on innovative projects, and pursue opportunities that allow me to apply my skills in software engineering and research-driven development. Let's build something incredible together!"

const services = [
  {
    number: '01',
    title: 'Programming Languages',
    description:
      'C, C++, Java, Python, JavaScript, PHP, C# -- proficient in multiple languages for diverse application development from systems programming to web and mobile.',
  },
  {
    number: '02',
    title: 'Web Development',
    description:
      'Full-stack web development using MERN Stack, React.js, Next.js, Laravel, Tailwind CSS, and ASP.NET Core. Building scalable, responsive, and modern web applications.',
  },
  {
    number: '03',
    title: 'Mobile Development',
    description:
      'Cross-platform mobile application development using Flutter and Dart, integrated with Firebase for real-time data sync, authentication, and cloud services.',
  },
  {
    number: '04',
    title: 'Machine Learning & AI',
    description:
      'Machine Learning and Deep Learning projects using Python, focusing on data analysis, predictive modeling, intelligent decision-making systems, and AI-driven applications.',
  },
  {
    number: '05',
    title: 'Software Engineering',
    description:
      'Strong foundation in Data Structures and Algorithms, Object-Oriented Programming, database design, and software architecture for efficient, scalable solutions.',
  },
]

const projects = [
  {
    number: '01',
    name: 'Treasure Rush',
    category: 'C/C++ | iGraphics',
    description:
      'A captivating 2D adventure game developed during 1st year at Ahsanullah University. Players embark on treasure hunting missions with custom graphics designed using Canva, Illustrator, and Paint. Built with Visual Studio, C/C++, and the iGraphics Library.',
    href: 'https://github.com/AdelZahid/TreasurerushAdel',
    images: [
      'https://placehold.co/960x600/111111/D7E2EA?text=Treasure+Rush+01',
      'https://placehold.co/960x600/131313/D7E2EA?text=Treasure+Rush+02',
      'https://placehold.co/960x1200/171717/D7E2EA?text=Treasure+Rush+Map',
    ],
  },
  {
    number: '02',
    name: 'Smart Library System',
    category: 'Java | OOP | MySQL',
    description:
      'A comprehensive desktop application for modern library management. Features user registration, secure login, book catalog browsing, borrowing management, digital downloads, and an admin dashboard. Built with Java OOP principles and MySQL database integration.',
    href: 'https://github.com/AdelZahid',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    ],
  },
  {
    number: '03',
    name: 'Campus',
    category: 'MERN Stack | Real-Time Chat',
    description:
      'A full-stack social and academic networking platform connecting university students worldwide. Features Campus Feed, University/Club Pages, Digital Library, Helpdesk, and Real-Time Chat. Built with MongoDB, Express.js, React.js, and Node.js.',
    href: 'https://github.com/AdelZahid',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    ],
  },
  {
    number: '04',
    name: 'Nibaron Bazaar',
    category: 'Blockchain | ML | MERN Stack',
    description:
      'An innovative agricultural marketplace using Blockchain, Machine Learning, and NASA weather data. Features smart contracts for secure trading, crop availability predictions, weather forecasting, and direct farmer-to-buyer connections. Eliminates intermediaries and ensures fair pricing.',
    href: 'https://github.com/AdelZahid',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    ],
  },
  {
    number: '05',
    name: 'Campus App',
    category: 'Flutter | Firebase',
    description:
      'A smart student life companion mobile app developed with Flutter and Firebase. Features real-time campus event updates, student-faculty communication, personalized notifications, academic schedule management, and Firebase real-time data sync. Built during CSE 2.1 semester at Ahsanullah University.',
    href: 'https://github.com/AdelZahid',
    images: [
      'https://placehold.co/960x600/121212/D7E2EA?text=Campus+App+Screen+01',
      'https://placehold.co/960x600/171717/D7E2EA?text=Campus+App+Screen+02',
      'https://placehold.co/960x1200/1c1c1c/D7E2EA?text=Campus+App+Screen+03',
    ],
  },
]

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: (typeof projects)[number]
  index: number
  totalCards: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={cardRef} className="relative h-[85vh]">
      <motion.article
        className="sticky top-24 rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 text-[#D7E2EA] sm:rounded-[50px] sm:p-6 md:top-32 md:rounded-[60px] md:p-8"
        style={{ scale, top: `${index * 28}px` }}
      >
        <div className="mb-6 flex flex-wrap items-start justify-between gap-5 md:mb-8">
          <div className="flex items-start gap-4 md:gap-6">
            <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none">
              {project.number}
            </span>
            <div className="space-y-2 md:space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-[#D7E2EA]/70 sm:text-sm">
                {project.category}
              </p>
              <h3 className="text-[clamp(1.4rem,3.5vw,3.2rem)] font-black uppercase leading-none">
                {project.name}
              </h3>
              <p className="max-w-3xl text-sm font-light leading-relaxed text-[#D7E2EA]/80 sm:text-base">
                {project.description}
              </p>
            </div>
          </div>
          <LiveProjectButton href={project.href} />
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
          <div className="grid gap-3 md:col-span-2">
            <img
              src={project.images[0]}
              alt={`${project.name} preview one`}
              className="h-[clamp(130px,16vw,230px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              loading="lazy"
            />
            <img
              src={project.images[1]}
              alt={`${project.name} preview two`}
              className="h-[clamp(160px,22vw,340px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-3">
            <img
              src={project.images[2]}
              alt={`${project.name} preview three`}
              className="h-full min-h-[280px] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              loading="lazy"
            />
          </div>
        </div>
      </motion.article>
    </div>
  )
}

function App() {
  const marqueeRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!marqueeRef.current) {
        return
      }

      const sectionTop = marqueeRef.current.offsetTop
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(value)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const rowOne = marqueeImages.slice(0, 11)
  const rowTwo = marqueeImages.slice(11)
  const rowOneTiles = [...rowOne, ...rowOne, ...rowOne]
  const rowTwoTiles = [...rowTwo, ...rowTwo, ...rowTwo]

  return (
    <main className="overflow-x-clip bg-[#0C0C0C]">
      <section className="relative flex h-screen flex-col overflow-x-clip">
        <FadeIn
          as="nav"
          delay={0}
          y={-20}
          className="flex items-center justify-between px-6 pb-4 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]"
        >
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-opacity duration-200 hover:opacity-70"
            >
              {item}
            </a>
          ))}
        </FadeIn>
        <FadeIn delay={0.15} y={40} className="overflow-hidden">
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[15vw] md:-mt-5 md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m adel
          </h1>
        </FadeIn>
        <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
          <FadeIn
            as="p"
            delay={0.35}
            y={20}
            className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
          >
            a software developer & ml enthusiast driven by crafting innovative
            and impactful digital solutions
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
        <FadeIn
          delay={0.6}
          y={30}
          className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={portraitImage}
              alt="Adel portrait"
              className="w-full object-cover"
              loading="lazy"
            />
          </Magnet>
        </FadeIn>
      </section>

      <section
        ref={marqueeRef}
        className="space-y-3 bg-[#0C0C0C] px-3 pb-10 pt-24 sm:pt-32 md:pt-40"
      >
        <div
          className="flex w-max gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {rowOneTiles.map((image, index) => (
            <img
              key={`${image}-row-1-${index}`}
              src={image}
              alt="Marquee showcase"
              className="h-[270px] w-[420px] rounded-2xl object-cover"
              loading="lazy"
            />
          ))}
        </div>
        <div
          className="flex w-max gap-3"
          style={{
            transform: `translateX(${-1 * (offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {rowTwoTiles.map((image, index) => (
            <img
              key={`${image}-row-2-${index}`}
              src={image}
              alt="Marquee showcase"
              className="h-[270px] w-[420px] rounded-2xl object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <section
        id="about"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
      >
        <FadeIn
          delay={0.1}
          x={-80}
          y={0}
          duration={0.9}
          className="absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon icon"
            className="w-full"
            loading="lazy"
          />
        </FadeIn>
        <FadeIn
          delay={0.25}
          x={-80}
          y={0}
          duration={0.9}
          className="absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D object"
            className="w-full"
            loading="lazy"
          />
        </FadeIn>
        <FadeIn
          delay={0.15}
          x={80}
          y={0}
          duration={0.9}
          className="absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego icon"
            className="w-full"
            loading="lazy"
          />
        </FadeIn>
        <FadeIn
          delay={0.3}
          x={80}
          y={0}
          duration={0.9}
          className="absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D group"
            className="w-full"
            loading="lazy"
          />
        </FadeIn>
        <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
              About me
            </h2>
          </FadeIn>
          <div className="flex flex-col items-center gap-10 sm:gap-12 md:gap-14">
            <div className="flex flex-col items-center gap-8 sm:gap-10">
              <AnimatedText
                text={aboutText}
                className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
              />
              <FadeIn delay={0.4} y={20} className="flex items-center gap-4">
                <a
                  href="https://github.com/AdelZahid"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#D7E2EA]/30 text-[#D7E2EA] transition-all duration-300 hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10"
                  aria-label="GitHub"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/adel-zahid"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#D7E2EA]/30 text-[#D7E2EA] transition-all duration-300 hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.facebook.com/share/1Gt2dQgo37/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#D7E2EA]/30 text-[#D7E2EA] transition-all duration-300 hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>
                <a
                  href="mailto:adelzahid01@gmail.com"
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#D7E2EA]/30 text-[#D7E2EA] transition-all duration-300 hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10"
                  aria-label="Email"
                >
                  <Mail />
                </a>
              </FadeIn>
            </div>
            <ContactButton />
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      >
        <FadeIn delay={0} y={30}>
          <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
            Skills
          </h2>
        </FadeIn>
        <div className="mx-auto max-w-5xl">
          {services.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={25}
              className="border-t border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12"
            >
              <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none">
                  {service.number}
                </span>
                <div className="space-y-3">
                  <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight">
                    {service.title}
                  </h3>
                  <p className="max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
          <div className="border-t border-[rgba(12,12,12,0.15)]"></div>
        </div>
      </section>

      <section
        id="projects"
        className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
      >
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-24">
            Projects
          </h2>
        </FadeIn>
        <div className="space-y-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={projects.length}
            />
          ))}
        </div>
      </section>
      <section
        id="contact"
        className="flex items-center justify-center px-5 pb-20 pt-12 sm:px-8 md:px-10"
      >
        <ContactButton />
      </section>
    </main>
  )
}

export default App
