import { useState } from "react";
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

const DepartmentListComponent = () => {
  const [departments, setDepartments] = useState<Department[]>([
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
    // Add more departments as needed
  ]);

  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const handleDepartmentClick = (departmentId: string) => {
    // Handle department click logic
    const isSelected = selectedDepartments.includes(departmentId);

    if (isSelected) {
      setSelectedDepartments(selectedDepartments.filter((id) => id !== departmentId));
    } else {
      setSelectedDepartments([...selectedDepartments, departmentId]);
    }
  };

  const handleSubDepartmentClick = (subDepartmentId: string, departmentId: string) => {
    // Handle sub-department click logic
    const isSelected = selectedDepartments.includes(subDepartmentId);

    if (isSelected) {
      setSelectedDepartments(selectedDepartments.filter((id) => id !== subDepartmentId));
    } else {
      // Check if all sub-departments are selected
      const allSubDepartmentsSelected = departments
        .find((department) => department.id === departmentId)
        ?.subDepartments.every((subDept) =>
          selectedDepartments.includes(subDept.id)
        );

      if (allSubDepartmentsSelected) {
        // If all sub-departments are selected, also select the parent department
        setSelectedDepartments([...selectedDepartments, departmentId]);
      } else {
        // Otherwise, only select the clicked sub-department
        setSelectedDepartments([...selectedDepartments, subDepartmentId]);
      }
    }
  };

  return (
    <div>
      <h2>Department List</h2>
      {departments.map((department) => (
        <div key={department.id}>
          <div
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => handleDepartmentClick(department.id)}
          >
            {department.name}
          </div>
          <ul>
            {department.subDepartments.map((subDept) => (
              <li
                key={subDept.id}
                style={{ marginLeft: '20px', cursor: 'pointer' }}
                onClick={() => handleSubDepartmentClick(subDept.id, department.id)}
              >
                {subDept.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <h3>Selected Departments:</h3>
        <ul>
          {selectedDepartments.map((selectedDept) => (
            <li key={selectedDept}>{selectedDept}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DepartmentListComponent;
