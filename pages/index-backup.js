import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from 'next/image'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

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
        <h1 className="bg-gradient-to-br from-pink-100 via-pink-400 to-pink-800 bg-clip-text text-3xl font-extralight leading-9 tracking-wide text-transparent sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {siteMetadata.title}
        </h1>
        <p className="text-xl font-light leading-7 text-slate-500">{siteMetadata.description}</p>
      </div>
      <div className="prose relative mx-auto">
        <p className="-mx-6 rounded-2xl bg-white py-4 px-6 text-lg shadow-lg shadow-pink-50/55 md:-mx-8 md:mb-13">
          <strong>
            We each have a limitless capacity for greatness, found deep inside our hearts.
          </strong>
          <br /> What would the world look like if we harnassed that potential for a greater, more
          harmonious society <nobr>For All Of Us</nobr>?
        </p>
        <p>
          We live in a world of turmoil, teetering on the precipice of even greater calamity. All
          across the political, ideological, spiritual and scientific spectra there are conflicts,
          fears, and misinformation. People are driven to despondence, apathy, despair—even to
          committing horrific acts against fellow human beings.
        </p>
        <p>
          <strong>And I, for one, am tired of it.</strong> I‘m tired of the exploitation of people
          and resources, I’m tired of our mishandling of our beautiful planet, and I’m tired of the
          conflict. I want to fight for a better world, but I want to <nobr>fight with love</nobr>,
          not with more violence.
        </p>
        <p>
          We are a world of broken hearts, but we are not broken people. We still have, within each
          of us, the capacity to love one another. Every day, millions and millions of people act
          through a lens of love, to do their part to make ours a better world for everyone. From
          healing personal traumas, inner conflicts, and undoing the harmful programming of the
          toxic historical artifects that our society is rife with, to truly listening to others,
          acknowledging the reality of their feelings, supporting them in their needs, and working
          towards peaceful collaboration. People are doing the work, but there is more work to be
          done. More importantly, we need…
        </p>
        <h2 className="text-center font-light text-slate-700">A Different Kind Of Thinking</h2>
        <figure className="callout-quote w-72 rounded-lg bg-stone-100/55 bg-gradient-to-br from-amber-50/55 to-stone-200/55 shadow backdrop-blur-md xl:absolute xl:-right-80 xl:mt-0 2xl:-right-96">
          <blockquote className="border-none px-4 pt-3 text-slate-600">
            “We cannot solve problems by using the same kind of thinking we used when we created
            them.”
          </blockquote>
          <figcaption
            className="px-4 pb-2 text-right [&>a]:text-slate-600 [&>a]:no-underline"
            cite="https://www.quora.com/Did-Albert-Einstein-ever-say-write-that-We-cant-solve-problems-by-using-the-same-kind-of-thinking-we-used-when-we-created-them-If-so-where-and-when-did-he-say-write-so/answer/Sid-Kemp"
            title="Not a literal exact quote, but a good apocryphal summary of what he meant when saying similar things."
          >
            <Link href="https://www.quora.com/Did-Albert-Einstein-ever-say-write-that-We-cant-solve-problems-by-using-the-same-kind-of-thinking-we-used-when-we-created-them-If-so-where-and-when-did-he-say-write-so/answer/Sid-Kemp">
              Albert Einstein
            </Link>
          </figcaption>
        </figure>
        <p>
          What would it look like if we reimagined <strong>everything</strong>, all of human
          society, with a lens of love for all people? What if we combine the best knowledge,
          practices, and wisdom that humanity has accumulated across the thousands of years of
          civilization—and apply it to healing and repairing the divides between us? Could we
          eventually solve the monumental challenges our global society faces, together?
        </p>
        <p className="text-center font-serif text-pink-500">I believe we can.</p>
        <p>
          What could humanity accomplish if every single one of us would be respected and accepted
          for who they are, supported in our needs, and given the opportunity to pursue our wants
          and live our best lives? Could we evolve humanity to a wider cultural mindset of{' '}
          <nobr>
            Us <em>And</em> Them
          </nobr>
          ?
        </p>
        <p className="text-center font-serif italic text-pink-500">I believe we can.</p>
        <p>
          What if we had tools and support systems for people to heal from their broken hearts and
          broken dreams at scale, and custom-tailored experiences for each individual or group of
          people to remove the burdens of shame, cleanse any sources of toxicity, and nurture the
          wounds of the soul? Could we find redemption and harmony together once more?
        </p>
        <p className="text-center font-serif italic text-pink-500">
          <em>I believe we can!</em>
        </p>
        <p>
          I believe we can build the world of tomorrow on foundations of <nobr>Universal Love</nobr>
          , a balancing of our own needs with a compassion for the needs of all others, and a
          conscious practice of the work, the effort, and the feeling into our hearts to{' '}
          <strong>overcome all that holds us back</strong>. I believe there is…
        </p>
        <h2 className="text-center font-light text-slate-700">A Brighter Future For Humanity</h2>
        <p>
          We are at the precipice of <nobr href="/a-revolution-of-love">A Revolution Of Love</nobr>,
          a paradigm shift to a new modality of thinking and seeing the world, one informed by a
          deeper and more complete understanding of Love as a powerful force, going way above and
          beyond a stronger form of affection or romantic interest. In this exact moment in our time
          on Earth, we are seeing a major convergence of science, spirituality, ontology, and
          theology—their teachings and understandings are coming together and aligning in harmony
          like never before.
        </p>
        <p>One key lesson this convergence has taught is us the following:</p>
        <blockquote>
          What we give our attention to + The way we <em>choose</em> to look at it = Our lived
          reality
        </blockquote>

        <figure className="flex justify-center lg:absolute lg:-left-36 lg:mt-12 lg:flex-none">
          <Image
            src="/static/images/hexavatar-faruk-shadow.png"
            width="128"
            height="138"
            alt="Photo of Faruk"
          />
        </figure>
        <h2 className="text-center font-light text-slate-700">Let’s Work Together</h2>
        <p>
          Hi, my name is Faruk {/* Rainbow Dragon Supernova */} Ateş, and I’m a{' '}
          <nobr className="lf">Love First Person</nobr>. It’s like a regular person, but with the
          explicit statement of wanting to build a better world, with Love as the foundation.
        </p>
        <p>
          I’ve spent my entire life fascinated by human behavior. When I was very little I was
          bullied in school, and one particular instance was so hurtful that I spent all of recess
          sitting on a bench wondering:{' '}
          <em className="mt-4 block pl-8">
            What drives people to be so hurtful to others? How could I help people so that they
            wouldn’t feel the need to do that?
          </em>
        </p>
        <p>And I never really stopped thinking about that.</p>
        <p>
          I believe all people have a desire to make their lives easier and less complicated, and
          that with the right support, the right approach, and the right mindset, we can provide
          just that to anyone. Sometimes it takes healing ourselves before we can mend bridges
          between people, and sometimes, those two happen together.
        </p>
        <p>
          <nobr className="lf">Love First</nobr> is about facilitating this work, for ourselves and
          each other, for individuals and communities and organizations alike.
        </p>
        <p>
          We are an incredible species, with cosmic potential. I’m on a life mission, a calling, to
          help us get there. Together with your brilliance, your unique perspective, your dreams and
          your story, I believe we can co-create…
        </p>

        <h2 className="text-center font-light text-slate-700">
          A World Made With <nobr className="lf">Love, First</nobr>
        </h2>
        <p>
          <nobr className="lf">Love First</nobr> goes beyond being defined as one “thing,” but it is{' '}
          <em>about</em> developing and sharing a deeper, more thorough, and more functional
          understanding of how Love works. This <em>Universal Love</em>—or capital-L Love for
          short—is about embodying a kinship, a connection with, and appreciation for everyone and{' '}
          <nobr>Everything, Everywhere, All At Once</nobr>.
        </p>
        <p>
          Love is composed of the classical elements: Earth, Water, Fire, Air, with Love itself the
          bridge between them.
        </p>
        <div className="not-prose -mx-4 mb-4 flex flex-row justify-between lg:-mx-20  [&>picture]:w-1/6 [&>picture]:shadow-lg [&>picture]:shadow-stone-400/21 lg:[&>picture]:w-36">
          <picture>
            <img src="/static/images/icon-earth-small.png" alt="" />
          </picture>
          <picture>
            <img src="/static/images/icon-water-small.png" alt="" />
          </picture>
          <picture>
            <img src="/static/images/icon-love-small.png" alt="" />
          </picture>
          <picture>
            <img src="/static/images/icon-air-small.png" alt="" />
          </picture>
          <picture>
            <img src="/static/images/icon-fire-small.png" alt="" />
          </picture>
        </div>
      </div>
      <p>
        <strong>Earth</strong> is the practice of <nobr>Sharing Your Story</nobr>.{' '}
        <strong>Water</strong> guides us to <nobr>Be Truthful</nobr>. <strong>Fire</strong> invites
        us to <nobr>Embrace Vulnerability</nobr>, while <strong>Air</strong> reminds us to{' '}
        <nobr>Believe In Possibility</nobr>.
      </p>

      <div className="mx-auto mt-12 -mb-36 grid max-w-lg gap-8 lg:-mx-24 lg:max-w-none lg:grid-cols-3">
        {/* The Publication */}
        <a
          href="https://medium.com/lovefirst"
          className="flex  flex-col overflow-hidden rounded-lg shadow-lg transition duration-100 hover:scale-105 focus:scale-105"
        >
          <picture className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src="/static/images/love-is-tree.jpeg"
              alt=""
            />
          </picture>
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-400">medium.com/lovefirst</p>
              <div className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">The Publication</p>
                <p className="mt-3 text-base text-gray-500">
                  Essays and posts are availalbe on the Medium publication.
                </p>
              </div>
            </div>
          </div>
        </a>

        {/* The Newsletter */}
        <div className="group flex flex-col overflow-hidden rounded-lg shadow-lg transition duration-100 focus-within:scale-105 hover:scale-105">
          <picture className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src="/static/images/heart-mail.jpeg" alt="" />
          </picture>
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-400">your inbox</p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* The Vault */}
        <a
          href="https://vault.goinglovefirst.com"
          className="flex  flex-col overflow-hidden rounded-lg shadow-lg transition duration-100 hover:scale-105 focus:scale-105"
        >
          <picture className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src="/static/images/open-vault.jpeg" alt="" />
          </picture>
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-400">vault.goinglovefirst.com</p>
              <div className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">The Vault</p>
                <p className="mt-3 text-base text-gray-500">
                  Incomplete pieces of the Love First Puzzle are stored in this Obsidian-powered
                  repository.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}
