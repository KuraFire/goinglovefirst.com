import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'
import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Blog({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <h1>Blog segment from home page</h1>

      <ul className="divide-y divide-pink-200 dark:divide-gray-700">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
          const { slug, date, title, summary, tags } = frontMatter
          return (
            <li key={slug} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h2>
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {summary}
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        href={`/blog/${slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="mt-8 flex items-center justify-center">
          <NewsletterForm />
        </div>
      )}
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}
