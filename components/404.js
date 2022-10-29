import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`This Piece is a Work In Progress (or a 404) - ${siteMetadata.title}`} />
      <div className="my-12 flex flex-col items-start justify-start md:flex-row md:items-start md:justify-center md:space-x-6">
        <div className="space-x-2 pt-0 pb-8 md:space-y-5">
          <h1 className="w-55 border-pink-50 bg-gradient-to-br from-pink-200 to-pink-800 bg-clip-text text-4xl font-extrabold leading-9 tracking-tight text-transparent md:mt-12 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            TBD
          </h1>
        </div>
        <div className="max-w-md">
          <h2 className="mb-4 text-xl font-semibold leading-normal text-slate-700 md:text-2xl">
            I’m Still Cooking
          </h2>
          <p className="mb-4">
            If you were linked here from something Faruk wrote, it means a <nobr>Love First</nobr>{' '}
            Piece will be published here eventually.
          </p>
          <p className="mb-4">
            You should{' '}
            <Link
              href="https://twitter.com/intent/tweet?text=Hey%20@KuraFire,%20Sit%20and%20write%20this%20Love%20First%20Piece!"
              className="text-blue-600 hover:text-pink-500 focus:text-pink-700"
            >
              nudge him on Twitter
            </Link>{' '}
            and tell him to sit his ass in a chair and write—or at least put a stub here to give
            people a sense for what this Piece will be about.
          </p>
          <p className="mb-8">Make sure to add this page’s URL to your tweet!</p>
        </div>
      </div>
      <div className="my-12 flex flex-col items-start justify-start md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-0 pb-8 md:space-y-5">
          <h1 className="w-55 bg-gradient-to-br from-slate-200 to-slate-300 bg-clip-text text-4xl font-extrabold leading-9 tracking-tight text-transparent md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            404
          </h1>
        </div>
        <div className="max-w-md">
          <h2 className="mb-4 text-xl font-semibold leading-normal text-slate-400 md:text-2xl">
            Another possibility: a 404!
          </h2>
          <p className="mb-8 text-slate-500">
            You may have entered the URL by hand and made a typo, or deliberately tried a bogus
            URL—you wouldn't be the first one. But if you came from another site that linked to this
            specific page, please{' '}
            <Link
              href="https://twitter.com/intent/tweet?text=@KuraFire"
              className="text-blue-600 hover:text-pink-500 focus:text-pink-700"
            >
              tweet me that something really <em>should</em> be here
            </Link>
            !
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
