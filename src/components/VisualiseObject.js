import { select, axisBottom, scaleLinear } from 'd3';
import { useRef, useLayoutEffect } from 'React';
import "./VisualiseObject.css";

const VisualiseObject = ({object}) => {
    const d3Ref = useRef(null);

    const minMax = object.estimated_diameter.meters;
    const minDiameter = minMax.estimated_diameter_min;
    const maxDiameter = minMax.estimated_diameter_max;

    /* the viewBox below makes the coordinate system be (0,0) in the top-left,
    and (100,100) in the bottom-right */
    /* scale is 2 km diameter maps to 50 unit radius */
    const minScaled = minDiameter / 2000 * 50;
    const maxScaled = maxDiameter / 2000 * 50;
    const avgScaled = (minScaled**3 / 2 + maxScaled**3 / 2)**(1/3);

    /* nice d3+React tutorial: https://pganalyze.com/blog/building-svg-components-in-react */
    /* copied this code from there */
    useLayoutEffect(() => {
        const host = select(d3Ref.current);
        host.select("g").remove(); /* get rid of old axes */
        const scale = scaleLinear([0, 2], [0, 50]);
        const axisGenerator = axisBottom(scale);
        axisGenerator.ticks(2);
        const group = host.append("g");
        group.call(axisGenerator);
    }, [object]);

    return <svg className="VisualiseObject" viewBox="0 0 100 100">
        {/* <g transform="translate(20,20)"><text>{minDiameter}&ndash;{maxDiameter}</text></g> */}
        <g transform="translate(50,50)">
            <circle cx="0" cy="0" r={maxScaled} className="maxCircle" />
            <circle cx="0" cy="0" r={avgScaled} className="avgCircle" />
            <circle cx="0" cy="0" r={minScaled} className="minCircle" />
        </g>

        <g transform="translate(50,50) rotate(-45)" ref={d3Ref} />
    </svg>
};

export default VisualiseObject;