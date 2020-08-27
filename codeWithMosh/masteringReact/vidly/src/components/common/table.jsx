import React from 'react';
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({columns, sortColumn, onSort, data}) => { //Destructuring props from the props argument of the function
    return ( 
        <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />

        <TableBody data={data} columns={columns} />
      </table>
     );
}
 
export default Table;