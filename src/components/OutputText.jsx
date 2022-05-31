import { useEffect } from "react"

export default function OutputText({output}){
    return(
        <div className="div4">
            <div className="Output-Text">
                <span>{output}</span>
            </div>
        </div>
    )
}