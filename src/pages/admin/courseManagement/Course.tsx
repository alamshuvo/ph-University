import { Button, Dropdown, Modal, Table, TableColumnsType, Tag } from "antd";

import { TSemester } from "../../../types";

import {
  useGetAllCoursesQuery,
  useUpdateRegisterSemesterMutation,
} from "../../../redux/features/admin/CourseManagement";
import { useState } from "react";
import PHForm from "../../../components/form/PhForm";
import PhSelect from "../../../components/form/PhSelect";
import { useGetAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement.api";

export type TTableData = Pick<TSemester, "_id" | "title" | "code" | "prefix">;
// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }

// const items = [
//   {
//     label: "Upcoming",
//     key: "UPCOMING",
//   },
//   {
//     label: "Ongoing",
//     key: "ONGOING",
//   },
//   {
//     label: "Ended",
//     key: "ENDED",
//   },
// ];

const Course = () => {
  const [semesterId, setSemesterId] = useState("");
  console.log(semesterId);
  //   const [params, setParamas] = useState<TQuearyParams[] | undefined>(undefined);
  const {
    data: courseData,
    isLoading,
    isFetching,
  } = useGetAllCoursesQuery(undefined);
  const [updateSemesterStatus] = useUpdateRegisterSemesterMutation(undefined);

  const tableData = courseData?.data?.map(
    ({ _id, title, code, prefix }: TTableData) => ({
      key: _id,
      title: title,
      code: code,
      prefix: prefix,
      //   name: `${academicSemester.name} ${academicSemester.year}`,
      //   startDate: moment(new Date(startDate)).format("MMMM"),
      //   endDate: moment(new Date(endDate)).format("MMMM"),
      //   status,
    })
  );
  const handleStatusUpdate = (data) => {
    const updateData = {
      id: semesterId,
      data: {
        status: data?.key,
      },
    };
    updateSemesterStatus(updateData);
  };
  const menuProps = {
    // items,
    onClick: handleStatusUpdate,
  };
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    // {
    //   title: "Status",
    //   key: "status",
    //   dataIndex: "status",
    //   render: (item) => {
    //     if (item === "UPCOMING") {
    //       return <Tag color="blue">{item}</Tag>;
    //     } else if (item === "ENDED") {
    //       return <Tag color="red">{item}</Tag>;
    //     } else {
    //       return <Tag color="green">{item}</Tag>;
    //     }
    //   },
    // },
    {
      title: "Code",
      key: "code",
      dataIndex: "code",
    },
    {
      title: "Prefix",
      key: "prefix",
      dataIndex: "prefix",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        // return (
        //   <div>
        //     <Dropdown menu={menuProps} trigger={["click"]}>
        //       <Button onClick={() => setSemesterId(item?.key)}>
        //         Assign faculty
        //       </Button>
        //     </Dropdown>
        //   </div>
        // );
        return <AddFacultyModal data={item} />;
      },
    },
  ];

  //   const onChange: TableProps<TTableData>["onChange"] = (
  //     pagination,
  //     filters,
  //     sorter,
  //     extra
  //   ) => {
  //     if (extra.action === "filter") {
  //       const quearyParams:TQuearyParams[] = [];
  //       filters.name?.forEach((item) =>
  //         quearyParams.push({ name: "name", value: item })
  //       );
  //       setParamas(quearyParams);
  //     }
  //     console.log("params", pagination, filters, sorter, extra);
  //   };

  if (isLoading) {
    return <div>Loading........</div>;
  }

  return (
    <div>
      <Table<TTableData>
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        // onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

const AddFacultyModal = ({ data }) => {
  console.log(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {data:facultiesData} = useGetAcademicFacultiesQuery(undefined);
  console.log(facultiesData);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleSubmit=(data)=>{
    console.log(data);
  }
  return (
    <>
      <Button onClick={showModal}>Add Faculty</Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk}>
        <PHForm onSubmit={handleSubmit}>
            <PhSelect ></PhSelect>
        </PHForm>
      </Modal>
    </>
  );
};

export default Course;
