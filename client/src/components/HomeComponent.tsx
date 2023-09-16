import OptionCard from "./OptionCard";

const options = [
    { name: "Asthma", path: "/asthma" },
    { name: "Diabetes", path: "/diabetes" },
    { name: "Eczema ", path: "/eczema" },
    { name: "Covid", path: "/covid" },
];

const HomeComponent = () => {
    return (
        <div className="flex h-full w-full justify-center mt-60 gap-32">
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
