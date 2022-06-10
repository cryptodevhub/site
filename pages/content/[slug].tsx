import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { GetStaticPaths, GetStaticProps } from 'next'

import Date from '../../components/Date'
import ContentCard from '../../components/Content'
import { getContentBySlug, getAllContentSlugs, Content, getContentByTags } from '../../lib/content'

export default function Show({ content, embedded }: { content: Content; embedded: Content[] }) {
  let embedding = <></>

  if (embedded) {
    embedding = (
      <section>
        <ul className="grid gap-8 grid-cols-3 mt-8">
          {embedded.map((content) => (
            <li key={content.slug}>
              <ContentCard content={content} />
            </li>
          ))}
        </ul>
      </section>
    )
  }

  return (
    <>
      <NextSeo title={content.title} description={content.description} />
      <article>
        <div className="text-center mb-8">
          <h1 className="font-bold text-4xl">
            <a href={content.url} target="_blank" rel="noreferrer">
              {content.title}
            </a>
          </h1>
        </div>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content.body }} />
        {embedding}
        <div className="flex items-center justify-between my-6">
          <ul className="flex">
            {content.authors.map((author, index) => (
              <li key={author}>{(index ? ', ' : '') + author}</li>
            ))}
          </ul>
          <p>
            <Date date={content.updated} />
          </p>
        </div>
        <div className="flex items-center justify-between">
          <ul>
            {content.tags.map((tag) => (
              <li
                key={tag}
                className="mr-2 badge badge-outline hover:badge-primary hover:badge-outline"
              >
                <Link href={`/tags/${tag}`}>
                  <a>{tag}</a>
                </Link>
              </li>
            ))}
          </ul>
          {content.url && (
            <a href={content.url} target="_blank" className="btn btn-primary" rel="noreferrer">
              Go to Website
            </a>
          )}
        </div>
      </article>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllContentSlugs()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const content = getContentBySlug(params.slug as string)

    let embedded: Content[] = []
    if (content?.embedded) {
      const { tags, operator } = content.embedded
      embedded = getContentByTags(tags, operator)
    }

    return {
      props: {
        content,
        embedded
      }
    }
  }
  return {
    props: {}
  }
}
