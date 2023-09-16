import { useEffect } from "react";
import OptionCard from "./OptionCard";

const options = [
    { name: "Asthma", path: "/asthma" },
    { name: "Diabetes", path: "/diabetes" },
    { name: "Eczema ", path: "/eczema" },
    { name: "Covid", path: "/covid" },
];

const HomeComponent = () => {

    useEffect(() => {
        const getData = async () => {
            const req = await fetch('http://localhost:3000/questions', {
                method: "GET",
                
            }).then(res => res.json()).then((data) => console.log(data))
            console.log(req)
        }
        getData();
    }, [])
    return (
        <div className="flex justify-center mt-40 gap-32">
            {options.map((option) => (
                <OptionCard
                    key={option.name}
                    name={option.name}
                    path={option.path}
                />
            ))}
        </div>
    );
};

export default HomeComponent;
