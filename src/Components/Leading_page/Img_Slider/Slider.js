import React, { useState, useEffect } from "react";

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

function BootstrapCarouselComponent() {

    const [Slider, setSlider] = useState([]);

    useEffect(() => {
        Axios.get('js/Data.json').then(res => { setSlider(res.data.Slider) });
    }, [])

    const Item = Slider.map((item) => {
        return (
            <Carousel.Item key={item.id}>
                <img className={item.className_1} src={item.src_1} icon={item.alt_1} alt=""/>
            </Carousel.Item>
        )
    })

    return (
        <div>
            <div className='container-fluid' id="slider" autoPlay interval="0.2" transitionTime="1" style={{ paddingTop: "80px" }}>
                <div className="row">
                    <div className="col-sm-12">
                    </div>
                </div>
                <div className="row">
                    <div className="col-15">
                        <Carousel>
                            {Item}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BootstrapCarouselComponent;