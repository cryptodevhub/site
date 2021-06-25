import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <svg width="80" height="80">
          <image xlinkHref="/img/logo.svg" src="/img/logo.svg" width="80" height="80" />
        </svg>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__subsubtitle">
          We&apos;re a community-driven effort to unite like-minded people interested in Blockchain-
          and Crypto Technologies
        </p>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={siteConfig.title}
      description="The one-stop-shop for Blockchain- and Crypto developers. Learn Blockchain development, meet fellow enthusiasts, grow your career."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
