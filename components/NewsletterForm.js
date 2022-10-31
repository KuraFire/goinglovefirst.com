import { useRef, useState } from 'react'

import siteMetadata from '@/data/siteMetadata'

const NewsletterForm = ({ title = 'The Newsletter' }) => {
  const inputEl = useRef(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/${siteMetadata.newsletter.provider}`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessage('Your e-mail address is invalid or you are already subscribed!')
      return
    }

    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
    setMessage('Successfully subscribed! 🎉 Remember to confirm your subscription!')
  }

  return (
    <div className="mt-2 block">
      <p className="text-xl font-semibold text-gray-900">{title}</p>
      {/* <p className="my-3 text-base text-gray-500">Receive the latest updates in your inbox.</p> */}
      {/* <form className="mt-3 flex flex-col" onSubmit={subscribe}>
        <div>
          <label className="sr-only" htmlFor="email-input">
            Email address
          </label>
          <input
            autoComplete="email"
            className="w-full rounded-md px-4 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-300"
            id="email-input"
            name="email"
            placeholder={subscribed ? 'Confirm via your inbox!  🎉' : 'Enter your email'}
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <div className="mt-2 flex w-full justify-end">
          <button
            className={`inline-block rounded-md bg-pink-400 py-2 px-4 font-medium text-white shadow-sm shadow-pink-400/21 ${
              subscribed ? 'cursor-default' : 'hover:bg-pink-700'
            } focus:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2`}
            type="submit"
            disabled={subscribed}
          >
            {subscribed ? 'Thank you!' : 'Sign up ♥'}
          </button>
        </div>
      </form>
      {error && (
        <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">{message}</div>
      )} */}
      <div id="revue-embed">
        <form
          // action="https://newsletter.goinglovefirst.com/add_subscriber"
          // method="post"
          // id="revue-form"
          // name="revue-form"
          // target="_blank"
          onSubmit={subscribe}
        >
          <div className="mt-4 mb-2 flex -space-x-px text-small">
            <div className="revue-form-group relative w-1/2">
              <input
                className="peer w-full rounded-l-md border-gray-400 text-small placeholder-transparent transition-all"
                // placeholder="Email address…"
                placeholder={subscribed ? 'You’re subscribed!  🎉' : 'Email (required)'}
                type="email"
                // getRevue's own form HTML:
                // name="member[email]"
                // id="member_email"
                id="email-input"
                name="email"
                // Tailwind starter code:
                ref={inputEl}
                disabled={subscribed}
                required
              />
              <label
                htmlFor="member_email"
                className="absolute left-2 -top-2.5 whitespace-nowrap bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-2.5 peer-focus:-top-2.5 peer-focus:text-blue-600"
              >
                Email ({' '}
                <span title="Required field" className="required -ml-0.5 text-red-300">
                  required
                </span>{' '}
                )
              </label>
            </div>
            <div className="revue-form-group relative w-1/4">
              <input
                className="peer w-full border-gray-400 text-small placeholder-transparent transition-all"
                placeholder="First name…"
                type="text"
                name="member[first_name]"
                id="member_first_name"
              />
              <label
                htmlFor="member_first_name"
                className="absolute left-2 -top-2.5 whitespace-nowrap bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-2.5 peer-focus:-top-2.5 peer-focus:text-blue-600"
              >
                First name <span className="optional sr-only">(Optional)</span>
              </label>
            </div>
            <div className="revue-form-group relative w-1/4">
              <input
                className="peer w-full rounded-r-md border-gray-400 text-small placeholder-transparent transition-all"
                placeholder="Last…"
                type="text"
                name="member[last_name]"
                id="member_last_name"
              />
              <label
                htmlFor="member_last_name"
                className="absolute left-2 -top-2.5 whitespace-nowrap bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-2.5 peer-focus:-top-2.5 peer-focus:text-blue-600"
              >
                Last name <span className="optional sr-only">(Optional)</span>
              </label>
            </div>
          </div>
          <div
            className="revue-form-actions flex flex-row-reverse items-center"
            title="By subscribing, you agree with Revue’s Terms of Service and Privacy Policy."
          >
            <input
              type="submit"
              value={subscribed ? 'Thank you!' : 'Subscribe ♥'}
              name="member[subscribe]"
              id="member_submit"
              className="inline-block rounded-md bg-pink-400 py-1.5 px-4 font-medium text-white shadow-sm shadow-pink-400/21 hover:bg-pink-700 focus:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            />
            <div className="revue-form-footer grow space-x-1 text-xs text-gray-500">
              <a target="_blank" href="https://www.getrevue.co/terms" rel="noreferrer">
                Terms of Service
              </a>
              <span className="text-gray-300">•</span>
              <a target="_blank" href="https://www.getrevue.co/privacy" rel="noreferrer">
                Privacy Policy
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
)
