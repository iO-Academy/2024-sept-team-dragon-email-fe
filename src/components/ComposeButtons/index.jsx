import CancelButton from "../CancelButton"
import SendButton from "../SendButton"

function ComposeButtons() {
    return(
        <div className="flex gap-1">
            <CancelButton />
            <SendButton />
        </div>
    )
}

export default ComposeButtons