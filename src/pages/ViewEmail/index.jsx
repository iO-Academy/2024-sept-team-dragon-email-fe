import { useParams } from "react-router-dom"

function ViewEmail() { 
    const {id} = useParams
    
    return (

        <div>
            {id}
        </div>
        
 )
}
export default ViewEmail