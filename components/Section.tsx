import ContentCard from './Content'
import { Content } from '../lib/content'

export default function Section({ title, body, content, columns = 1 }: Props) {
  if (content.length === 0) return <></>

  return (
    <section>
      <div className="text-center mb-4">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-md mt-2">{body}</p>
      </div>
      <ul className={`grid gap-8 grid-cols-${columns}`}>
        {content.map((item) => (
          <li key={item.slug}>
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
    </section>
  )
}

type Props = {
  title: string
  body: string
  content: Content[]
  columns?: number
}
