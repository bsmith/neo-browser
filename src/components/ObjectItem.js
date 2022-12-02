const ObjectItem = ({object}) => {
    return <div>
        <details><summary>Debugging</summary><dl>{ Object.entries(object).map(([k, v]) => <><dt>{k}:</dt><dd><code>{JSON.stringify(v)}</code></dd></>)}</dl></details>
    </div>
};

export default ObjectItem;