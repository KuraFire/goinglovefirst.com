import siteMetadata from '@/data/siteMetadata'
// import projectsData from '@/data/projectsData'
// import Card from '@/components/Card'
import Head from 'next/head'
import Script from 'next/script'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Mavo test - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      {/* <Script src="/mavo/mavo.min.js" id="mavo-js-script" /></Script>
      <Head>
        <link rel="stylesheet" href="/mavo/mavo.min.css" />
      </Head> */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Mavo test
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Let's build a Locus of Control assessment!
          </p>
        </div>
        <div className="container py-12" mv-app="loveMavoTest" mv-storage="local" mv-autosave="0">
          <div className="space-y-2">
            <label className="block pt-6 pb-8" htmlFor="name">
              Your name:
              <input
                className="ml-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
                type="text"
                property="name"
                id="name"
                name="name"
              />
            </label>
            <label className="block pt-6 pb-8" htmlFor="message">
              Some words to start?
              <textarea
                name="message"
                property="message"
                rows="4"
                className="ml-2 w-full max-w-md rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              ></textarea>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
