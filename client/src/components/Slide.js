import React from 'react';
import styles from '../styles/Slide.css'

class Slide extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            stars: this.props.starRating,
            categoryColors: ['#0f6a81','#866246','#96242c', '#6b7c18', '#c65126','#607438'],
            categoryColor: ''
        }
    }
    componentDidMount(){
        this.randomColor();
    }
    randomColor() {
        let random = this.state.categoryColors[Math.floor(Math.random() * this.state.categoryColors.length)];
        this.setState({
            categoryColor: random
        })
    }
    render() {
        const { location, category, imgurl, title, price, starRating, numOfReviews } = this.props;
        const catStyle = {
            color: this.state.categoryColor
        }
        const starStyle = {
            color: '#008489'
        }
        let starDiv;
        if(this.state.stars === 1){
            starDiv = <div style={starStyle}>&#11089;
            <span className={styles.numOfReviews}>{numOfReviews}</span>
            </div>
        }
        else if(this.state.stars === 2){
            starDiv = <div style={starStyle}>&#11089;&#11089;
                <span className={styles.numOfReviews}>{numOfReviews}</span>
                </div>        }
        else if(this.state.stars === 3){
            starDiv = <div style={starStyle}>&#11089;&#11089;&#11089;
                <span className={styles.numOfReviews}>{numOfReviews}</span>
                </div>        }
        else if(this.state.stars === 4){
            starDiv = <div style={starStyle}>&#11089;&#11089;&#11089;&#11089;
                <span className={styles.numOfReviews}>{numOfReviews}</span>
                </div>        
        }
        else if(this.state.stars === 5){
            starDiv = <div style={starStyle}>&#11089;&#11089;&#11089;&#11089;&#11089;
                <span className={styles.numOfReviews}>{numOfReviews}</span>
                </div>
        }
        
        return (
            <div className={styles.slide}>
                <img className={styles.img}src={imgurl}/>
                <div className={styles.category} style={catStyle}>{category} &#183; ${price}</div>
                <div className={styles.title}>{title}</div>
                <div className={styles.price}>${price} per person</div>
                <div>
                <div>{starDiv}</div>
                </div>
            </div>
        )
    }
}

export default Slide;