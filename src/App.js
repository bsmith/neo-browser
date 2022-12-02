import NearEarthObjects from './containers/NearEarthObjects';
import './App.css';
import api_key from './nasaKey.mjs';

const ENDPOINT = "https://api.nasa.gov/neo/rest/v1/feed";

function App() {
    return <>
        <header>
            <h1>Near Earth Objects</h1>
        </header>
        <main>
            <section>
                <h2>About</h2>
            </section>

            <NearEarthObjects endpoint={ENDPOINT} api_key={api_key} />

        </main>
        <footer><p>
            Data is from: "Data-set: All the data is from the NASA JPL Asteroid team (http://neo.jpl.nasa.gov/).".
            Via https://api.nasa.gov/
        </p></footer>
    </>;
}

export default App;
