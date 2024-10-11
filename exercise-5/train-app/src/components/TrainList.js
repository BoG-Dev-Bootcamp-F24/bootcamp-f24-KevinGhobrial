import Train from "./Train"; 

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
