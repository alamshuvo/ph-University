
import { useParams } from 'react-router-dom';

const StudentDetails = () => {

    const {studetnId} = useParams();
   
    return (
        <div>
            <p>This is student Id from {studetnId}</p>
        </div>
    );
};

export default StudentDetails;