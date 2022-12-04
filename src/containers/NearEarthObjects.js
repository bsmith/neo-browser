import { useEffect, useState } from 'react';

import Calendar from '../components/Calendar';
import ObjectList from "../components/ObjectList";
import ObjectTable from '../components/ObjectTable';

const feedURL = (endpoint, {start_date, end_date, api_key}) => {
    const url = new URL(endpoint);
    url.searchParams.append("api_key", api_key);
    if (start_date)
        url.searchParams.append("start_date", start_date);
    if (end_date)
        url.searchParams.append("end_date", end_date);
    console.debug("feedURL", url.href);
    return url;
}

const fetchObjects = async (endpoint, args) => {
    const url = feedURL(endpoint, args);
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("fetchObjects", data);
    return Object.values(data.near_earth_objects).flat(1);
}

/* add days of standard/equal length to the starting date */
const addDaysToDate = (date, days) => {
    const match = date.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/);
    console.log("addDaysTodate", date, match);

    date = new Date(match[1], match[2] - 1, match[3]);
    console.log("date", date, date.getTime());
    /* add an extra ten seconds in case there's something with leap seconds */
    date.setTime(date.getTime() + 3600000 * 24 * days + 10000);
    console.log("after", date, date.getTime());

    return date.toISOString().slice(0, 10);
};

const NearEarthObjects = ({endpoint, api_key}) => {
    const [startDate, setStartDate] = useState("2022-12-02");
    const [objects, setObjects] = useState([]);
    /* bad design here: fetching contains null or a message. should really have a bool and a string separately */
    const [fetching, setFetching] = useState(null);

    /* XXX Some kind of error handling? */
    useEffect(() => {
        setFetching("fetchObjects");
        const endDate = addDaysToDate(startDate, 3);
        fetchObjects(endpoint, {start_date: startDate, end_date: endDate, api_key})
            .catch((err) => {
                console.error(err);
                setFetching(JSON.stringify(err))
            })
            .then(setObjects)
            .then(() => setFetching(false));
    }, [startDate, endpoint, api_key]);

    return <section>
        <h2>Browse upcoming close approaches</h2>
        <Calendar defaultValue={startDate} onChange={setStartDate} />
        <p>Status: {fetching ? "Fetching... " + fetching : "fetched"}</p>
        <ObjectTable objects={objects} />
        <ObjectList objects={objects} />
    </section>
};

export default NearEarthObjects;