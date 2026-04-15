import { useState } from "react";
import { infosysEmployees } from "../assets/javaScript/employee";

export const List = () => {
  // Current displayed employees
  const [employees, setEmployees] = useState(infosysEmployees);
  // Flags to track sorting state separately
  const [isNameSorted, setIsNameSorted] = useState(false);
  const [isExpSorted, setIsExpSorted] = useState(false);

  // Sort by Name (ascending) or reset
  const handleSortByName = () => {
    if (!isNameSorted) {
      const sortedEmployees = [...employees].sort((a, b) => a.name.localeCompare(b.name));
      setEmployees(sortedEmployees);
      setIsNameSorted(true);
    } else {
      setEmployees(infosysEmployees);
      setIsNameSorted(false);
    }
    // Reset experience sort flag
    setIsExpSorted(false);
  };

  // Sort by Experience (ascending) or reset
  const handleSortByExp = () => {
    if (!isExpSorted) {
      const sortedEmployeesByEx = [...employees].sort((a, b) => b.experience - a.experience);
      setEmployees(sortedEmployeesByEx);
      setIsExpSorted(true);
    } else {
      setEmployees(infosysEmployees);
      setIsExpSorted(false);
    }
    // Reset name sort flag
    setIsNameSorted(false);
  };

  return (
    <div className="flex justify-center mt-6">
      <table className="min-w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Emp ID</th>
            <th className="px-4 py-2 text-left cursor-pointer" onClick={handleSortByName}>
              Emp Name
            </th>
            <th className="px-4 py-2 text-left">Designation</th>
            <th className="px-4 py-2 text-left">Department</th>
            <th className="px-4 py-2 text-left cursor-pointer" onClick={handleSortByExp}>
              Experience
            </th>
            <th className="px-4 py-2 text-left">Skills</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr
              key={emp.id}
              className={index % 2 === 0 ? "bg-gray-500" : "bg-white hover:bg-gray-100"}
            >
              <td className="px-4 py-2">{emp.id}</td>
              <td className="px-4 py-2">{emp.name}</td>
              <td className="px-4 py-2">{emp.designation}</td>
              <td className="px-4 py-2">{emp.department}</td>
              <td className="px-4 py-2">{emp.experience}</td>
              <td className="px-4 py-2">
                {emp.skills.map((skill, i) => (
                  <span key={i} className="mr-2">{skill }📈</span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};