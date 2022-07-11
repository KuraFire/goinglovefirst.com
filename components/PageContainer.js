export default function PageContainer({ children }) {
  return (
    <main className="mx-auto max-w-3xl rounded-md bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 xl:max-w-5xl">
      {children}
    </main>
  )
}
