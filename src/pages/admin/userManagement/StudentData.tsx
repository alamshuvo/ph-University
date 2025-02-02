import {
  Button,
  Modal,
  Pagination,
  Row,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { TQuearyParams, TStudent } from "../../../types";
import { useState } from "react";
import { useBlockUserMutation, useGetAllStudentsQuery, useGetSingleUserQuery } from "../../../redux/features/admin/userManagement.api";
import { Link } from "react-router-dom";

export type TTableData = Pick<TStudent, "email" | "_id" | "id"|"user">;
// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }
const StudentData = () => {
  const [params, setParamas] = useState<TQuearyParams[]>([]);
  const [page, setPage] = useState(1);
  const [isModalOpen,setIsModalOpen]=useState(false);
  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudentsQuery([
    { name: "limit", value: 4 },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

  const [blockUser,{Bdata,error}]=useBlockUserMutation();
 
  console.log(studentData?.data?.user);
  const showModal = () => {
    setIsModalOpen(true);
    
  };

  const handleOk = (id) => {
    console.log(id);
    setIsModalOpen(false);
    blockUser({ id: id, data: { status: "blocked" } });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

 
  console.log(studentData?.data);
  const tableData = studentData?.data?.map(
    ({ _id, email, id,user }: TTableData) => ({
      key: _id,
      email,
      id,
      user
     
    })
  );
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
    title:"User Details",
    key:"user",
    dataIndex:'user._id'
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        console.log(item?.user?.status);
        return (
          <Row gutter={8}>
            <Space>
              <Link to={`/admin/student-data/${item?.key}`}>
                <Button>Details</Button>
              </Link>

              <Button>Update</Button>
              <Button type="primary" onClick={showModal}>Block</Button>
              <Modal title='Block User' open={isModalOpen} onOk={()=>handleOk(item?.key)} onCancel={handleCancel}>
                <p>Some contents.........</p>
              </Modal>
            </Space>
          </Row>
        );
      },
      width: "1%",
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
        pagination={false}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        total={10}
        pageSize={2}
      ></Pagination>
    </div>
  );
};

export default StudentData;
