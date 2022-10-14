import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SubscribeBoxes from '@/components/SubscribeBoxes'
import Tag from '@/components/Tag'
import Image from 'next/image'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div className="flex flex-col items-center space-y-2 pt-6 pb-8 md:space-y-5">
        <p className="text-xs font-light uppercase leading-3 tracking-widest text-slate-400">
          Welcome to
        </p>
        <PageTitle className="">{siteMetadata.title}</PageTitle>
        <p className="text-xl font-light leading-7 text-slate-500">{siteMetadata.description}</p>
      </div>
      <div className="prose relative mx-auto">
        <p>
          <nobr className="lf">Going Love First</nobr> is a journey into reimagining how our society
          functions, and co-creating <strong>a world built with love</strong> for everyone and
          everything.
        </p>
        <p>
          How can we lead from the heart, and what does that even look like? In{' '}
          <em>Going Love First</em> I explore the practices and behaviors cultivate love in
          ourselves, and in our partners, friends, family, and community, and share these findings
          through essays, podcast interviews, and more. Join me, and together we’ll dive into how we
          can all cultivate love <em>between</em> us, distilling these findings into actionable,
          repeatable exercises.
        </p>
        <p>
          We live in a world of broken hearts and broken dreams, but we are not broken people. If
          you believe a better world is possible, one remade on foundations of{' '}
          <nobr>Universal Love</nobr>, healing our wounds and bridging divides, then{' '}
          <nobr className="lf">Love First</nobr> is the journey for you.
        </p>
        {/* <Link href="/about/universal-love">Universal Love</Link> */}

        <figure className="flex justify-center lg:absolute lg:-left-36 lg:mt-14 lg:flex-none">
          <Image
            src="/static/images/hexavatar-faruk-shadow.png"
            width="128"
            height="138"
            alt="Photo of Faruk"
          />
        </figure>
        <h2 className="text-center font-light text-slate-700">About Me</h2>
        <p>
          Hi, I’m Faruk, and I’m a <Link href="/about">Love First Person</Link>. Professionally, I’m
          a personal development coach, product designer, and (recovering) software engineer. For
          the past five years I’ve been diving into Love as a source for personal and social growth,
          healing, and harmony. <nobr className="lf">Love First</nobr> is the philosophy, coaching
          methodology, and all around way of life that has come out of this work.
        </p>
        <p>Subscribe to the newsletter or follow on Medium to stay up to date 💖</p>
        {/* <p>
          <Link href="/about/a-better-world">Read my Vision For A Better World</Link>, and subscribe
          for updates below. 💖
        </p> */}
      </div>

      <SubscribeBoxes />
    </>
  )
}
