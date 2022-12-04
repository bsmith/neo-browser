import { useEffect, useState } from 'react';

import SearchForm from '../components/SearchForm';
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

/* XXX some kind of cache? */
let lastFinishedFetch = null;
const fetchObjects = async (endpoint, args) => {
    const url = feedURL(endpoint, args);
    if (lastFinishedFetch && lastFinishedFetch.urlHref === url.href) {
        console.log("fetchObjects using cache");
        return lastFinishedFetch.objects;
    }
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("fetchObjects", data);
    const objects = Object.values(data.near_earth_objects).flat(1);
    lastFinishedFetch = { urlHref: url.href, objects };
    return objects;
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

const todaysDate = () => {
    return new Date().toISOString().slice(0, 10)
}

const NearEarthObjects = ({endpoint, api_key}) => {
    const [formValues, setFormValues] = useState({
        startDate: todaysDate(),
        hazardousOnly: false,
    });
    const [objects, setObjects] = useState([]);
    /* bad design here: fetching contains null or a message. should really have a bool and a string separately */
    const [fetching, setFetching] = useState(null);

    /* XXX Some kind of error handling? */
    useEffect(() => {
        setFetching("fetchObjects");
        const endDate = addDaysToDate(formValues.startDate, 3);
        fetchObjects(endpoint, {start_date: formValues.startDate, end_date: endDate, api_key})
            .catch((err) => {
                console.error(err);
                setFetching(JSON.stringify(err))
            })
            .then(setObjects)
            .then(() => setFetching(false));
    }, [formValues, endpoint, api_key]);

    return <section>
        <h2>Browse upcoming close approaches</h2>
        <SearchForm value={formValues} onChange={setFormValues} />
        <p>Status: {fetching ? "Fetching... " + fetching : "fetched"}</p>
        <ObjectTable objects={objects} hazardousOnly={formValues.hazardousOnly} />
    </section>
};

export default NearEarthObjects;