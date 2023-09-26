import React from 'react';

import moment from 'moment';
// import Button from 'react-bootstrap/Button';
// import { Info } from './misc/Info';

// Modal
// import { InfoModal, TopThreeModal } from './template/Modal';

export function CategoryBannerHeader(props) {
    // const { infoModalWord } = props;
    // const [infoModalShow, setInfoModalShow] = React.useState(false);
    return (
        <div
            class="category-header"
            style={{ backgroundColor: '#00539CFF', color: '#EEA47FFF' }}
        >
            <div class="current-category">{props.category}</div>
            <div class="right"></div>
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

const AboutObject = {
    category: 'About',
    lastUpdated: [2020, 3, 7],
};
function About() {
    const { category, lastUpdated } = AboutObject;
    return (
        <>
            <CategoryBannerHeader category={category} />
            <div class="centerClass">
                A site about things we care about. This is an opinionated site.
                <div>Choices are given here.</div>
                <p />
                <iframe
                    title="About"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/NwoohzjscHY"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <CategoryLastUpdated lastUpdated={lastUpdated} />
        </>
    );
}

export default About;
