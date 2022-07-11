import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import Instagram from './instagram.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
}

const brandColors = {
  mail: 'hover:text-[#fa1982] focus:text-[#fa1982]',
  github: 'hover:text-[#24292e] focus:text-[#24292e]',
  facebook: 'hover:text-[#3b5998] focus:text-[#3b5998]',
  youtube: 'hover:text-[#e52d27] focus:text-[#e52d27]',
  linkedin: 'hover:text-[#2867B2] focus:text-[#2867B2]',
  twitter: 'hover:text-[#1DA1F2] focus:text-[#1DA1F2]',
  instagram: 'hover:text-[#E4405F] focus:text-[#E4405F]',
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  let color = brandColors[kind]

  return (
    <a
      className={`text-sm ${color} rounded-sm text-slate-400 transition focus:outline-none focus:ring-1 focus:ring-current focus:ring-offset-2 focus:saturate-100`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg className={`fill-current h-${size} w-${size}`} />
    </a>
  )
}

export default SocialIcon
