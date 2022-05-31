import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'

import { getContentByTags, Content } from '../../lib/content'

export default function Index({ content }: { content: Content[] }) {
  return (
    <>
      <NextSeo title="Content" description="Content index page." />
      <section>
        <h1>Content</h1>
        <ul>
          {content.map(({ title, slug }) => (
            <li key={slug}>
              <Link href={`/content/${slug}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getContentByTags(['foo', 'bar'], 'or')
  return {
    props: {
      content
    }
  }
}
