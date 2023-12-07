import TableComponent from './TableComponent';
import DepartmentListComponent from './DeparmentList';
const SecondPage= () => {
  return (
    <div>
      <h1>Welcome to the Second Page!</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          {/* Render the TableComponent */}
          <TableComponent />
        </div>
        <div style={{ flex: 1 }}>
          {/* Render the DepartmentListComponent */}
          <DepartmentListComponent />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
