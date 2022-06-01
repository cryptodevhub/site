import { NextSeo } from 'next-seo'
import { GetStaticPaths, GetStaticProps } from 'next'

import { getContentBySlug, getAllContentSlugs, Content } from '../../lib/content'

export default function Show({ content }: { content: Content }) {
  return (
    <>
      <NextSeo title="Content" description="Content show page." />
      <section>
        <h1>
          <a href={content.url} target="_blank" rel="noreferrer">
            {content.title}
          </a>
        </h1>
        <p>{content.body}</p>
        <ul>
          <ul>
            {content.authors.map((author) => (
              <li key={author}>{author}</li>
            ))}
          </ul>
        </ul>
        <ul>
          <ul>
            {content.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </ul>
        <p>{new Date(content.updated).toDateString()}</p>
      </section>
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
    return {
      props: {
        content
      }
    }
  }
  return {
    props: {}
  }
}
