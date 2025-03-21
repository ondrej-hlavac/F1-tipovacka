import { Driver } from "../../types/Driver";
import DriverRow from "../DriverRow/DriverRow";

type DriversListProps = {
  drivers: Driver[];
};

const DriversList = ({ drivers }: DriversListProps) => {
  return (
    <>
      {drivers.map((driver) => (
        <DriverRow driver={driver} key={driver.name_acronym} />
      ))}
    </>
  );
};

export default DriversList;
