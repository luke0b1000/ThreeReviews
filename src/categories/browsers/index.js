import React from 'react';
import moment from 'moment';

// Images
import firstmain from './first/img/main.png';
import secondmain from './second/img/main.png';
import thirdmain from './third/img/main.svg';

export function CategoryBannerHeader(props) {
    return (
        <div class="category-header">
            <div class="current-category">{props.category}</div>
            <div class="right"></div>
        </div>
    );
}
export function CategoryTopThree() {
    return (
        <div class="list-3-cols">
            <div class="each-item">
                <h2>Google Chrome</h2>
                <div class="mainheight">
                    <img alt="Google Chrome" src={firstmain} class="mainimg" />
                </div>
                <div class="tech-specs">
                    <div class="tech-specs-row">
                        <span class="rleft">Engine</span>
                        <span>Blink</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Platform</span>
                        <span>Windows, macOS, iOS, Linux, Android</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Extensions</span>
                        <span>Supported</span>
                    </div>
                </div>
                <a
                    class="green-button"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.google.com/chrome/"
                >
                    Get it Here!
                </a>
            </div>

            <div class="each-item">
                <h2>Firefox</h2>
                <div class="mainheight">
                    <img alt="Firefox" src={secondmain} class="mainimg" />
                </div>
                <div class="tech-specs">
                    <div class="tech-specs-row">
                        <span class="rleft">Engine</span>
                        <span>Gecko</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Platform</span>
                        <span>Windows, macOS, iOS, Linux, Android</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Extensions</span>
                        <span>Supported</span>
                    </div>
                </div>
                <a
                    class="green-button"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://firefox.com"
                >
                    Get it Here!
                </a>
            </div>

            <div class="each-item">
                <h2>Microsoft Edge</h2>
                <div class="mainheight">
                    <img alt="Microsoft Edge" src={thirdmain} class="mainimg" />
                </div>
                <div class="tech-specs">
                    <div class="tech-specs-row">
                        <span class="rleft">Engine</span>
                        <span>Blink</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Platform</span>
                        <span>Windows, macOS, iOS, Android</span>
                    </div>
                    <div class="tech-specs-row">
                        <span class="rleft">Extensions</span>
                        <span>Supported</span>
                    </div>
                </div>
                <a
                    class="green-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.microsoft.com/en-us/edge"
                >
                    Get it Here!
                </a>
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
const browsersObject = {
    category: 'Browsers',
    lastUpdated: [2020, 3, 9],
    opinion:
        "Google Chrome has everything you need in a browser. One of the main advantages is the portability of your user profile across different platforms. It also has a lot of extensions that will supercharge your experience. The Dev Tools are pretty amazing from a programmer's perspective.",
};
export default function Browsers() {
    const { category, lastUpdated, opinion } = browsersObject;
    return (
        <>
            <CategoryBannerHeader category={category} />
            <CategoryTopThree />
            <CategoryOpinion opinion={opinion} />
            <CategoryLastUpdated lastUpdated={lastUpdated} />
        </>
    );
}
