import Link from 'next/link'

import ContentCard from './Content'
import { Content } from '../lib/content'

export default function Carousel({ title, body, slug, max, content }: Props) {
  if (content.length === 0) return <></>

  return (
    <section>
      <div className="text-center mb-4">
        <h2 className="text-2xl">
          <Link href={slug}>
            <a>{title}</a>
          </Link>
        </h2>
        <p className="text-md mt-2">{body}</p>
      </div>
      <ul className="carousel w-full shadow-sm rounded-2xl">
        {content.slice(0, max).map((item) => (
          <li key={item.slug} id={`${slug}-${item.slug}`} className="carousel-item w-full">
            <ContentCard
              title={item.title}
              body={item.description}
              slug={item.slug}
              url={item.url}
              tags={item.tags}
            />
          </li>
        ))}
      </ul>
      <div className="flex justify-center w-full py-2 gap-2">
        {content.slice(0, max).map((item, index) => (
          <a key={item.slug} href={`#${slug}-${item.slug}`} className="btn btn-xs">
            {index + 1}
          </a>
        ))}
      </div>
    </section>
  )
}

type Props = {
  title: string
  body: string
  slug: string
  max: number
  content: Content[]
}
