import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div id="home" className="banner-area five">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <span className="sub-head">Hey It's</span>
                            <h1>Reton</h1>
                            <p>Hello I am a <span>Graphic Designer</span> from San Francisco</p>

                            <div className="banner-btn-area">
                                <Link href="#">
                                    <a className="common-btn five">Contact With Me</a>
                                </Link>
                                <Link href="#">
                                    <a className="common-btn five banner-btn">Hire Me</a>
                                </Link>
                            </div>

                            <div className="banner-img">
                                <img src="/images/banner/banner-main4.png" alt="Banner" />
                            </div>

                            <div className="banner-social-text">
                                <ul>
                                    <li>
                                        <a href="#" target="blank">FB</a>
                                    </li>
                                    <li>
                                        <a href="#" target="blank">TW</a>
                                    </li>
                                    <li>
                                        <a href="#" target="blank">LN</a>
                                    </li>
                                    <li>
                                        <a href="#" target="blank">BE</a>
                                    </li>
                                    <li>
                                        <a href="#" target="blank">DRI</a>
                                    </li>
                                    <li>
                                        <a href="#" target="blank">INS</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="banner-email">
                                <a href="mailto:hello@reton.com">hello@reton.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default MainBanner;