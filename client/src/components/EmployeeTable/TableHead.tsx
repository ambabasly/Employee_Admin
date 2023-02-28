import React from "react";

export const TableHead: React.FC = () => {
  return (
    <tr className="flex justify-between w-full p-1 lg:p-3 border-b border-gray-900">
      <th className="lg:w-10 lg:mr-3">No.</th>
      <th className="inline-block text-left lg:w-[20%] w-[25%]  ">
        Employee Name
      </th>
      <th className="inline-block text-left lg:w-[20%]  w-[25%]   ">
        Birthday
      </th>
      <th className="inline-block text-left lg:w-[20%]  w-[25%]  ">Phone</th>
      <th className="inline-block text-left lg:w-[20%]  w-[25%]   ">City</th>
      <th className="inline-block text-left lg:w-[20%]  w-[25%]  ">Actions</th>
    </tr>
  );
};
