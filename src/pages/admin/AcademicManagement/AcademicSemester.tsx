import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester, TQuearyParams } from "../../../types";
import { useState } from "react";

export type TTableData = Pick<
  TAcademicSemester,
  "_id" | "name" | "year" | "startMonth" | "endMonth"
>;
// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }
const AcademicSemester = () => {
  const [params, setParamas] = useState<TQuearyParams[] | undefined>(undefined);
  const { data: semesterData,isLoading,isFetching } = useGetAllSemesterQuery(params);
  const tableData = semesterData?.data?.map(
    ({ _id, name, startMonth, endMonth, year }: TTableData) => ({
      key: _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Fall",
          value: "Fall",
        },
        {
          text: "Summer",
          value: "Summer",
        },
      ],
    },
    {
      title: "Year",
      key: "year",
      dataIndex: "year",
    },
    {
      title: "Start Month",
      key: "startMonth",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      key: "endMonth",
      dataIndex: "endMonth",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const quearyParams:TQuearyParams[] = [];
      filters.name?.forEach((item) =>
        quearyParams.push({ name: "name", value: item })
      );
      setParamas(quearyParams);
    }
    console.log("params", pagination, filters, sorter, extra);
  };

if (isLoading) {
  return <div>Loading........</div>
}


  return (
    <div>
      <Table<TTableData>
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default AcademicSemester;
