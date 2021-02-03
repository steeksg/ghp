import { Table, Container } from "react-bootstrap";

import "./App.scss";

function App() {
  return (
    <div className="App pt-5">
      <Container>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="w-25">Stack</th>
              <th className="w-25">Project</th>
              <th className="w-25">Result</th>
              <th className="w-25">Task</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>hotel-training</td>
              <td>
                <a href="https://github.com/steeksg/hotel-training">
                  hotel-training
                </a>
              </td>
              <td>
                <a href="https://steeksg.github.io/hotel-training">
                  Github pages
                </a>
              </td>
              <td>
                <a href="https://github.com/steeksg/ghp/blob/master/src/tasks/hotel/hotel-training-task.pdf">
                  Figma mockup
                </a>
              </td>
            </tr>
            <tr>
              <td>cadex-test</td>
              <td>
                <a href="https://github.com/steeksg/cadex-test">cadex-test</a>
              </td>
              <td>
                <a href="https://cadex-test.herokuapp.com/">Heroku</a>
              </td>
              <td>
                <a href="https://github.com/steeksg/ghp/blob/master/src/tasks/cadex/cadex-test.pdf">
                  Doc
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
