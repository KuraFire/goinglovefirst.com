export default function PageTitle({ children }) {
  return (
    <h1 className="bg-gradient-to-br from-pink-100 via-pink-400 to-pink-800 bg-clip-text text-3xl font-extralight leading-9 tracking-wide text-transparent sm:text-4xl sm:leading-10 md:text-6xl md:leading-[1.3]">
      {children}
    </h1>
  )
}
