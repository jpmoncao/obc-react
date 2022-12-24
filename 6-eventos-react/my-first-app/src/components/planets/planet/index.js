import React from 'react'

import { DescriptionWithLink } from '../../shared/DescriptionWithLink'
import { GrayImg } from '../../shared/GrayImg'


export const Planet = props => {
    return (
        <div>
            <hr />
            <h4>{props.name}</h4>
            <DescriptionWithLink text={props.desc} descUrl={props.descUrl}/> <br/>
            <GrayImg imgUrl={props.imgUrl} />
        </div>
    )
}