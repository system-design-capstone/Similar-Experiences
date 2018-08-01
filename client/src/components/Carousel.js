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
        console.log('carousel mounted');
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
        const titleStyle = {
            color: '#767676'
        }
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
            <div className={styles.footer}>
            <div className={styles.columnTitle}><div style={{marginBottom: '15px'}}>Airbnb</div>
                <div className={styles.columnEntry}>Careers</div>
                <div className={styles.columnEntry}>Press</div>
                <div className={styles.columnEntry}>Policies</div>
                <div className={styles.columnEntry}>Help</div>
                <div className={styles.columnEntry}>Diversity & Belonging</div>
            </div>
            <div className={styles.columnTitle}><div style={{marginBottom: '15px'}}>Discover</div>
                <div className={styles.columnEntry}>Trust & Safety</div>
                <div className={styles.columnEntry}> Gift Cards</div>
                <div className={styles.columnEntry}>Airbnb Citizen</div>
                <div className={styles.columnEntry}>Business Travel</div>
                <div className={styles.columnEntry}>Guidebooks</div>
                <div className={styles.columnEntry}>Airbnbmag</div>
                <div className={styles.columnEntry}>Events</div>
            </div>
            <div className={styles.columnTitle}><div style={{marginBottom: '15px'}}>Hosting</div>
                <div className={styles.columnEntry}>Why Host</div>
                <div className={styles.columnEntry}>Hospitality</div>
                <div className={styles.columnEntry}>Responsible Hosting</div>
                <div className={styles.columnEntry}>Community Center</div>
            </div>
            <div className={styles.columnTitle}> 
            <a target="_blank" style={{marginRight: '10px', marginBottom: '15px'}} title="find us on Facebook" href="http://www.facebook.com/PLACEHOLDER"><img alt="follow me on facebook" height='25px' width='25px'src="http://www.bikethomson.com/wp-content/themes/bike_thomson/images/fb.png"/></a>
            <a target="_blank"  style={{marginRight: '10px', color: '#767676', marginBottom: '15px'}} title="follow me on twitter" href="http://www.twitter.com/PLACEHOLDER"><img style={{color:'#767676'}}alt="follow me on twitter" height='25px' width='25px' src="http://icons.iconarchive.com/icons/custom-icon-design/mono-general-3/32/twitter-icon.png"/></a>
            <a target="_blank" style={{color:'#767676', marginBottom: '15px'}} title="follow me on Instagram" href="http://www.instagram.com/PLACEHOLDER"><img alt="follow me on instagram" height='25px' width='25px' src="http://icons.iconarchive.com/icons/iconsmind/outline/32/Instagram-icon.png"/></a>    
                <div className={styles.columnEntry}>Terms</div>
                <div className={styles.columnEntry}>Privacy</div>
                <div className={styles.columnEntry}>Site Map</div>
            </div>
            </div>
        </div>
        )
    }
}

export default Carousel;