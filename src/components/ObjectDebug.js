import { Fragment } from "react";

const ObjectDebug = ({object}) => {
    return <>
        <details><summary>Debugging</summary><dl>{ Object.entries(object).map(([k, v]) => <Fragment key={k}><dt>{k}:</dt><dd><code>{JSON.stringify(v)}</code></dd></Fragment>)}</dl></details>
    </>
};

export default ObjectDebug;