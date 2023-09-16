import { useNavigate } from "react-router-dom";
import ReactFlow from "react-flow-renderer";

const w = window.innerWidth;
const h = window.innerHeight;

console.log("w: " + w);
console.log("h: " + h);

const initialEdges = [{ id: 'e1-2', source: '0', target: '1', animated: true},
                        { id: 'e1-3', source: '0', target: '2', animated: true },
                        { id: 'e1-4', source: '0', target: '3', animated: true },
                        { id: 'e1-5', source: '0', target: '4', animated: true }];

const PathComponent = () => {

    const navigate = useNavigate();

    const initialNodes = [
        { id: '0', position: {x: w/2-50, y:0}, data: { label: 'Asthma' }},
        { id: '1', position: {x: w*(1/8)-75, y: h/8}, data: { label: 'Allergenic Asthma'} },
        { id: '2', position: {x: w*(3/8)-75, y: h/8}, data: { label: 'Non-Allergenic Asthma'} },
        { id: '3', position: {x: w*(5/8)-50, y: h/8}, data: { label: 'Steroid-Resistant Asthma'} },
        { id: '4', position: {x: w*(7/8)-50, y: h/8}, data: { label: 'Exercise-Induced Asthma'} },
    ];

    const handleNodeClick = (event, node) => {
        navigate("../../lesson/" + node.id);
      };

    return (
        <div className="flex justify-center w-screen h-screen">
            <ReactFlow 
                nodes={initialNodes} 
                edges={initialEdges} 
                onNodeClick={handleNodeClick}
                />
        </div>
    );
  
}
export default PathComponent;

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