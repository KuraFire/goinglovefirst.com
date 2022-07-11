export default function PageTitle({ children }) {
  return (
    <details>
      <summary className="text-md font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
        The Path of Power
      </summary>
      {children}
    </details>
  )
}
