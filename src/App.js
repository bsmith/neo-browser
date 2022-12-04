import NearEarthObjects from './containers/NearEarthObjects';
import './App.css';
import api_key from './nasaKey.mjs';

const ENDPOINT = "https://api.nasa.gov/neo/rest/v1/feed";

function App() {
    return <>
        <header className="App">
            <h1>Near Earth Objects</h1>
        </header>
        <main className="App">
            <section className="App-about">
                <h2>About</h2>
                <figure>
                <blockquote cite="https://en.wikipedia.org/w/index.php?title=Near-Earth_object&oldid=1125212991">A near-Earth object (NEO) is any small Solar System body whose orbit brings it into proximity with Earth. By convention, a Solar System body is a NEO if its closest approach to the Sun (perihelion) is less than 1.3 astronomical units (AU).[2] If a NEO's orbit crosses the Earth's orbit, and the object is larger than 140 meters (460 ft) across, it is considered a potentially hazardous object (PHO).[3]</blockquote>
                <figcaption><cite>Wikipedia contributors. (2022, December 2). Near-Earth object. In Wikipedia, The Free Encyclopedia. Retrieved 14:41, December 4, 2022, from https://en.wikipedia.org/w/index.php?title=Near-Earth_object&oldid=1125212991</cite></figcaption>
                </figure>
            </section>

            <NearEarthObjects endpoint={ENDPOINT} api_key={api_key} />

        </main>
        <footer className="App"><p>
            Data is from: "Data-set: All the data is from the NASA JPL Asteroid team (http://neo.jpl.nasa.gov/).".
            Via https://api.nasa.gov/
        </p></footer>
    </>;
}

export default App;
