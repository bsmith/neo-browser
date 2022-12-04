import ObjectRow from "./ObjectRow";

const ObjectTable = ({objects}) => {
    if (!(objects && "map" in objects))
        return <p>Error: { JSON.stringify(objects) }</p>;

    const fields = ["name", "ca_date", "ca_dist", "vrel", "diameter", "magnitude", "hazardous"];

    let sortedObjects = [...objects];
    sortedObjects.sort((a, b) => a.close_approach_data[0].epoch_date_close_approach - b.close_approach_data[0].epoch_date_close_approach);

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