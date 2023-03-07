import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.scss';
import '@site/src/pages/index.css';
import AuraImg from '../../../static/img/Aura-logo-6.png';
import { TelegramIcon, TwitterIcon, DiscordIcon, GithubIcon, BlogIcon } from '../icons';


const CustomFooter = () => (
    <footer className={styles["custom-footer-wrapper"]}>
        <div className={styles["logo-wrapper"]}>
            <img src={AuraImg} />
        </div>
        <div className={styles["copyright"]}>
            {`Copyright © ${new Date().getFullYear()} Aura Network, Inc.`}
        </div>
        <div className={styles["footerSocialIconsWrapper"]}>
            <div className={styles["socialBrands"]}>
                <Link
                href={"https://twitter.com/AuraNetworkHQ"}
                rel="noopener noreferrer"
                aria-label={"Twitter"}
                >
                <TwitterIcon fill='url(#aura)' size="45" />
                </Link>
            </div>
            <div className={styles["socialBrands"]} >
                <Link
                href={"https://discord.gg/CUDB28YJf3"}
                rel="noopener noreferrer"
                aria-label={"Discord"}
                >
                <DiscordIcon fill='url(#aura)' size="45" />
                </Link>
            </div>
            <div className={styles["socialBrands"]}>
                <Link
                href={"https://t.me/AuraNetworkOfficial"}
                rel="noopener noreferrer"
                aria-label={"Telegram"}
                >
                <TelegramIcon fill='url(#aura)' size="40"/>
                </Link>
            </div>
            <div className={styles["socialBrands"]}>
                <Link
                href={"https://github.com/aura-nw"}
                rel="noopener noreferrer"
                aria-label={"Github"}
                >
                <GithubIcon fill='url(#aura)' size="40" />
                </Link>
            </div>
            <div className={styles["socialBrands"]}>
                <Link
                href={"https://insight.aura.network/"}
                rel="noopener noreferrer"
                aria-label={"Blog"}
                >
                <BlogIcon fill='url(#aura)' size="43" />
                </Link>
            </div>
        </div>
    </footer>
);

export default CustomFooter;
