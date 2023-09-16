import { useNavigate, useParams } from "react-router-dom";
import ReactFlow from 'react-flow-renderer';
import CustomNode from "./CustomNode";

const w = window.innerWidth;
const h = window.innerHeight;

console.log("w: " + w);
console.log("h: " + h);

const nodeTypes = {
    custom: CustomNode,
}

const initialNodes = [
    { id: '1', type: 'custom', position: {x: w/2-50, y:0}, data: { label: 'Asthma' } },
    { id: '2', type: 'custom', position: {x: w*(1/8)-75, y: h/8}, data: { label: 'Allergenic Asthma' } },
    { id: '3', type: 'custom', position: {x: w*(3/8)-75, y: h/8}, data: { label: 'Non-Allergenic Asthma' } },
    { id: '4', type: 'custom', position: {x: w*(5/8)-50, y: h/8}, data: { label: 'Steroid-Resistant Asthma' } },
    { id: '5', type: 'custom', position: {x: w*(7/8)-50, y: h/8}, data: { label: 'Exercise-Induced Asthma' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2', animated: true},
                        { id: 'e1-3', source: '1', target: '3', animated: true },
                        { id: 'e1-4', source: '1', target: '4', animated: true },
                        { id: 'e1-5', source: '1', target: '5', animated: true }];

const PathComponent = () => {
    // const navigate = useNavigate();

//   type questionProps = {
//     questionText: string;
//     openEnded: boolean;
//     category: string;
//     saveToProfile: string;
//     options: string[];
//     correctOption: string[];
//     _id: string;
//   };

//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://localhost:3000/questions/${condition}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         const mappedChartData = data.map((question: questionProps, index: number, array: any) => ({
//           id: question._id,
//           questionText: question.questionText,
//           parent: index > 0 ? array[index - 1].id : '',
//         }));
        
//         setChartData(mappedChartData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [condition]);

// };
//   const { condition } = useParams();

    return (
      <div className="flex justify-center w-screen h-screen">
        <ReactFlow 
            nodeTypes={nodeTypes}
            nodes={initialNodes} 
            edges={initialEdges} 
            />
      </div>
    );
  
}
export default PathComponent;
