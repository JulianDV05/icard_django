import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useTable } from "../../../hooks";
import "./SelectTable.scss";
import {useNavigate} from "react-router-dom";

export function SelectTable() {
  let navigate = useNavigate();
  const [tableNum, setTableNum] = useState(null);
  const [error, setError] = useState(null);
  const { isExistTable } = useTable();

  const onSubmit = () => {
    if (!tableNum) {
      setError("No has introducido ninguna mesa");
    } else {
<<<<<<< HEAD
      const exist = await isExistTable(tableNum);
      if (exist) history.push(`/Client/${tableNum}`);
=======
      if (tableNum) {
        navigate(`/client/${tableNum}`);
      }
>>>>>>> 857be879722a9417495d872af3b0e968ba37bf44
      else setError("El numero de la mesa no existe");
    }
  };
  console.log(tableNum);

  return (
    <div className="select-table">
      <div className="select-table__content">
        <h1>Bienvenido a iCard</h1>
        <h2>Introduce tu numero de mesa</h2>

        <Form onSubmit={onSubmit}>
          <Form.Input
            placeholder="Ejemplo: 135, 873, 904, 337"
            type="number"
            onChange={(_, data) => setTableNum(data.value)}
          />

          <Button primary fluid>
            Entrar
          </Button>
        </Form>

        <p className="select-table__content-error">{error}</p>
      </div>
    </div>
  );
}
