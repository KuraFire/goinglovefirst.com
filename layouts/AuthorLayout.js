import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import HexAvatar from '@/components/hexavatars/rainbow-dragon.hex.svg'

import SubscribeBoxes from '@/components/SubscribeBoxes'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github, instagram } =
    frontMatter
  let flexAvatar

  if (avatar == undefined) {
    flexAvatar = siteMetadata.image
  } else {
    flexAvatar = avatar
  }

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="bg-gradient-to-br from-pink-100 via-pink-400 to-pink-800 bg-clip-text text-3xl font-extralight leading-9 tracking-wide text-transparent sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <span className="text-slate-400">About</span> {name}{' '}
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={flexAvatar}
              alt="Photo of Faruk"
              width="192px"
              height="207px"
              className="h-auto w-48"
            />
            <h3 className="pt-4 pb-2 text-2xl font-semibold leading-8 tracking-tight">
              {name} <HexAvatar className="inline h-6 align-text-bottom opacity-89" />
            </h3>
            <div className="text-slate-600">{occupation}</div>
            <div className="text-slate-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
              <SocialIcon kind="instagram" href={instagram} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
        </div>
      </div>
      <SubscribeBoxes />
    </>
  )
}
