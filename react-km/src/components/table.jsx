import { IoPencil, IoTrash } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import React from "react";

/**
 *
 * @param {{
 * headers: Array,
 * datas: Array,
 * isReady: boolean,
 * onEditClick: Function,
 * onDeleteClick: Function
 * }} props Props for the component
 */
function TablePost(props) {
  const {
    headers = [],
    datas = [],
    isReady,
    onEditClick,
    onDeleteClick,
  } = props;
  const navigate = useNavigate();

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
              <td onClick={() => navigate(`/posts/${data.id}`)}>
                {data.title}
              </td>
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

/**
 *
 * @param {{
 * headers: Array,
 * datas: Array,
 * isReady: boolean,
 * onEditClick: Function,
 * onDeleteClick: Function
 * }} props Props for the component
 */
function TableProduct(props) {
  const {
    headers = [],
    datas = [],
    isReady,
    onEditClick,
    onDeleteClick,
  } = props;
  const navigate = useNavigate();

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
              <td onClick={() => navigate(`/products/${data.id}`)}>
                {data.productName}
              </td>
              <td>{data.productCategory}</td>
              <td>{data.productPrice}</td>
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

export { TablePost, TableProduct };
