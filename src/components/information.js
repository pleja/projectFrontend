import React from 'react';
import { Table } from 'react-bootstrap';
import '../App.css';

class CoinData extends React.Component {
    
  render () {
      return (
        <div className="ChartStyle">
          <Table striped bordered hover variant='light'>
            <tbody>
              <tr>
                <th>Token Name </th>
                <th>{this.props.name}</th>                
              </tr>
              <tr>
                <td>Token Symbol </td>
                <td>{this.props.symbol}</td>
              </tr>
              <tr>
                <td>Price in USD</td>
                <td>$ {this.props.priceinusd}</td>
              </tr>
              <tr>
                <td>Circulating Supply </td>
                <td>{this.props.circulatingsupply}</td>
              </tr>
              <tr>
                <td>Total Supply </td>
                <td>{this.props.totalsupply}</td>
              </tr>
              <tr>
                <td>Latest Date </td>
                <td>{this.props.latestdate}</td>
              </tr>
              <tr>
                <td>Latest Time </td>
                <td>{this.props.latesttime}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        
      );
  }
    
}
export default CoinData