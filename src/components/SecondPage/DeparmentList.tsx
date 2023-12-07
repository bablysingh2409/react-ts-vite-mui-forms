import { useState } from 'react';

// Define TypeScript model/interface for department data
interface Department {
  id: string;
  name: string;
  subDepartments: SubDepartment[];
}

interface SubDepartment {
  id: string;
  name: string;
}

const sampleData: Department[] = [
  {
    id: '1',
    name: 'Department 1',
    subDepartments: [
      { id: '1.1', name: 'Sub Department 1.1' },
      { id: '1.2', name: 'Sub Department 1.2' },
    ],
  },
  {
    id: '2',
    name: 'Department 2',
    subDepartments: [
      { id: '2.1', name: 'Sub Department 2.1' },
      { id: '2.2', name: 'Sub Department 2.2' },
    ],
  },

];

const DepartmentListComponent= () => {
  const [departments, setDepartments] = useState<Department[]>(sampleData);

  const handleToggleSubDepartments = (departmentId: string) => {
    setDepartments((prevDepartments) =>
      prevDepartments.map((department) =>
        department.id === departmentId
          ? { ...department, isOpen: !department.isOpen }
          : department
      )
    );
  };

  return (
    <div>
      <h2>Department List</h2>
      {departments.map((department) => (
        <div key={department.id}>
          <div
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontWeight: 'bold',
            }}
            onClick={() => handleToggleSubDepartments(department.id)}
          >
            <span>{department.name}</span>
            {department.subDepartments.length > 0 && (
              <span>{department.isOpen ? '[-]' : '[+]'}</span>
            )}
          </div>
          {department.isOpen && (
            <ul>
              {department.subDepartments.map((subDept) => (
                <li key={subDept.id} style={{ marginLeft: '20px' }}>
                  {subDept.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default DepartmentListComponent;
