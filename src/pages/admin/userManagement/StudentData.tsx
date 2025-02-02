import { Button, Row, Space, Table, TableColumnsType, TableProps } from "antd";
import { TQuearyParams, TStudent } from "../../../types";
import { useState } from "react";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";

export type TTableData = Pick<TStudent, "email" | "_id" |"id">;
// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }
const StudentData = () => {
  const [params, setParamas] = useState<TQuearyParams[] | undefined>(undefined);
  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudentsQuery(params);
console.log(studentData?.data);
  const tableData = studentData?.data?.map(({ _id, email,id }: TTableData) => ({
    key: _id,
    email,
    id
  }));
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "email",
    },
    {
      title: "Roll No",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <Row gutter={8}>
            <Space>
              <Button>Details</Button>
              <Button>Update</Button>
              <Button>Block</Button>
            </Space>
          </Row>
        );
      },
      width:"1%"
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const quearyParams: TQuearyParams[] = [];
      filters.name?.forEach((item) =>
        quearyParams.push({ name: "name", value: item })
      );
      setParamas(quearyParams);
    }
    console.log("params", pagination, filters, sorter, extra);
  };

  if (isLoading) {
    return <div>Loading........</div>;
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

export default StudentData;
