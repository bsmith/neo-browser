import { useState } from "react";

const Calendar = ({defaultValue, onChange}) => {
    const [localValue, setLocalValue] = useState(defaultValue);

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
    return <input type="text" value={localValue} onChange={handleChange} />
}

export default Calendar;