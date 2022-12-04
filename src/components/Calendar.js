import { useState, useId } from "react";

const Calendar = ({defaultValue, onChange}) => {
    const [localValue, setLocalValue] = useState(defaultValue);
    const uniqId = useId();

    const handleChange = (event) => {
        const value = event.target.value;
        setLocalValue(value);

        /* some kind of date parsing */
        /* only send when a valid date! */
        if (value.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)) {
            console.debug("Calendar.handleChange", value);
            onChange(value);
        }
    }
    return <form className="Calendar">
        <label htmlFor={uniqId + "date"}>Start date:</label>
        <input id={uniqId + "date"} type="date" value={localValue} onChange={handleChange} />
    </form>
}

export default Calendar;