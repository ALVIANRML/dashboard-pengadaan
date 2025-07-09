import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((item, index) => (
        <TableRow key={index} item={item} index={index} />
      ))}
    </tbody>
  );
};

export default TableBody;
