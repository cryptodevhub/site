import { parseISO, format } from 'date-fns'

export default function Date({ date }: { date: string }) {
  const parsed = parseISO(date)
  return <time dateTime={date}>{format(parsed, 'LLLL d, yyyy')}</time>
}
