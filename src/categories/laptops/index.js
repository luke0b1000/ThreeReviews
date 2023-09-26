import React from 'react';

import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Info } from '../../misc/Info';

// Modal
import { InfoModal, TopThreeModal } from '../../template/Modal';

// Images
import firstmain from './first/img/main.jpg';
import secondmain from './second/img/main.jpg';
import thirdmain from './third/img/main.png';

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
        <div className="category-header">
            <div className="current-category">{props.category}</div>
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
            <div className="right"></div>
        </div>
    );
}
export function CategoryTopThree() {
    const [firstModalShow, setFirstModalShow] = React.useState(false);
    const [secondModalShow, setSecondModalShow] = React.useState(false);
    const [thirdModalShow, setThirdModalShow] = React.useState(false);
    return (
        <div className="list-3-cols">
            <div className="each-item">
                <h2>Apple Mac Air</h2>
                <Button
                    variant="outline-light"
                    onClick={() => setFirstModalShow(true)}
                >
                    <div className="mainheight">
                        <img
                            alt="Apple Mac Air"
                            src={firstmain}
                            className="mainimg"
                        />
                    </div>
                </Button>
                <TopThreeModal
                    show={firstModalShow}
                    onHide={() => setFirstModalShow(false)}
                    imageArray={imagesOneArray}
                    videoSrc="hs1HoLs4SD0"
                />
                <div className="tech-specs">
                    <div className="tech-specs-row">
                        <span className="rleft">Processor</span>
                        <span>3.2 Ghz</span>
                    </div>
                    <div className="tech-specs-row">
                        <span className="rleft">Memory</span>
                        <span>8 GB</span>
                    </div>
                    <div className="tech-specs-row">
                        <span className="rleft">Storage</span>
                        <span>256 GB</span>
                    </div>
                    <div className="tech-specs-row">
                        <span className="rleft">Price</span>
                        <span>$999</span>
                    </div>
                </div>
                <a
                    className="green-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.apple.com/shop/buy-mac/macbook-air"
                >
                    BUY
                </a>
            </div>
            <div className="each-item">
                <h2>Surface Pro</h2>
                <Button
                    variant="outline-light"
                    onClick={() => setSecondModalShow(true)}
                >
                    <div className="mainheight">
                        <img
                            alt="Surface Pro"
                            src={secondmain}
                            className="mainimg"
                        />
                    </div>
                </Button>
                <TopThreeModal
                    show={secondModalShow}
                    onHide={() => setSecondModalShow(false)}
                    imageArray={imagesTwoArray}
                    videoSrc="V4Hwi3o2X0E"
                />
                <div className="tech-specs">
                    <div className="tech-specs-row">
                        <span className="rleft">Processor</span>
                        <span>3.7 Ghz</span>
                    </div>
                    <div className="tech-specs-row">
                        <span className="rleft">Memory</span>
                        <span>8 GB</span>
                    </div>
                    <div className="tech-specs-row">
                        <span className="rleft">Storage</span>
                        <span>256 GB</span>
                    </div>
                    <div className="tech-specs-row">
                        <span className="rleft">Price</span>
                        <span>$1,299</span>
                    </div>
                </div>
                <a
                    className="green-button"
                    target="_black"
                    href="https://www.microsoft.com/en-us/p/surface-pro-7/8N17J0M5ZZQS?activetab=overview"
                >
                    BUY
                </a>
            </div>
            <div className="each-item">
                <h2>Dell XPS 13</h2>
                <Button
                    variant="outline-light"
                    onClick={() => setThirdModalShow(true)}
                >
                    <div className="mainheight">
                        <img
                            alt="Dell XPS 13"
                            src={thirdmain}
                            className="mainimg"
                        />
                    </div>
                </Button>
                <TopThreeModal
                    show={thirdModalShow}
                    onHide={() => setThirdModalShow(false)}
                    imageArray={imagesThreeArray}
                    videoSrc="-UXT_dEa8YQ"
                />
                <div className="tech-specs">
                    <div className="tech-specs-row">
                        <span className="rleft">Processor</span>
                        <span>3.6 Ghz</span>
                    </div>
                    <div className="tech-specs-row">
                        <span className="rleft">Memory</span>
                        <span>8 GB</span>
                    </div>
                    <div className="tech-specs-row">
                        <span className="rleft">Storage</span>
                        <span>256 GB</span>
                    </div>
                    <div className="tech-specs-row">
                        <span className="rleft">Price</span>
                        <span>$1,242</span>
                    </div>
                </div>
                <a
                    className="green-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.dell.com/en-us/shop/cty/pdp/spd/xps-13-9300-laptop"
                >
                    BUY
                </a>
            </div>
        </div>
    );
}
export function CategoryRunnerUp() {
    return (
        <div className="runner-up">
            <h4 className="runner-up-header">Runner Up</h4>
            <div className="runner-up-2-cols">
                <div className="runner-up-name">Google PixelBook Go</div>
                <div className="runner-up-description">
                    <div className="runner-up-specs">
                        Processor - 4.2, Memory 16 GB, Storage 256 GB, Price
                        $1,399{' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://store.google.com/config/pixelbook_go"
                        >
                            <b>BUY</b>
                        </a>
                    </div>
                </div>
                <div className="runner-up-name">Lenovo Thinkpad X1 Carbon</div>
                <div className="runner-up-description">
                    <div className="runner-up-specs">
                        Processor - 3.6, Memory 8 GB, Storage 256 GB, Price
                        $1242{' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-x/X1-Carbon-Gen-7/p/22TP2TXX17G"
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
        <div className="opinion">
            <h4 className="opinion-header">Opinion</h4>
            <div>{props.opinion}</div>
        </div>
    );
}
export function CategoryLastUpdated(props) {
    return (
        <small className="updated">
            Updated: {moment(props.lastUpdated).fromNow()}
        </small>
    );
}

const infoModalWord = (
    <>
        <h3>The criteria to look for when purchasing a LAPTOP.</h3>
        <div>
            <b>Storage / Hard Drive</b> <u>MUST</u> be Solid State Drive (SSD).
            Size depends on your storage needs, minimum 256 GB.
        </div>
        <div>
            <b>Keyboard / Hand comfort</b> It is recommended to try typing,
            moving mouse pointer in middle of laptop and the trackpad
            sensitivity near the palm rest is something you need test at the
            store.
        </div>
        <div>
            <b>Memory / RAM</b> Recommended to get at least 16 GB, but 8 GB is
            fine. The more applications you keep running at the same time, the
            more you need.
        </div>
        <div>
            <b>Weight / Size Dimensions</b> This depends on how often you move
            with the laptop.
        </div>
        <div>
            <b>Processor / CPU</b> Not as important anymore as long as your
            Storage and Memory is good.
        </div>
        <div>
            <b>Peripheral connections</b> Look out for output display if you do
            presentation, amount of USB slots.
        </div>
        <div>
            <b>Other consideration</b> Battery Life, Graphics, Operating System
        </div>
    </>
);

const LaptopsObject = {
    category: 'Laptops',
    lastUpdated: [2020, 3, 1],
    opinion:
        "Apple hardware is comparable with the others and with a better price point. Apple physical design is as attractive as that of the MacOS. If you wanted to, you have the option to put Windows 10 on Apple hardware, which isn't the case with PCs. Personally I would put linux on it. Another advantage is the keyboard, when you use it all the time, it starts to make an impact on your comfort level.",
    infoModalWord: infoModalWord,
};

export default function Laptop() {
    const { category, opinion, lastUpdated } = LaptopsObject;
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
