import ObjectItem from "./ObjectItem";

const ObjectList = ({objects}) => {
    return <ul>{objects.map((object) => <li><ObjectItem object={object}/></li>)}</ul>
}

export default ObjectList;