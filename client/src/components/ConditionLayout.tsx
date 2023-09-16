import Condition from './ConditionComponent.tsx'
import { Outlet, useNavigate } from "react-router-dom";

const ConditionLayout = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="flex">
                <Condition 
                    title="Asthma"
                    onClick={() => navigate('/path/Asthma')}
                />
                <Condition
                    title="Diabetes"
                    onClick={() => navigate('/path/Diabetes')}
                />
                <Condition
                    title="Eczema"
                    onClick={() => navigate('/path/Eczema')}
                />
            </div>
            <Outlet />
        </>
    );
}

export default ConditionLayout
