import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`Page Not Found - ${siteMetadata.title}`} />
      <div className="my-12 flex flex-col items-start justify-start md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-0 pb-8 md:space-y-5">
          <h1 className="bg-gradient-to-br from-slate-300 to-slate-600 bg-clip-text text-4xl font-extrabold leading-9 tracking-tight text-transparent  md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            404
          </h1>
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-semibold leading-normal text-slate-700 md:text-2xl">
            We couldn’t find this page… yet?
          </p>
          <p className="mb-8">
            For now, return to our homepage, or{' '}
            <Link
              href="https://twitter.com/intent/tweet?text=@KuraFire"
              className="text-blue-600 hover:text-pink-500 focus:text-pink-700"
            >
              message Faruk on Twitter
            </Link>{' '}
            if you think this page should exist!
          </p>
          <Link
            href="/"
            className="focus:ring-indigo-500 inline-flex items-center rounded-md bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-800 shadow  shadow-pink-400/10 hover:bg-pink-100 hover:text-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:ring-offset-1"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </>
  )
}
