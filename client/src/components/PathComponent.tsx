import { useNavigate } from "react-router-dom";
import ReactFlow from "react-flow-renderer";
import "../css/Trees.css"

const w = window.innerWidth;
const h = window.innerHeight;

console.log("w: " + w);
console.log("h: " + h);

const initialEdges = [{ id: 'e0-1', source: '0', target: '1', animated: true},
                        { id: 'e0-2', source: '0', target: '2', animated: true },
                        { id: 'e0-3', source: '0', target: '3', animated: true },
                        { id: 'e0-4', source: '0', target: '4', animated: true },
                        { id: 'e1-5', source: '1', target: '5', animated: true },
                        { id: 'e2-5', source: '2', target: '5', animated: true },
                        { id: 'e3-5', source: '3', target: '5', animated: true },
                        { id: 'e4-5', source: '4', target: '5', animated: true }];

const PathComponent = () => {

    const initialNodes = [
        { id: '0', position: {x: w/2-150, y:0}, data: { label: 'Asthma' }, className: "tree_node" },
        { id: '1', position: {x: w*(1/8)-150, y: h/8}, data: { label: 'Allergenic Asthma'}, className: "tree_node"},
        { id: '2', position: {x: w*(3/8)-150, y: h/8}, data: { label: 'Non-Allergenic Asthma'}, className: "tree_node" },
        { id: '3', position: {x: w*(5/8)-100, y: h/8}, data: { label: 'Steroid-Resistant Asthma'}, className: "tree_node" },
        { id: '4', position: {x: w*(7/8)-100, y: h/8}, data: { label: 'Exercise-Induced Asthma'}, className: "tree_node" },
        { id: '5', position: {x: w/2-200, y: h/2}, data: { label: 'Resources'}, className: "resources_node" },
    ];

    const navigate = useNavigate();

    const handleNodeClick = (event, node) => {
        if (node.id === '5') {
            navigate("../../research");
        }
        else {
            navigate("../../lesson/" + node.id);
        }
    };

    const completed_lessons = localStorage.getItem('lessons-completed')?.split(';');
    initialNodes.forEach(element => {
        if(completed_lessons?.includes(element.id)) {
            element.data.label = element.data.label + ' Completed!' 
            element.className = "completed_tree_node";
        }
    });

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