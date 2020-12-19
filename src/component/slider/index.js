import React, { Component, useState, useEffect}  from 'react';
import Fade from 'react-reveal/Fade';
import {ITEMS} from '../../shared/slider';
import './style.css'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
import Button from 'reactstrap/lib/Button';

  const Slider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(ITEMS)
        return () => {
            console.log('items rendred')
        }
    }, [0])
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img className="img-fluid slider-images" src={item.src} alt={item.altText}  />
          <Fade bottom>
          <div className="caption col-12 col-md-4">
            <CarouselCaption captionHeader={item.caption} className="slider-caption d-none d-md-block mb-5" />
            <Button className="button-slider ml-5 mt-5" color="danger" >Discover Now</Button>
          </div>
          </Fade>
          
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }
  
  export default Slider;
