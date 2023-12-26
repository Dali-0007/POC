
import React from 'react';
import { DataGrid } from '@mui/x-data-grid'; 
// eslint-disable-next-line no-unused-vars
import generateData from '../generateData';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 300 },
  
];

const DataTable = ({ rows }) => {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        pagination
        autoHeight
      />
    </div>
  );
};

export default DataTable;
