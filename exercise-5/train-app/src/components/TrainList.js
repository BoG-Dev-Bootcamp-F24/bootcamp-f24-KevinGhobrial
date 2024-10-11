import Train from "./Train"; // Ensure this path is correct

const TrainList = ({ color, data }) => {
  return (
    <div>
      {data.map((train, index) => (
        <Train key={index} {...train} />
      ))}
    </div>
  );
};

export default TrainList;
