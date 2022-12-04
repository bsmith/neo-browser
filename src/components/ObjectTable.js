import ObjectRow from "./ObjectRow";

let sortedBy = (array, keyFunc) => {
    /* the map created a new array that is then sorted in-place */
    /* 'decorate-sort-undecorate': https://en.wikipedia.org/wiki/Schwartzian_transform */
    const newArray =
        array
        .map(e => [keyFunc(e), e])
        .sort(([k1, _1], [k2, _2]) => {
            if (k1 < k2) return -1;
            if (k2 > k1) return 1;
            return 0;
        })
        .map(([_, e]) => e);
    return newArray;
}

const ObjectTable = ({objects, hazardousOnly}) => {
    if (!(objects && "map" in objects))
        return <p>Error: { JSON.stringify(objects) }</p>;

    const fields = ["name", "ca_date", "ca_dist", "vrel", "diameter", "magnitude", "hazardous"];

    const filteredObjects = hazardousOnly ? objects.filter(object => object.is_potentially_hazardous_asteroid) : objects;
    const sortedObjects = sortedBy(filteredObjects, object => object.close_approach_data[0].epoch_date_close_approach)

    const rowItems = sortedObjects.map(object => <ObjectRow key={object.id} fields={fields} object={object} />)

    return <table>
        <thead>
            <tr>
                <th>Object</th>
                <th>CA Date</th>
                <th>CA Distance</th>
                <th>Vrel</th>
                <th>Diameter</th>
                <th>Magnitude</th>
                <th>Hazardous?</th>
            </tr>
        </thead>
        <tbody>
            { rowItems }
        </tbody>
    </table>
}

export default ObjectTable;