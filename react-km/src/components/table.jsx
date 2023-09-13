import { IoPencil, IoTrash } from "react-icons/io5";
import React from "react";

export default function Table(props) {
  const {
    headers = [],
    datas = [],
    isReady,
    onEditClick,
    onDeleteClick,
  } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {isReady &&
          datas.map((data) => (
            <tr key={data.id} className="hover">
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.body}</td>
              <td className="flex gap-2">
                <IoPencil onClick={() => onEditClick(data)} />
                <IoTrash onClick={() => onDeleteClick(data)} />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
