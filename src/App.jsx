import { easeInOut, motion } from "framer-motion";


export default function App() {
  return (
    <div className="bg-violet-300 h-screen gap-2 flex flex-col items-center justify-center">
      <Animation text="Instagram" />
      <Animation text="Facebook" />
      <Animation text="Linkedin" />
      <Animation text="Twitter" />
    </div >
  )
}

export function Animation({ text }) {
  return <div>
    <motion.a
      initial="initial"
      whileHover="hovered"
      href="#"
      className="text-5xl relative block overflow-hidden uppercase font-black">
      <div>
        {text.split("").map((l, i) => {
          return <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" }
            }}
            transition={{
              duration: 0.25,
              ease: easeInOut,
              delay: 0.025 * i
            }}
            className="inline-block"
            key={i}>{l}</motion.span>
        })}
      </div>
      <div className="absolute inset-0">
        {text.split("").map((l, i) => {
          return <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 }
            }}
            transition={{
              duration: 0.25,
              ease: easeInOut,
              delay: 0.025 * i
            }}
            className="inline-block"
            key={i}>{l}</motion.span>
        })}
      </div>
    </motion.a >
  </div >
}