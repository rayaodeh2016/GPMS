
import React from "react";

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide1 from "../img/startup-593327_1920.jpg";
import Slide2 from "../img/student-849825_1920.jpg";
import Slide3 from "../img/work-731198_1920.jpg";
import Slide4 from "../img/computer-1245714_1920.jpg";
import 'aos/dist/aos.css';
import axios from 'axios';

class BootstrapCarouselComponent extends React.Component {
    state = {
        Slider: []
    }
    componentDidMount() {
        axios.get('js/SideData.json').then(res => { this.setState({ Slider: res.data.Slider}) })
    }
    render() {
        const { Slider } = this.state;
        const OverviewList = Slider.map((Value) => {
            return (
            
                    <Carousel.Item key={Value.id}>
                        <img
                            className={Value.className}
                            src={Value.src}
                            alt={Value.alt}


                        />

                    </Carousel.Item>
               

            )
        });
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
                                {OverviewList}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default BootstrapCarouselComponent;