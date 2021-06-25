import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import styles from './HomepageFeatures.module.css'

const FeatureList = [
  {
    title: 'Learn Blockchain Development',
    description: (
      <>
        Follow our step-by-step &quot;Getting Started&quot; guide to go from absolute beginner to
        proficient Smart Contract developer.
      </>
    ),
    emoji: '⛓️',
    link: 'wiki/solidity-tutorial',
    cta: 'Go to "Getting Started" Guide'
  },
  {
    title: 'Browse Development Resources',
    description: (
      <>
        Browse our community-maintained Wiki to discover useful Tutorials, Tools and other Resources
        which will help you sharpen your development skills.
      </>
    ),
    emoji: '✍️',
    link: '/wiki',
    cta: 'Go to Wiki'
  },
  {
    title: 'Connect with other Developers',
    description: (
      <>
        Join our Discord and talk to other Blockchain developers. Ask questions, team up or simply
        hang out and chat about all things Crypto.
      </>
    ),
    emoji: '💬',
    link: '/discord',
    cta: 'Open Discord'
  }
]

function Feature({ title, description, emoji, link, cta }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className="feature-emoji">{emoji}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--md" to={link}>
            {cta}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="text--center">What do you want to do today?</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
