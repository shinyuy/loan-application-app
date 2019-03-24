import React from 'react';
import { Carousel } from 'react-materialize';
import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';
import { Slider, Slide } from 'react-materialize';

function Carrousel() {

    return (
        <Slider>
            <Slide
                src={slide_one}
                fullscreen={true}
                title="Lets help you reach your goals!">
                Dian was able to achieve hers.
  </Slide>
            <Slide
                src={slide_two}
                fullscreen={true}
                title="With us you can have your own start up"
                placement="left">
                Meet young entrepreneurs using our services.
  </Slide>
            <Slide
                src={slide_three}
                fullscreen={true}
                title="You can trust us"
                placement="right">
                We keep our word, making sure every figure is accurate.
  </Slide>
        </Slider>
    )
}
export default Carrousel;
