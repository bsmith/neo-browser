const ObjectItem = ({object}) => {
    return <div>
        { Object.entries(object).map(([k, v]) => <div><b>{k}:</b> {JSON.stringify(v)}</div>)}
    </div>
};

export default ObjectItem;