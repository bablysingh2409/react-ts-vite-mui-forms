import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { fetchData } from '../../services/apiService';



// Define TypeScript model/interface for API response
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const TableComponent = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch data from API and set it to the state
    const fetchDataFromApi = async () => {
      try {
        const apiData = await fetchData(); // Assuming fetchData is implemented in apiService.ts
        setData(apiData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromApi();
  }, []);

  const columns: GridColDef[] = [
    { field: 'userId', headerName: 'User ID', width: 120 },
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'body', headerName: 'Body', flex: 1 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Data Grid</h2>
      <DataGrid rows={data} columns={columns}  checkboxSelection />
    </div>
  );
};

export default TableComponent;
