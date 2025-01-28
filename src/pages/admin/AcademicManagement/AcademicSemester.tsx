import { useGetAllSemesterQuery } from "../../../redux/features/AcademicSemester/academicSemesterApi";


const AcademicSemester = () => {
    const {data} = useGetAllSemesterQuery(undefined)
    return (
        <div>
            <p>This is academic semester</p>
        </div>
    );
};

export default AcademicSemester;