import { useGetAllSemesterQuery } from "../../../redux/features/AcademicSemester/academicSemesterApi";


const AcademicSemester = () => {
    const {data} = useGetAllSemesterQuery(undefined)
    console.log(data,"academic semester tekhe");
    return (
        <div>
            <p>This is academic semester</p>
        </div>
    );
};

export default AcademicSemester;