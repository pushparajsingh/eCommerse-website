import React, { memo } from "react";
import { FadeLoader } from "react-spinners";

const TableNoRecordFound = ({ loading, colspan, error }) => {
  return (
    <tr>
      <td colSpan={colspan} align="center">
        {!error ? (
          loading ? (
            <FadeLoader size={22} color="grey" />
          ) : (
            "No record found"
          )
        ) : (
          <h2 style={{ color: "red" }}>Some Thing went wrong</h2>
        )}
      </td>
    </tr>
  );
};
export default memo(TableNoRecordFound);
