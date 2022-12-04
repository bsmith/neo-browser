import { useId } from "react";

const SearchForm = ({value, onChange}) => {
    const uniqId = useId();

    const handlers = {
        startDate: (event) => {
            const newValue = {...value};
            newValue.startDate = event.target.value;
            onChange(newValue);
        },
        hazardousOnly: (event) => {
            const newValue = {...value};
            console.log("SearchForm.handlers.hazardousOnly", event.target.checked);
            newValue.hazardousOnly = event.target.checked ? true : false;
            onChange(newValue);
        },
    };

    return <form className="SearchForm">
        <div>
            <label htmlFor={uniqId + "date"}>Start date: </label>
            <input id={uniqId + "date"} type="date" value={value.startDate} onChange={handlers.startDate} />
        </div>
        <div>
            <label htmlFor={uniqId + "hazardousOnly"}>Hazardous objects only? </label>
            <input id={uniqId + "hazardousOnly"} type="checkbox" checked={value.hazardousOnly} onChange={handlers.hazardousOnly} />
        </div>
    </form>
}

export default SearchForm;