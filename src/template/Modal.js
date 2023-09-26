import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

export function InfoModal(props) {
    const { infoModalWord } = props;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>{infoModalWord}</Modal.Body>
        </Modal>
    );
}

export function TopThreeModal(props) {
    const { imageArray, videoSrc } = props;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Carousel interval={null}>
                    {imageArray.map(function(image) {
                        return (
                            <Carousel.Item key={image}>
                                <div class="modalContainer">
                                    <img
                                        alt={image}
                                        class="modalItem"
                                        key={image}
                                        src={image}
                                    />
                                </div>
                            </Carousel.Item>
                        );
                    })}
                    {videoSrc ? (
                        <Carousel.Item>
                            <div class="modalContainer">
                                <iframe
                                    title={videoSrc}
                                    class="modalItem"
                                    src={`https://www.youtube.com/embed/${videoSrc}`}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </Carousel.Item>
                    ) : (
                        ''
                    )}
                </Carousel>
            </Modal.Body>
        </Modal>
    );
}
