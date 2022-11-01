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
      <h2 className="mb-6 text-xl font-semibold text-gray-900">{title}</h2>
      <div id="revue-embed">
        <form
          // action="https://newsletter.goinglovefirst.com/add_subscriber"
          // method="post"
          // id="revue-form"
          // name="revue-form"
          // target="_blank"
          onSubmit={subscribe}
        >
          <div className="mt-6 mb-4 flex text-small">
            <div className="revue-form-group relative w-full">
              <div className="relative focus-within:z-10">
                <input
                  className="peer w-full rounded-l-md border-gray-400 border-r-pink-500 text-small placeholder-transparent shadow-sm shadow-gray-400/20 transition-all focus:border-pink-500 focus:ring-pink-500"
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
                  className="absolute left-2 -top-2.5 whitespace-nowrap bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-2.5 peer-focus:-top-2.5 peer-focus:text-pink-600"
                >
                  Email ({' '}
                  <span title="Required field" className="required -ml-0.5 text-red-300">
                    required
                  </span>{' '}
                  )
                </label>
              </div>
            </div>
            <input
              type="submit"
              value={subscribed ? 'Thank you!' : 'Subscribe ♥'}
              name="member[subscribe]"
              id="member_submit"
              className="relative inline-block rounded-l-none rounded-r-md bg-pink-400 py-1.5 px-4 font-medium text-white shadow-sm shadow-pink-400/21 transition-colors hover:bg-pink-300 focus:z-10 focus:bg-pink-50 focus:text-pink-700 focus:ring-pink-500"
            />
          </div>
          <div
            className="revue-form-actions flex flex-row-reverse items-center"
            title="By subscribing, you agree with Revue’s Terms of Service and Privacy Policy."
          >
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
