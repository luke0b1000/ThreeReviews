import React from 'react';
import moment from 'moment';

export function CategoryBannerHeader(props) {
    return (
        <div
            class="category-header"
            style={{ color: '#FCF6F5FF', backgroundColor: '#990011FF' }}
        >
            <div class="current-category">{props.category}</div>
            <div class="right"></div>
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
const paragraph = (
    <>
        <div>
            <div>
                <b>TL;DR</b>
            </div>
            <div style={{ textAlign: 'left' }}>
                <p>
                    While mortality affects the elderly (age 50+) and
                    immunocompromised.
                </p>
                <p>
                    It's recommended to boost your immune system, by having a
                    healthy diet, such as getting the recommended daily value of
                    vitamins. Make sure to eat your fruits and vegetable or
                    vitamin pills, and reducing your stress. Practice social
                    distancing and try not to touch your face.
                </p>
                <p> Symptoms</p>
                <p>
                    These symptoms may appear 2-14 days after exposure (based on
                    the incubation period of MERS-CoV viruses).
                </p>
                <ul>
                    <li>Fever</li>
                    <li>Cough</li>
                    <li>Shortness of breath</li>
                </ul>
                <p>
                    How to wash your hands:
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://youtu.be/IisgnbMfKvI"
                    >
                        <b> Watch Here!</b>
                    </a>
                </p>
                <p>
                    CDC recommend that people wear a facemask to protect
                    themselves from respiratory illnesses, including COVID-19.
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover.html"
                    >
                        <b> More info here.</b>
                    </a>
                </p>
                <p>
                    If a face mask has an “N95” designation, that means that it
                    will filter out 95% of particles as small as 0.3 microns
                    from the air. The viruses in the coronavirus family are all
                    quite large (at least by virus standards), and on average
                    they are a little over 0.1 microns.
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://smartairfilters.com/en/blog/coronavirus-pollution-masks-n95-surgical-mask/"
                    >
                        <b> More info here.</b>
                    </a>
                </p>
                <p>
                    How long does Coronavirus live on surface?
                    <ul>
                        <li>Aerosols – up to 3 hours</li>
                        <li>Cardboard – up to 24 hours</li>
                        <li>Copper – up to 4 hours</li>
                        <li>Stainless steel and plastic – up to 72 hours</li>
                    </ul>
                </p>
                <p>
                    “In general, because of poor survivability of these
                    coronaviruses on surfaces, there is likely very low risk of
                    spread from food products or packaging that are shipped over
                    a period of days or weeks at ambient, refrigerated, or
                    frozen temperatures.”
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.cnn.com/interactive/2020/health/coronavirus-questions-answers/"
                    >
                        <b> More info here.</b>
                    </a>
                </p>
                <p>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html"
                    >
                        <b>More info here.</b>
                    </a>
                </p>
                <p>
                    Graphs on confirmed coronavirus cases:
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"
                    >
                        <b> More info here.</b>
                    </a>
                </p>
                <p>
                    Created my own daily delta from John Hopkins data.
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://d5xmyzlbmz0pb.cloudfront.net"
                    >
                        <b> More Info Here.</b>
                    </a>
                </p>
            </div>
        </div>
    </>
);
const coronavirusObject = {
    category: 'Coronavirus',
    lastUpdated: [2020, 3, 9],
    body: paragraph,
};
export default function Coronavirus() {
    const { category, lastUpdated, body } = coronavirusObject;
    return (
        <>
            <CategoryBannerHeader category={category} />
            <div class="centerClass">{body}</div>
            <CategoryLastUpdated lastUpdated={lastUpdated} />
        </>
    );
}
