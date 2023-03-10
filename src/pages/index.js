import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Layout from '@theme/Layout'
import './index.css'
import CustomFooter from '../components/CustomFooter'
import AuraImg from '../../static/img/aura.png'
import RocketImg from '../../static/img/rocket.png'
import CheckImg from '../../static/img/check.png'
import AuraScan from '../../static/img/aurascan-logo.png'
import PyxisSafe from '../../static/img/pyxissafe-logo.png'
export default function Home() {
    useEffect(() => {
      ReactDOM.render(<CustomFooter />, document.getElementsByClassName('footer')[0])
    }, [])
    return (
        <Layout title='Aura Network'>
            <div className='home-root'>
                <div className='aura-intro'>
                    <h1>WELLCOME TO THE</h1>
                    <p className='aura'>AURA NETWORK</p>
                    <p>
                    This is the starting points where you will learn about Aura ecosystem. Advanced topics and sections for developers, validators, exchanges and others could be navigated through the above menu bar.
                    </p>
                    <button onClick={() => window.location.href='https://docs.aura.network/overview/about/intro'}>Explore now</button>
                </div>
                <div className='spotlight'>
                    <div className='aura-card' onClick={() => window.location.href='https://docs.aura.network/overview/about/intro'}>
                        <div>
                            <div className='img'>
                                <img src={AuraImg} alt='' />
                            </div>
                            <div>
                                <p className='title'>About Aura Network</p>
                                <p className='description'>
                                    Learn the basics about Aura Network, such as its features and tokenomics.
                                </p>
                                <a href='https://docs.aura.network/overview/about/intro'>
                                    Learn more <span>🡪</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='aura-card' onClick={() => window.location.href='https://docs.aura.network/overview/start/wallet'}>
                        <div>
                            <div className='img'>
                                <img src={RocketImg} alt='' />
                            </div>
                            <div>
                                <p className='title'>Getting started</p>
                                <p className='description'>
								Go through most basic steps to interact with Aura network.
								</p>
                                <a href='https://docs.aura.network/overview/start/wallet'>
                                    Learn more <span>🡪</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='aura-card' onClick={() => window.location.href='https://docs.aura.network/validator/'}>
                        <div>
                            <div className='img'>
                                <img src={CheckImg} alt='' />
                            </div>
                            <div>
                                <p className='title'>Validator Handbook</p>
                                <p className='description'>
								Validators are responsible for committing new blocks in the blockchain.
                                </p>
                                <a href='https://docs.aura.network/validator/'>
                                    Learn more <span>🡪</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='category'>
                    <div>
                        <p className='section-title'>Browse our Docs by Category</p>
                        <div className='aura-cards'>
                            <div className='aura-card' onClick={() => window.location.href='https://docs.aura.network/developer/'}>
                                <p className='title'>Developer Materials</p>
                                <p className='description'>
                                    Here you will find documentation on how to develop decentralized apps using AURA.
                                    Don’t worry if you are new to smart contract technology, we will get you up to speed
                                    in no time.
                                </p>
                                <a href='https://docs.aura.network/developer/'>
                                    Open documents <span>🡪</span>
                                </a>
                            </div>
                            <div className='aura-card' onClick={() => window.location.href='https://docs.aura.network/tutorials/Welcome'}>
                                <p className='title'>View Tutorials</p>
                                <p className='description'>Explore our collection of Examples and Tutorials</p>
                                <a href='https://docs.aura.network/tutorials/Welcome'>
                                    View Tutorials <span>🡪</span>
                                </a>
                            </div>
                            <div className='aura-card' onClick={() => window.location.href='https://docs.aura.network/validator/'}>
                                <p className='title'>Validator Handbook</p>
                                <p className='description'>
                                    This section is dedicated for validators who want to validate on Aura Network.
                                </p>
                                <a href='https://docs.aura.network/validator/'>
                                    Open documents <span>🡪</span>
                                </a>
                            </div>
                            <div className='aura-card' onClick={() => window.location.href='https://docs.aura.network/integrate/exchange/integrate'}>
                                <p className='title'>Exchange Integration</p>
                                <p className='description'>
                                    This section is dedicated for exchanges (CEX and DEX) to integrate with Aura
                                    Network.
                                </p>
                                <a href='https://docs.aura.network/integrate/exchange/integrate'>
                                    Open documents <span>🡪</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='explore'>
                    <div>
                        <p className='section-title'>Explore Aura-built products</p>
                        <p className='section-description'>
                            Here are some of the products built by the Aura Network core team.
                        </p>
                        <div className='epl-cards'>
                            <div className='epl-card' onClick={() => window.location.href='https://docs.aura.network/product/aurascan/'}>
                                <div className='product-logo'>
                                    <img src={AuraScan} alt='' />
                                </div>
                                <div className='product-info'>
                                    <p className='product-name'>AURASCAN</p>
                                    <p className='product-description'>
                                        Beautiful, blazing-fast blockchain explorer for the Cosmos ecosystem offering
                                        features from both Mintscan and Etherscan, and also a touch of customization.
                                    </p>
                                    <button onClick={() => (window.location.href = 'https://docs.aura.network/product/aurascan/')}>
                                        Explore now
                                    </button>
                                </div>
                            </div>
                            <div className='epl-card' onClick={() => window.location.href='https://docs.aura.network/product/pyxis-safe/'}>
                                <div className='product-logo'>
                                    <img src={PyxisSafe} alt='' />
                                </div>
                                <div className='product-info'>
                                    <p className='product-name'>PYXIS SAFE</p>
                                    <p className='product-description'>
                                        A multi-signature tool that is compatible with all Cosmos-based chains. Inspired
                                        by the famous Gnosis Safe, but much safer.
                                    </p>
                                    <button onClick={() => (window.location.href = 'https://docs.aura.network/product/pyxis-safe/')}>
                                        Explore now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
