export default function BlockCallout({
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
  return (
    <figure className="callout-quote w-72 rounded-lg bg-stone-100/55 bg-gradient-to-br from-amber-50/55 to-stone-200/55 shadow backdrop-blur-md xl:absolute xl:-right-80 xl:mt-0 2xl:-right-96">
      <blockquote className="border-none px-4 pt-3 text-slate-600">{children}</blockquote>
      <figcaption
        className="px-4 pb-2 text-right [&>a]:text-slate-600 [&>a]:no-underline"
        cite="https://www.quora.com/Did-Albert-Einstein-ever-say-write-that-We-cant-solve-problems-by-using-the-same-kind-of-thinking-we-used-when-we-created-them-If-so-where-and-when-did-he-say-write-so/answer/Sid-Kemp"
        title="Not a literal exact quote, but a good apocryphal summary of what he meant when saying similar things."
      >
        <a href="https://www.quora.com/Did-Albert-Einstein-ever-say-write-that-We-cant-solve-problems-by-using-the-same-kind-of-thinking-we-used-when-we-created-them-If-so-where-and-when-did-he-say-write-so/answer/Sid-Kemp">
          Albert Einstein
        </a>
      </figcaption>
    </figure>
  )
}
