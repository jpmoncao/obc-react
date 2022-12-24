import React, { Fragment } from 'react'
import './style.css'

export const GrayImg = props => {
    return (
        <Fragment>
            <img alt='Foto do planeta' className={props.gray ? 'gray-image' : 'color-image'} src={props.imgUrl} />
        </Fragment>
    )
}