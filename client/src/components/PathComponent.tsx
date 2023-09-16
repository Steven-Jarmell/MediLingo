import { useParams } from "react-router-dom";

const PathComponent = () => {
    const { condition } = useParams();
    return (
        <div>
            <div>{condition}</div>Path Component
        </div>
    );
};

export default PathComponent;
