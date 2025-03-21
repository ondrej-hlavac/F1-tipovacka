import { Driver } from "../../types/Driver";

type DriverRowProps = {
  driver: Driver;
};

const DriverRow = ({ driver }: DriverRowProps) => {
  return (
    <>
      <tr>
        <td
          style={{
            backgroundColor: `#${driver.team_colour}`,
            width: "5em",
          }}
        ></td>
        <td>
          <b>{driver.last_name}</b> {driver.first_name}
        </td>
      </tr>
    </>
  );
};

export default DriverRow;
