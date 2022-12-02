import ObjectRow from "./ObjectRow";

const ObjectTable = ({objects}) => {
    if (!(objects && "map" in objects))
        return <p>Error: { JSON.stringify(objects) }</p>;

    const fields = ["name", "ca_date", "ca_dist", "vrel", "diameter", "magnitude"];

    const rowItems = objects.map(object => <ObjectRow fields={fields} object={object} />)

    return <table>
        <thead>
            <tr>
                <th>Object</th>
                <th>CA Date</th>
                <th>CA Distance</th>
                <th>Vrel</th>
                <th>Diameter</th>
                <th>Magnitude</th>
            </tr>
        </thead>
        <tbody>
            { rowItems }
        </tbody>
    </table>
}

export default ObjectTable;