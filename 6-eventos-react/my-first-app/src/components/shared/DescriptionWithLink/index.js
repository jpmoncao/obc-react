import React, { Fragment } from 'react'

export const DescriptionWithLink = props => {
    if (props.descUrl) {
        return (
            <Fragment>
                <p>{props.text}</p>
                <p>
                    <a href={props.descUrl}>Confira mais</a>
                </p>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <p>{props.text}</p>
            </Fragment>
        )
    }
}