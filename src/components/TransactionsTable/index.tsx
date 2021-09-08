import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions')
      .then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento do sistema</td>
            <td className="deposit">R$ 12000.00</td>
            <td>Dev</td>
            <td>20/08/2021</td>
          </tr>
          <tr>
            <td>Compras de casa</td>
            <td className="withdraw">- R$500.00</td>
            <td>Compras</td>
            <td>28/08/2021</td>
          </tr>

        </tbody>
      </table>
    </Container>

  )
}