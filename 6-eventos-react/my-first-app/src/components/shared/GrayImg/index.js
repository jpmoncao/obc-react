import React, { Fragment } from 'react'
import './style.css'

export const GrayImg = props => {
    return (
        <Fragment>
            <img class='gray-image' src={props.imgUrl} />
        </Fragment>
    )
}