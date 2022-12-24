import React from 'react'

import { GrayImg } from '../../shared/GrayImg'


export const Planet = props => {
    return (
        <div>
            <hr />
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
            <GrayImg imgUrl={props.imgUrl} />
        </div>
    )
}