import { Button, Table, TableColumnsType, Tag } from "antd";

import {  TSemester } from "../../../types";

import { useGetAllSemestersQuery } from "../../../redux/features/admin/CourseManagement";
import moment from "moment";

export type TTableData = Pick<
  TSemester,
  "_id" | "academicSemester" | "startDate" | "endDate" | "status"
>;
// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }
const RegisteredSemester = () => {
//   const [params, setParamas] = useState<TQuearyParams[] | undefined>(undefined);
const {data:semesterData,isLoading,isFetching} = useGetAllSemestersQuery(undefined)
 
  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, startDate, endDate, status }: TTableData) => ({
      key: _id,
      name:`${academicSemester.name} ${academicSemester.year}`,
      startDate: moment(new Date(startDate)).format("MMMM"),
      endDate:moment(new Date(endDate)).format("MMMM"),
      status
      
    })
  );
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (item) => {
        if (item === "UPCOMING") {
          return <Tag color="blue">{item}</Tag>;
        } else if (item === "ENDED") {
          return <Tag color="red">{item}</Tag>;
        } else {
          return <Tag color="green">{item}</Tag>;
        }
      }
    },
    {
      title: "Start Date",
      key: "startDate",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      key: "endDate",
      dataIndex: "endDate",
    },
    {
        title:'Action',
        key:"x",
        render:()=>{
            return (
                <div>
                    <Button>update</Button>
                </div>
            )
        }
    }
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
  return <div>Loading........</div>
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

export default RegisteredSemester;
