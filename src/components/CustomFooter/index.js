import React from 'react'
import Link from '@docusaurus/Link'
import styles from './styles.module.scss'
import '@site/src/pages/index.css'
import AuraImgDark from '../../../static/img/aura-logo-dark.png'
import AuraImgLight from '../../../static/img/aura-logo-light.png'
import GithubIcon from '../../../static/img/github-logo.png'
import DiscordIcon from '../../../static/img/discord-logo.png'
import TwitterIcon from '../../../static/img/twitter-logo.png'
import BlogIcon from '../../../static/img/blog-icon.png'
import GithubIconLight from '../../../static/img/github-logo-dark.png'
import DiscordIconLight from '../../../static/img/discord-logo-dark.png'
import TwitterIconLight from '../../../static/img/twitter-logo-dark.png'
import BlogIconLight from '../../../static/img/blog-icon-dark.png'
import useBaseUrl from '@docusaurus/useBaseUrl'

const CustomFooter = () => (
    <div className={styles['custom-footer-wrapper']}>
        <div>
            <div className={styles['infomation']}>
                <div className={styles['logo-wrapper']}>
                    <img src={AuraImgDark} className={styles['dark-icon']} />
                    <img src={AuraImgLight} className={styles['light-icon']} />
                </div>
                <div className={styles['footerSocialIconsWrapper']}>
                    <div className={styles['socialBrands']}>
                        <Link
                            href={'https://twitter.com/AuraNetworkHQ'}
                            rel='noopener noreferrer'
                            aria-label={'Twitter'}>
                            <img src={TwitterIcon} alt='twitter' className={styles['dark-icon']} />
                            <img src={TwitterIconLight} alt='twitter' className={styles['light-icon']} />
                        </Link>
                    </div>
                    <div className={styles['socialBrands']}>
                        <Link href={'https://discord.gg/CUDB28YJf3'} rel='noopener noreferrer' aria-label={'Discord'}>
                            <img src={DiscordIcon} alt='discord' className={styles['dark-icon']} />
                            <img src={DiscordIconLight} alt='discord' className={styles['light-icon']} />
                        </Link>
                    </div>
                    <div className={styles['socialBrands']}>
                        <Link href={'https://github.com/aura-nw'} rel='noopener noreferrer' aria-label={'Github'}>
                            <img src={GithubIcon} alt='github' className={styles['dark-icon']} />
                            <img src={GithubIconLight} alt='github' className={styles['light-icon']} />
                        </Link>
                    </div>
                    <div className={styles['socialBrands']}>
                        <Link href={'https://insight.aura.network/'} rel='noopener noreferrer' aria-label={'Blog'}>
                            <img src={BlogIcon} alt='blog' className={styles['dark-icon']} />
                            <img src={BlogIconLight} alt='blog' className={styles['light-icon']} />
                        </Link>
                    </div>
                </div>
                <p className={styles['aura-introdution']}>
                    A scalable, agile and effortless Layer-1 blockchain with a comprehensive ecosystem to accelerate
                    global NFTs adoption.
                </p>
            </div>
            <div className={styles['footer-navbar']}>
                <div className={styles['footer-navbar__col']}>
                    <p>Documentation</p>
                    <a href={useBaseUrl('overview')}>Learn</a>
                    <a href={useBaseUrl('developer')}>Developers</a>
                    <a href={useBaseUrl('validator')}>Validators</a>
                    <a href={useBaseUrl('integrate/exchange/integrate')}>Integrate</a>
                </div>
                <div className={styles['footer-navbar__col']}>
                    <p>Ecosystem</p>
                    <a href={useBaseUrl('product/pyxis-safe')}>Pyxis Safe</a>
                    <a href={useBaseUrl('product/aurascan')}>Aurascan</a>
                    <a href={useBaseUrl('product/horoscope')}>Horoscope</a>
                </div>
            </div>
        </div>
        <div
            className={
                styles['copyright']
            }>{`Copyright © ${new Date().getFullYear()} Aura Network, Inc. Built with Docusaurus.`}</div>
    </div>
)

export default CustomFooter
