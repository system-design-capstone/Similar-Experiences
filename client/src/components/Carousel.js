import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Slide from './Slide.js';
import styles from '../styles/Carousel.css';
import scrollTo from './ScrollToAnimate.js';

 
class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slides: []
        }
        this.carouselViewport = React.createRef();
        this.handleLeftNav = this.handleLeftNav.bind(this);
        this.handleRightNav = this.handleRightNav.bind(this);
    }

    componentDidMount(){
        this.fetchSlides();
    }

    handleLeftNav(e) {
        let carouselViewport = this.carouselViewport.current;
        
        var numOfSlidesToScroll = 2.8225;
        var widthOfSlide = 120;
        var newPos = carouselViewport.scrollLeft -(widthOfSlide * numOfSlidesToScroll);
        var timeToMoveOneSlide = 200;
        var totalTimeToMove = (numOfSlidesToScroll * timeToMoveOneSlide);
        scrollTo(carouselViewport, newPos, 200, 'scrollLeft')
    }

    handleRightNav (e) {
        let carouselViewport  = this.carouselViewport.current;
        var numOfSlidesToScroll = 2.8225;
        var widthOfSlide = 120;
        var newPos = carouselViewport.scrollLeft +(widthOfSlide * numOfSlidesToScroll);
        var timeToMoveOneSlide = 200;
        var totalTimeToMove = (numOfSlidesToScroll * timeToMoveOneSlide);
        scrollTo(carouselViewport, newPos, 200, 'scrollLeft')
    }

    fetchSlides(){
        let option = {
            params: {
                starRating: 5
            }
        }
        axios
         .get('/api/simexp', option)
         .then(result => this.setState({ slides: result.data}))
    }
    
    render() {
        // console.log(this.carouselViewport.current)
        const { slides } = this.state;
        return (
        <div>
            <h1 className={styles.heading}>Similar experiences in Location</h1>
        <div className={styles.container}>
            <button className={styles.leftnav}
            onClick={this.handleLeftNav}
            >&#60;</button>
            <div ref={this.carouselViewport}className={styles.viewport} >
                {slides.map((slide, index)=>
                    <Slide 
                    key={index}
                    location={slide.location}
                    category={slide.category}
                    imgurl={slide.imgurl}
                    title={slide.title}
                    price={slide.price}
                    starRating={slide.starRating}
                    numOfReviews={slide.numOfReviews}
                    />
                )}
            </div>
            <button className={styles.rightnav}
            onClick={this.handleRightNav}
            >&#62;</button>
            </div>
        </div>
        )
    }
}

export default Carousel;