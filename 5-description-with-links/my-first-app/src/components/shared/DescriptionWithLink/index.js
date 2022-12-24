import React, { Fragment } from 'react'

export const DescriptionWithLink = props => {
    return (
        <Fragment>
            <p>{props.text}</p>
            <a href={props.descUrl}>Confira mais</a>
        </Fragment>
    )
}