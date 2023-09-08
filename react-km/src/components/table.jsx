import React from "react";

export default function Table(props) {
  const { headers = [], datas = [] } = props;

  return (
    <table>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
      {datas.map((data) => (
        <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.productName}</td>
          <td>{data.productCategory}</td>
          <td>{data.productPrice}</td>
        </tr>
      ))}
    </table>
  );
}
