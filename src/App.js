import { Table, Container } from "react-bootstrap";

import "./App.scss";

function App() {
  return (
    <div className="App pt-5">
      <Container>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name project</th>
              <th>REPO link</th>
              <th>GHP link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>hotel-training</td>
              <td>
                <a href="https://github.com/steeksg/hotel-training">REPO</a>
              </td>
              <td>
                <a href="https://steeksg.github.io/hotel-training">GHP</a>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;