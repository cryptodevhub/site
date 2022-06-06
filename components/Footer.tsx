import Link from 'next/link'

export default function Footer() {
  return (
    <div className="bg-base-200 text-base-content">
      <footer className="max-w-7xl mx-auto footer p-10">
        <div>
          <span className="footer-title">Category 1</span>
          <Link href="/link-1">
            <a className="link link-hover">Link 1</a>
          </Link>
        </div>
        <div>
          <span className="footer-title">Category 2</span>
          <Link href="/link-1">
            <a className="link link-hover">Link 1</a>
          </Link>
        </div>
        <div>
          <span className="footer-title">Category 3</span>
          <Link href="/link-1">
            <a className="link link-hover">Link 1</a>
          </Link>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <a
            className="link link-hover"
            href="https://twitter.com/cryptodevhub"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            className="link link-hover"
            href="https://cryptodevhub.io/discord"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>
          <a
            className="link link-hover"
            href="https://github.com/cryptodevhub"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 border-t border-base-300">
        <div className="items-center grid-flow-col">
          <p>Copyright {new Date().getFullYear()}, All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}
