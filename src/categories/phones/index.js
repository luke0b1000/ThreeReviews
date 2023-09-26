import React from 'react';

import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Info } from '../../misc/Info';

// Modal
import { InfoModal, TopThreeModal } from '../../template/Modal';

// Images
import firstmain from './first/img/main.jpg';
import secondmain from './second/img/main.jpg';
import thirdmain from './third/img/main.jpg';

function importAll(r) {
    return r.keys().map(r);
}
const imagesOneArray = importAll(
    require.context('./first/img/', false, /\.(png|jpe?g|svg)$/)
);
const imagesTwoArray = importAll(
    require.context('./second/img/', false, /\.(png|jpe?g|svg)$/)
);
const imagesThreeArray = importAll(
    require.context('./third/img/', false, /\.(png|jpe?g|svg)$/)
);

export function CategoryBannerHeader(props) {
    const { infoModalWord } = props;
    const [infoModalShow, setInfoModalShow] = React.useState(false);
    return (
        <div class="category-header">
            <div class="current-category">{props.category}</div>
            <Button
                variant="outline-secondary"
                onClick={() => setInfoModalShow(true)}
            >
                <Info />
            </Button>
            <InfoModal
                show={infoModalShow}
                onHide={() => setInfoModalShow(false)}
                infoModalWord={infoModalWord}
            />
            <div class="right"></div>
        </div>
    );
}
export function CategoryTopThree() {
    const [firstModalShow, setFirstModalShow] = React.useState(false);
    const [secondModalShow, setSecondModalShow] = React.useState(false);
    const [thirdModalShow, setThirdModalShow] = React.useState(false);
    return (
        <div class="list-3-cols">
            <div class="each-item">
                <h3>
                    <b>Samsung Galaxy S20 Ultra 5G</b>
                </h3>
                <Button
                    variant="outline-light"
                    onClick={() => setFirstModalShow(true)}
                >
                    <div class="mainheight">
                        <img
                            alt="Samsung Galaxy S20 Ultra 5G"
                            src={firstmain}
                            class="mainimg"
                        />
                    </div>
                </Button>
                <TopThreeModal
                    show={firstModalShow}
                    onHide={() => setFirstModalShow(false)}
                    imageArray={imagesOneArray}
                    videoSrc="x0Kv_QRWR-I"
                />
                <div class="tech-specs">
                    <div class="tech-specs-row">
                        <span class="rleft">Release Date</span>
                        <span>3/6/2020</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">OS</span>
                        <span>Android</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Processor</span>
                        <span>Octa-core, 2840 MHz</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">RAM</span>
                        <span>12GB LPDDR5</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Rear Camera</span>
                        <span>108 MP (OIS, PDAF)</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Front Camera</span>
                        <span>48 MP (Telephoto, OIS, PDAF)</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Internal Storage</span>
                        <span>512 GB</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Storage Expansion</span>
                        <span>1 TB</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Dimensions</span>
                        <span>6.57 x 2.99 x 0.35 inches</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Weight</span>
                        <span>7.83 oz</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Battery</span>
                        <span>5000 mAh</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Price</span>
                        <span>$1099.99</span>
                    </div>
                </div>
                <a
                    class="green-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.samsung.com/us/mobile/galaxy-s20-5g/"
                >
                    BUY
                </a>
            </div>
            <div class="each-item">
                <h2>Apple 11 Pro Max</h2>
                <Button
                    variant="outline-light"
                    onClick={() => setSecondModalShow(true)}
                >
                    <div class="mainheight">
                        <img
                            alt="Apple 11 Pro Max"
                            src={secondmain}
                            class="mainimg"
                        />
                    </div>
                </Button>
                <TopThreeModal
                    show={secondModalShow}
                    onHide={() => setSecondModalShow(false)}
                    imageArray={imagesTwoArray}
                    videoSrc="cVEemOmHw9Y"
                />
                <div class="tech-specs">
                    <div class="tech-specs-row">
                        <span class="rleft">Release Date</span>
                        <span>9/20/2019</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">OS</span>
                        <span>iOS</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Processor</span>
                        <span>Hexa-core, 2650 MHz</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">RAM</span>
                        <span>4GB LPDDR4</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Rear Camera</span>
                        <span>
                            12 MP (Sapphire crystal lens cover, OIS, PDAF)
                        </span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Front Camera</span>
                        <span>
                            12 MP (Telephoto, Sapphire crystal lens cover, OIS,
                            PDAF)
                        </span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Internal Storage</span>
                        <span>512 GB</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Storage Expansion</span>
                        <span>NA</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Dimensions</span>
                        <span>6.22 x 3.06 x 0.32 inches</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Weight</span>
                        <span>7.97 oz</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Battery</span>
                        <span>3969 mAh</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Price</span>
                        <span>$1449.00</span>
                    </div>
                </div>
                <a
                    class="green-button"
                    target="_black"
                    href="https://www.apple.com/iphone-11-pro/specs/"
                >
                    BUY
                </a>
            </div>
            <div class="each-item">
                <h2>Google Pixel 4 XL</h2>
                <Button
                    variant="outline-light"
                    onClick={() => setThirdModalShow(true)}
                >
                    <div class="mainheight">
                        <img
                            alt="Google Pixel 4 XL"
                            src={thirdmain}
                            class="mainimg"
                        />
                    </div>
                </Button>
                <TopThreeModal
                    show={thirdModalShow}
                    onHide={() => setThirdModalShow(false)}
                    imageArray={imagesThreeArray}
                    videoSrc="0gizLT97cKo"
                />
                <div class="tech-specs">
                    <div class="tech-specs-row">
                        <span class="rleft">Release Date</span>
                        <span>10/24/2019</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">OS</span>
                        <span>Android</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Processor</span>
                        <span>Octa-core, 2840 MHz</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">RAM</span>
                        <span>6GB LPDDR4</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Rear Camera</span>
                        <span>12.2 MP (OIS, PDAF)</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Front Camera</span>
                        <span>16 MP (Telephoto, OIS, PDAF)</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Internal Storage</span>
                        <span>128 GB</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Storage Expansion</span>
                        <span>NA</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Dimensions</span>
                        <span>6.31 x 2.96 x 0.32 inches</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Weight</span>
                        <span>6.81 oz</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Battery</span>
                        <span>3700 mAh</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Price</span>
                        <span>$999</span>
                    </div>
                </div>
                <a
                    class="green-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://store.google.com/us/product/pixel_4"
                >
                    BUY
                </a>
            </div>
        </div>
    );
}

export function CategoryRunnerUp() {
    return (
        <div class="runner-up">
            <h4 class="runner-up-header">Runner Up</h4>
            <div class="runner-up-2-cols">
                <div class="runner-up-name">LG V60 ThinQ</div>
                <div class="runner-up-description">
                    <div class="runner-up-specs">
                        Release Date - 03/20/2020, Rear Camera - 64 MP, Front
                        Camera - 13MP, Internal Storage - 128 GB, Storage
                        expansion - 2TB, Battery - 5000 mAh, Price $749{' '}
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.lg.com/us/mobile-phones/v60-thinq-dual-screen"
                        >
                            <b>BUY</b>
                        </a>
                    </div>
                </div>
                <div class="runner-up-name">OnePlus 7T</div>
                <div class="runner-up-description">
                    <div class="runner-up-specs">
                        Release Date - 10/18/2019, Rear Camera - 48 MP, Front
                        Camera - 12MP, Internal Storage - 128 GB, Battery - 3800
                        mAh, Price $499{' '}
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.oneplus.com/oneplus-7t"
                        >
                            <b>BUY</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function CategoryOpinion(props) {
    return (
        <div class="opinion">
            <h4 class="opinion-header">Opinion</h4>
            <div>{props.opinion}</div>
        </div>
    );
}

export function CategoryLastUpdated(props) {
    return (
        <small class="updated">
            Updated: {moment(props.lastUpdated).fromNow()}
        </small>
    );
}
const infoModalWord = (
    <>
        <h3>The criteria to look for when purchasing a PHONE.</h3>
        <div>
            <b>Camera</b> The higher the MP, the more details the camera will
            pick up.
        </div>
        <div>
            <b>Dimensions / Weight</b> It is recommended to get a phone that
            fits in your pocket/purse or your lifestyle.
        </div>
        <div>
            <b>Storage</b> The more MP the camera has, the more storage one
            photo will occupy.
        </div>
        <div>
            <b>Battery</b> The mAh (milliamp hour) allows you more time between
            charging your phone.
        </div>
        <div>
            <b>OS</b> Updates are usually provided by the brand of the phone.
        </div>
        <div>
            <b>Release Date</b> Phones usually come out annually. So you might
            want to wait for the next new release.
        </div>
    </>
);
const PhonesObject = {
    category: 'Phones',
    lastUpdated: [2020, 3, 7],
    infoModalWord: infoModalWord,
    opinion:
        'The Samsung Galaxy Ultra 5G has an AMAZING camera, good for capturing video and photo. The hardware on the phone rivals that of a computer. Combine with the Samsung Dex and monitor, the phone transforms into a decent computer. The bigger dimensions makes it harder for some hands to hold onto it.',
};
export default function Phones() {
    const { category, infoModalWord, lastUpdated, opinion } = PhonesObject;
    return (
        <>
            <CategoryBannerHeader
                category={category}
                infoModalWord={infoModalWord}
            />
            <CategoryTopThree />
            <CategoryRunnerUp />
            <CategoryOpinion opinion={opinion} />
            <CategoryLastUpdated lastUpdated={lastUpdated} />
        </>
    );
}
