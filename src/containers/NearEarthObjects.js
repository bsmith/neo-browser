import { useState } from 'react';

import Calendar from '../components/Calendar';
import ObjectList from "../components/ObjectList";

const dummyData = [
    {
    "links": {
    "self": "http://api.nasa.gov/neo/rest/v1/neo/2523632?api_key=eYdq0mhaKTnTFJNVeMWpzCcCcfnRhovFiq2U8hz1"
    },
    "id": "2523632",
    "neo_reference_id": "2523632",
    "name": "523632 (2009 UX17)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2523632",
    "absolute_magnitude_h": 21.5,
    "estimated_diameter": {
    "kilometers": {
    "estimated_diameter_min": 0.1332155667,
    "estimated_diameter_max": 0.2978790628
    },
    "meters": {
    "estimated_diameter_min": 133.2155666981,
    "estimated_diameter_max": 297.8790627982
    },
    "miles": {
    "estimated_diameter_min": 0.0827762899,
    "estimated_diameter_max": 0.1850934111
    },
    "feet": {
    "estimated_diameter_min": 437.0589598459,
    "estimated_diameter_max": 977.2935443908
    }
    },
    "is_potentially_hazardous_asteroid": false,
    "close_approach_data": [
    {
    "close_approach_date": "2022-12-06",
    "close_approach_date_full": "2022-Dec-06 12:27",
    "epoch_date_close_approach": 1670329620000,
    "relative_velocity": {
    "kilometers_per_second": "5.4136268804",
    "kilometers_per_hour": "19489.0567693454",
    "miles_per_hour": "12109.741968708"
    },
    "miss_distance": {
    "astronomical": "0.1985081427",
    "lunar": "77.2196675103",
    "kilometers": "29696395.325576049",
    "miles": "18452484.4022415162"
    },
    "orbiting_body": "Earth"
    }
    ],
    "is_sentry_object": false
    },
    {
    "links": {
    "self": "http://api.nasa.gov/neo/rest/v1/neo/2530531?api_key=eYdq0mhaKTnTFJNVeMWpzCcCcfnRhovFiq2U8hz1"
    },
    "id": "2530531",
    "neo_reference_id": "2530531",
    "name": "530531 (2011 OL5)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2530531",
    "absolute_magnitude_h": 20.28,
    "estimated_diameter": {
    "kilometers": {
    "estimated_diameter_min": 0.233644185,
    "estimated_diameter_max": 0.5224442801
    },
    "meters": {
    "estimated_diameter_min": 233.6441849736,
    "estimated_diameter_max": 522.4442801486
    },
    "miles": {
    "estimated_diameter_min": 0.1451797209,
    "estimated_diameter_max": 0.3246317248
    },
    "feet": {
    "estimated_diameter_min": 766.5491878289,
    "estimated_diameter_max": 1714.0560920828
    }
    },
    "is_potentially_hazardous_asteroid": false,
    "close_approach_data": [
    {
    "close_approach_date": "2022-12-06",
    "close_approach_date_full": "2022-Dec-06 10:02",
    "epoch_date_close_approach": 1670320920000,
    "relative_velocity": {
    "kilometers_per_second": "7.6963041046",
    "kilometers_per_hour": "27706.6947764058",
    "miles_per_hour": "17215.862651484"
    },
    "miss_distance": {
    "astronomical": "0.3878611052",
    "lunar": "150.8779699228",
    "kilometers": "58023195.193765924",
    "miles": "36053941.6499167912"
    },
    "orbiting_body": "Earth"
    }
    ],
    "is_sentry_object": false
    },
    {
    "links": {
    "self": "http://api.nasa.gov/neo/rest/v1/neo/3836272?api_key=eYdq0mhaKTnTFJNVeMWpzCcCcfnRhovFiq2U8hz1"
    },
    "id": "3836272",
    "neo_reference_id": "3836272",
    "name": "(2018 WG)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3836272",
    "absolute_magnitude_h": 29.3,
    "estimated_diameter": {
    "kilometers": {
    "estimated_diameter_min": 0.0036690614,
    "estimated_diameter_max": 0.0082042706
    },
    "meters": {
    "estimated_diameter_min": 3.6690613753,
    "estimated_diameter_max": 8.2042706488
    },
    "miles": {
    "estimated_diameter_min": 0.0022798483,
    "estimated_diameter_max": 0.0050978959
    },
    "feet": {
    "estimated_diameter_min": 12.0376033226,
    "estimated_diameter_max": 26.9168993155
    }
    },
    "is_potentially_hazardous_asteroid": false,
    "close_approach_data": [
    {
    "close_approach_date": "2022-12-06",
    "close_approach_date_full": "2022-Dec-06 19:06",
    "epoch_date_close_approach": 1670353560000,
    "relative_velocity": {
    "kilometers_per_second": "25.9218894473",
    "kilometers_per_hour": "93318.8020102199",
    "miles_per_hour": "57984.674504628"
    },
    "miss_distance": {
    "astronomical": "0.4912393299",
    "lunar": "191.0920993311",
    "kilometers": "73488357.413267313",
    "miles": "45663547.8497543994"
    },
    "orbiting_body": "Earth"
    }
    ],
    "is_sentry_object": false
    },
    {
    "links": {
    "self": "http://api.nasa.gov/neo/rest/v1/neo/54017652?api_key=eYdq0mhaKTnTFJNVeMWpzCcCcfnRhovFiq2U8hz1"
    },
    "id": "54017652",
    "neo_reference_id": "54017652",
    "name": "(2020 MK3)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54017652",
    "absolute_magnitude_h": 25.8,
    "estimated_diameter": {
    "kilometers": {
    "estimated_diameter_min": 0.0183888672,
    "estimated_diameter_max": 0.0411187571
    },
    "meters": {
    "estimated_diameter_min": 18.388867207,
    "estimated_diameter_max": 41.1187571041
    },
    "miles": {
    "estimated_diameter_min": 0.0114263088,
    "estimated_diameter_max": 0.0255500032
    },
    "feet": {
    "estimated_diameter_min": 60.3309310875,
    "estimated_diameter_max": 134.9040630575
    }
    },
    "is_potentially_hazardous_asteroid": false,
    "close_approach_data": [
    {
    "close_approach_date": "2022-12-06",
    "close_approach_date_full": "2022-Dec-06 14:15",
    "epoch_date_close_approach": 1670336100000,
    "relative_velocity": {
    "kilometers_per_second": "18.0961676673",
    "kilometers_per_hour": "65146.2036022998",
    "miles_per_hour": "40479.3174549957"
    },
    "miss_distance": {
    "astronomical": "0.4677229805",
    "lunar": "181.9442394145",
    "kilometers": "69970361.632851535",
    "miles": "43477566.637099783"
    },
    "orbiting_body": "Earth"
    }
    ],
    "is_sentry_object": false
    },
    {
    "links": {
    "self": "http://api.nasa.gov/neo/rest/v1/neo/54054599?api_key=eYdq0mhaKTnTFJNVeMWpzCcCcfnRhovFiq2U8hz1"
    },
    "id": "54054599",
    "neo_reference_id": "54054599",
    "name": "(2020 SY3)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54054599",
    "absolute_magnitude_h": 25.7,
    "estimated_diameter": {
    "kilometers": {
    "estimated_diameter_min": 0.0192555078,
    "estimated_diameter_max": 0.0430566244
    },
    "meters": {
    "estimated_diameter_min": 19.2555078188,
    "estimated_diameter_max": 43.0566244241
    },
    "miles": {
    "estimated_diameter_min": 0.0119648141,
    "estimated_diameter_max": 0.0267541378
    },
    "feet": {
    "estimated_diameter_min": 63.1742402722,
    "estimated_diameter_max": 141.2618956756
    }
    },
    "is_potentially_hazardous_asteroid": false,
    "close_approach_data": [
    {
    "close_approach_date": "2022-12-06",
    "close_approach_date_full": "2022-Dec-06 05:32",
    "epoch_date_close_approach": 1670304720000,
    "relative_velocity": {
    "kilometers_per_second": "16.3721209792",
    "kilometers_per_hour": "58939.6355251355",
    "miles_per_hour": "36622.7974183821"
    },
    "miss_distance": {
    "astronomical": "0.4204776105",
    "lunar": "163.5657904845",
    "kilometers": "62902554.913489635",
    "miles": "39085835.188981563"
    },
    "orbiting_body": "Earth"
    }
    ],
    "is_sentry_object": false
    },
    {
    "links": {
    "self": "http://api.nasa.gov/neo/rest/v1/neo/54093080?api_key=eYdq0mhaKTnTFJNVeMWpzCcCcfnRhovFiq2U8hz1"
    },
    "id": "54093080",
    "neo_reference_id": "54093080",
    "name": "(2020 WO3)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54093080",
    "absolute_magnitude_h": 23.01,
    "estimated_diameter": {
    "kilometers": {
    "estimated_diameter_min": 0.0664591797,
    "estimated_diameter_max": 0.1486072436
    },
    "meters": {
    "estimated_diameter_min": 66.4591797139,
    "estimated_diameter_max": 148.6072435691
    },
    "miles": {
    "estimated_diameter_min": 0.041295807,
    "estimated_diameter_max": 0.0923402315
    },
    "feet": {
    "estimated_diameter_min": 218.0419351725,
    "estimated_diameter_max": 487.5565889914
    }
    },
    "is_potentially_hazardous_asteroid": false,
    "close_approach_data": [
    {
    "close_approach_date": "2022-12-06",
    "close_approach_date_full": "2022-Dec-06 07:23",
    "epoch_date_close_approach": 1670311380000,
    "relative_velocity": {
    "kilometers_per_second": "19.0615577109",
    "kilometers_per_hour": "68621.6077593278",
    "miles_per_hour": "42638.7984435668"
    },
    "miss_distance": {
    "astronomical": "0.1863512339",
    "lunar": "72.4906299871",
    "kilometers": "27877747.663311793",
    "miles": "17322429.1462690234"
    },
    "orbiting_body": "Earth"
    }
    ],
    "is_sentry_object": false
    },
    {
    "links": {
    "self": "http://api.nasa.gov/neo/rest/v1/neo/54138306?api_key=eYdq0mhaKTnTFJNVeMWpzCcCcfnRhovFiq2U8hz1"
    },
    "id": "54138306",
    "neo_reference_id": "54138306",
    "name": "(2021 GW16)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54138306",
    "absolute_magnitude_h": 30.1,
    "estimated_diameter": {
    "kilometers": {
    "estimated_diameter_min": 0.0025383703,
    "estimated_diameter_max": 0.0056759685
    },
    "meters": {
    "estimated_diameter_min": 2.5383702936,
    "estimated_diameter_max": 5.6759685287
    },
    "miles": {
    "estimated_diameter_min": 0.0015772697,
    "estimated_diameter_max": 0.0035268822
    },
    "feet": {
    "estimated_diameter_min": 8.3279867942,
    "estimated_diameter_max": 18.6219445876
    }
    },
    "is_potentially_hazardous_asteroid": false,
    "close_approach_data": [
    {
    "close_approach_date": "2022-12-06",
    "close_approach_date_full": "2022-Dec-06 07:20",
    "epoch_date_close_approach": 1670311200000,
    "relative_velocity": {
    "kilometers_per_second": "12.8408762676",
    "kilometers_per_hour": "46227.1545634172",
    "miles_per_hour": "28723.75612303"
    },
    "miss_distance": {
    "astronomical": "0.1001485198",
    "lunar": "38.9577742022",
    "kilometers": "14982005.245732826",
    "miles": "9309386.3777159588"
    },
    "orbiting_body": "Earth"
    }
    ],
    "is_sentry_object": false
    },
    {
    "links": {
    "self": "http://api.nasa.gov/neo/rest/v1/neo/54224167?api_key=eYdq0mhaKTnTFJNVeMWpzCcCcfnRhovFiq2U8hz1"
    },
    "id": "54224167",
    "neo_reference_id": "54224167",
    "name": "(2021 WO1)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54224167",
    "absolute_magnitude_h": 22.43,
    "estimated_diameter": {
    "kilometers": {
    "estimated_diameter_min": 0.0868070458,
    "estimated_diameter_max": 0.1941064553
    },
    "meters": {
    "estimated_diameter_min": 86.8070457914,
    "estimated_diameter_max": 194.1064553155
    },
    "miles": {
    "estimated_diameter_min": 0.0539393809,
    "estimated_diameter_max": 0.1206121222
    },
    "feet": {
    "estimated_diameter_min": 284.8000281143,
    "estimated_diameter_max": 636.8322228574
    }
    },
    "is_potentially_hazardous_asteroid": false,
    "close_approach_data": [
    {
    "close_approach_date": "2022-12-06",
    "close_approach_date_full": "2022-Dec-06 23:57",
    "epoch_date_close_approach": 1670371020000,
    "relative_velocity": {
    "kilometers_per_second": "13.4105587149",
    "kilometers_per_hour": "48278.0113737275",
    "miles_per_hour": "29998.0787894142"
    },
    "miss_distance": {
    "astronomical": "0.0954756572",
    "lunar": "37.1400306508",
    "kilometers": "14282954.953970164",
    "miles": "8875016.6684057032"
    },
    "orbiting_body": "Earth"
    }
    ],
    "is_sentry_object": false
    }
];

const NearEarthObjects = ({endpoint}) => {
    const [startDate, setStartDate] = useState("2022-12-02");

    return <section>
        <Calendar value={startDate} onChange={setStartDate} />
        <ObjectList objects={dummyData} />
    </section>
};

export default NearEarthObjects;