import React, { useEffect, useState } from 'react'
import { DescriptionWithLink } from '../../shared/DescriptionWithLink'
import { GrayImg } from '../../shared/GrayImg'

const getSatellites = async () => {
    await fetch(`http://localhost:3000/api/id/${props.id}`)
        .then(response => {
            let data = response.json()
            return data
        })
        .catch(
            reason => console.error(reason)
        )
}
export const Planet = props => {
    const [satellites, setSatellites] = useState([])

    useEffect(() => {
        getSatellites().then(data => {
            setSatellites(data['satellites'].name)
        })
    }, [])

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
            <ul> Satélites
                {
                    satellites.map((satellite, index) => <li key={index}>{satellite}</li>)
                }
            </ul>
        </div>
    )
}