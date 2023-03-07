import React from "react";
import { FadeLoader } from "react-spinners";

const TableNoRecordFound = ({ loading, colspan }) => {
  return (
    <tr>
      <td colSpan={colspan} align="center">
        {loading ? <FadeLoader size={22} color="grey" /> : "No record found"}
      </td>
    </tr>
  );
};
export default TableNoRecordFound;
