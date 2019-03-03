import React, { Component } from 'react';
import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices: [100,150,250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam a fugiat expedita, laudantium, harum nostrum fugit tenetur ipsum tempora error repellendus sit amet deleniti culpa, magnam quibusdam inventore atque at.',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, delectus similique. Vitae praesentium amet id at illum voluptate, repellat error quod. Incidunt vero est iure nihil praesentium molestias dolores.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nulla doloremque impedit porro sint nihil accusantium repellat cum laudantium saepe, enim ab, aliquid obcaecati quia tempore eos mollitia ducimus magnam!'
        ],
        linkto: ['https://sales/b', 'https://sales/m', 'https://sales/s'],
        delay: [500,0,500]
    }

    showBoxes = () => (
        
        this.state.prices.map((box,i) => (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton 
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Pricing;