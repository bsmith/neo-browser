import "./VisualiseObject.css";

const VisualiseObject = ({object}) => {
    const minMax = object.estimated_diameter.meters;
    const minDiameter = minMax.estimated_diameter_min;
    const maxDiameter = minMax.estimated_diameter_max;

    /* the viewBox below makes the coordinate system be (0,0) in the top-left,
    and (100,100) in the bottom-right */
    /* scale is 2 km diameter maps to 50 unit radius */
    const minScaled = minDiameter / 2000 * 50;
    const maxScaled = maxDiameter / 2000 * 50;

    return <svg className="VisualiseObject" viewBox="0 0 100 100">
        {/* <g transform="translate(20,20)"><text>{minDiameter}&ndash;{maxDiameter}</text></g> */}
        <g transform="translate(50,50)">
            <circle cx="0" cy="0" r={maxScaled} className="maxCircle" />
            <circle cx="0" cy="0" r={minScaled} className="minCircle" />
        </g>
    </svg>
};

export default VisualiseObject;