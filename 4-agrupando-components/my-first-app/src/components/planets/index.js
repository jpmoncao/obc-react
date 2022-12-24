import React, { Fragment } from 'react'
import { Planet } from './planet'

export const Planets = () => {
    return (
        <Fragment>
            <h3>Planet List</h3>
            <hr />
            <Planet />
            <hr />
            <Planet />
            <hr />
            <Planet />
        </Fragment>
    )
}