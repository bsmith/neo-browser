import { Fragment } from "react";

const ObjectItem = ({object}) => {
    return <div>
        <details><summary>Debugging</summary><dl>{ Object.entries(object).map(([k, v]) => <Fragment key={k}><dt>{k}:</dt><dd><code>{JSON.stringify(v)}</code></dd></Fragment>)}</dl></details>
    </div>
};

export default ObjectItem;