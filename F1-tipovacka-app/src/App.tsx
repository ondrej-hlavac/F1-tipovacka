import { useState } from "react";
import "./App.css";
import DriversList from "./components/DriversList/DriversList";
import driversData from "./data/drivers.json";
import { Driver } from "./types/Driver";

function App() {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  const unusedDrivers = driversData.filter(
    (driverData) =>
      !drivers.some((d) => d.name_acronym === driverData.name_acronym)
  );

  const handleAddDriver = (driverAcronym: string) => {
    const driver = driversData.find(
      (driver) => driver.name_acronym === driverAcronym
    );
    if (driver) {
      setDrivers([...drivers, driver]);
    }
  };

  return (
    <>
      <h1>F1 tipovačka</h1>

      <DriversList drivers={drivers} />

      {/* ADD DRIVER */}
      <select
        value={"add driver"}
        onChange={(e) => handleAddDriver(e.target.value)}
      >
        <option value={""}>Vyber jezdce</option>
        {unusedDrivers.map((driver) => (
          <option key={driver.name_acronym} value={driver.name_acronym}>
            {driver.full_name}
          </option>
        ))}
      </select>
    </>
  );
}

export default App;
