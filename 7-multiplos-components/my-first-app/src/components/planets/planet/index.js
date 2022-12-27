import React from 'react'

import { DescriptionWithLink } from '../../shared/DescriptionWithLink'
import { GrayImg } from '../../shared/GrayImg'


export const Planet = props => {
    const names = ['a', 'b', 'c', 'd', 'e', 'f']

    let title

    if (props.titleWithUnderline)
        title = <u><h4>{props.name}</h4></u>
    else
        title = <h4>{props.name}</h4>

    return (
        <div>
            <hr />
            {title}
            <DescriptionWithLink text={props.desc} descUrl={props.descUrl} /> <br />
            <GrayImg imgUrl={props.imgUrl} gray={props.grayImg} />

            <h4>Satélites</h4>
            <ul>
                {
                    names.map(name =>
                        <li>Satélite {name}</li>
                    )
                }
            </ul>
        </div>
    )
}