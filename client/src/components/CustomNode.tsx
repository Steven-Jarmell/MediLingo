import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomNode({ data }) {
    const navigate = useNavigate();

  return (
    <div 
        className="flex w-auto px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400"
        onClick={() => {
            switch(data.label) {
                case "Allergenic Asthma": 
                    navigate("../../lesson/0");
                    break;
                case "Non-Allergenic Asthma": 
                    navigate("../../lesson/1");
                    break;
                case "Steroid-Resistant Asthma": 
                    navigate("../../lesson/2");
                    break;
                case "Exercise-Induced Asthma": 
                    navigate("../../lesson/3");
                    break;
                }
            }
        }
    >
        <div className="justify-center text-lg font-bold">{data.label}</div>
    </div>
  );
}

export default memo(CustomNode);