import SectionContainer from '@/components/SectionContainer'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

// config work
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '/tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)
const colors = fullConfig.theme.colors

// We don't need these shown in the palettes
delete colors['inherit']
delete colors['current']
delete colors['transparent']
delete colors['black']
delete colors['white']

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  return (
    <SectionContainer>
      <PageSEO title="The Colors of Love First" description={siteMetadata.description} />

      <h1 className="mb-12 mt-4 text-center text-3xl font-light text-pink-400">
        The Colors of Love First
      </h1>
      {Object.keys(colors).map((colorName, key1) => (
        <div className="mb-4 flex flex-col justify-between sm:flex-row sm:space-x-4" key={key1}>
          <div className="w-16 shrink-0">
            <div className="flex h-10 flex-col justify-start">
              <h3 className="font-semibold capitalize text-slate-800">{colorName}</h3>
            </div>
          </div>

          {Object.keys(colors[colorName]).map((colorWeight, key2) => (
            <div className="space-y-1 text-small" key={key2}>
              <div
                className="h-10 w-full min-w-[64px] rounded"
                style={{
                  backgroundColor: `${colors[colorName][colorWeight]}`,
                }}
              ></div>
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
                <div className="w-6 font-medium text-slate-600 2xl:w-full">{colorWeight}</div>
                <div className="font-mono text-slate-400">{colors[colorName][colorWeight]}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </SectionContainer>
  )
}
