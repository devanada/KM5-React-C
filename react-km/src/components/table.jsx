import { IoPencil, IoTrash } from "react-icons/io5";

export default function Table(props) {
  const {
    headers = [],
    datas = [],
    isReady,
    onEditClick,
    onDeleteClick,
  } = props;

  return (
    <div className="overflow-x-auto">
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
                {Object.keys(data).map((key, index) => (
                  <td key={index}>{data[key]}</td>
                ))}
                <td>
                  <div className="flex gap-3">
                    <IoPencil
                      onClick={onEditClick ? () => onEditClick(data) : null}
                    />
                    <IoTrash
                      onClick={onDeleteClick ? () => onDeleteClick(data) : null}
                    />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
