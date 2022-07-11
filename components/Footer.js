import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size="6" />
        </div>
        <div className="mb-8 flex space-x-2 divide-x divide-slate-200 text-sm text-slate-500">
          <div>
            {`© ${new Date().getFullYear()}`} {siteMetadata.author}
          </div>
          <Link href="/" className="pl-2 hover:text-pink-400">
            {siteMetadata.title}
          </Link>
        </div>
        {/* Based on:
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
          */}
      </div>
    </footer>
  )
}
