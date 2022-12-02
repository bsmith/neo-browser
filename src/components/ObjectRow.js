/* NB. There might be multiple close-approaches!
   Need to unwrap this somewhere! XXX */

const formatters = {
    name(object) {
        return <a href={object.links.self}>{object.name}</a>;
    },
    ca_date(object) {
        if (object.close_approach_data.length > 1)
            console.warn(object);
        return object.close_approach_data[0].close_approach_date_full;
    },
    ca_dist(object) {
        return Number(object.close_approach_data[0].miss_distance.lunar).toFixed(3) + " LD";
    },
    vrel(object) {
        return object.close_approach_data[0].relative_velocity.kilometers_per_seconds + " km/s";
    },
    diameter(object) {
        const minMax = object.estimated_diameter.meters;
        return Number(minMax.estimated_diameter_min).toFixed(1) + " m - " + Number(minMax.estimated_diameter_max).toFixed(1) + " m";
    },
    magnitude(object) {
        return object.absolute_magnitude_h;
    }
}

const ObjectRow = ({fields, object}) => {
    const tdItems = fields.map(field => <td>{formatters[field](object)}</td>);

    return <tr>
        { tdItems }
    </tr>
}

export default ObjectRow;