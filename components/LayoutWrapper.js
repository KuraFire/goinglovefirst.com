import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
// import PageContainer from './PageContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="-mb-8 flex min-h-[89vh] scroll-mt-12 flex-col justify-between">
        <header className="flex items-center justify-between pt-6 pb-12">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle} className="group">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo className="h-12 w-12" />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl text-white decoration-pink-100 decoration-wavy decoration-from-font group-hover:underline sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-white decoration-pink-100 decoration-wavy decoration-from-font hover:text-pink-50 hover:underline sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            {/* <ThemeSwitch /> */}
            <MobileNav />
          </div>
        </header>
        <main className="mx-auto mb-28 w-full rounded-md bg-gray-50 px-4 py-8 shadow-md sm:px-6 lg:px-8 lg:py-12">
          {children}
        </main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
