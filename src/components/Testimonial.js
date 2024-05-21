
import React, { useEffect } from 'react';
import { useState } from 'react';


import axios from 'axios';

function Testimonial(props) {
    const Index = props.index;
    const item = props.item;


    var _class = ''
    if (Index == 0) {
        _class = 'active'
    }
    var _starts = []
    for (let i = 0; i < item.rating; i++) {
        _starts.push('1')
    }
    return (
        <div className={`carousel-item ${_class}`}>
            <figure className="text-center">
                <blockquote className="blockquote">
                    <p>{item.reviews}</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    {
                        _starts.map((item, index) => {
                            return <i key={index} className="fa fa-star text-warning"></i>
                        })
                    }
                    <cite title="customer name" > {`${item.user.first_name}  ${item.user.last_name}`}</cite>
                </figcaption>
            </figure>
        </div>
    );
}
export default Testimonial;