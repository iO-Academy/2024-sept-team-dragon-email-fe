import EmailForm from "../../components/EmailForm"

function ComposePage(){

    return(
        <div className="flex flex-col">
            <EmailForm/>
            <div className="self-end pr-8">
            </div>
        </div>
    )
}

export default ComposePage