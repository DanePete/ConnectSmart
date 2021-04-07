
import React from "react";
import { Button, Table} from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import Moment from 'react-moment';

const List = ({data}) => {
    return (
        <div>
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <th>Title</th>
            <th>Owner</th>
            <th colSpan="2"></th>
          </thead>
          <tbody>
          {data.map(data => {
            return (
              <tr>
                <td>{data.title}</td>
                <td>{data.owner}</td>
                <td><Button variant="info">Edit</Button></td>
                <td><Moment format="MM/DD/YYYY">{data.updatedAt}</Moment></td>
                {/* <td><Button onClick={() => deleteItem(data.id)}>Delete!</Button></td> */}
              </tr>
            )
          })}
          </tbody>
        </Table>
      </div>
    );
};
  export default List;
  
  