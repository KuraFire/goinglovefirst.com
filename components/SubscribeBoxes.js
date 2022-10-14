import NewsletterForm from '@/components/NewsletterForm'
import Image from 'next/image'

export default function SubscribeBoxes({ children }) {
  return (
    <div className="mx-1 mt-12 -mb-36 grid gap-8 md:mx-3 md:grid-cols-2">
      {/* <div className="mx-auto mt-12 -mb-36 grid max-w-lg gap-8 lg:-mx-24 lg:max-w-none lg:grid-cols-3"> */}
      {/* The Newsletter */}
      <div className="group flex flex-col overflow-hidden rounded-lg shadow-lg transition duration-200 focus-within:shadow-xl hover:shadow-xl">
        <picture className="flex-shrink-0">
          {/* <img className="h-48 w-full object-cover" src="/static/images/heart-mail.jpeg" alt="" /> */}
          <Image
            className="h-48 w-full object-cover transition group-focus-within:scale-110 group-hover:scale-110"
            width="2100"
            height="1181"
            src="/static/images/heart-mail.jpeg"
            alt=""
          />
        </picture>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-400">your inbox</p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* The Publication */}
      <a
        href="https://medium.com/lovefirst"
        className="group flex flex-col overflow-hidden rounded-lg shadow-lg transition duration-100 hover:shadow-xl focus:shadow-xl"
      >
        <picture className="flex-shrink-0">
          {/* <img className="h-48 w-full object-cover" src="/static/images/love-is-tree.jpeg" alt="" /> */}
          <Image
            className="h-48 w-full origin-bottom object-cover transition group-hover:scale-110"
            width="2100"
            height="1181"
            src="/static/images/love-is-tree.jpeg"
            alt=""
          />
        </picture>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-400 group-hover:underline group-focus:underline">
              medium.com/lovefirst
            </p>
            <div className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">The Publication</p>
              <p className="mt-3 text-base text-gray-500">
                Join thousands of readers on Medium and participate in the conversation.
              </p>
            </div>
          </div>
        </div>
      </a>

      {/* The Vault */}
      {/* <a
      href="https://vault.goinglovefirst.com"
      className="flex  flex-col overflow-hidden rounded-lg shadow-lg transition duration-100 hover:shadow-xl focus:shadow-xl"
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
    </a> */}
    </div>
  )
}
