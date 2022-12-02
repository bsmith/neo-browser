import ObjectItem from "./ObjectItem";

const ObjectList = ({objects}) => {
    if (!(objects && "map" in objects))
        return <p>Error: { JSON.stringify(objects) }</p>;
    return <>
        <ul>{objects.map((object) => <li key={object.id}><ObjectItem object={object}/></li>)}</ul>
        <p>{objects.length} objects found</p>
    </>
}

export default ObjectList;