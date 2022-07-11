export default function Heading({
  level,
  id,
  children,
  number,
  badge,
  className = '',
  hidden = false,
  ignore = false,
  style = {},
  nextElement,
  ...props
}) {
  // console.log(heading.depth)

  level = [2, 3, 4].includes[props.level] ? props.level : 2
  let Component = `h${level}`
  return (
    <Component className="scroll-mt-24 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </Component>
  )
}
