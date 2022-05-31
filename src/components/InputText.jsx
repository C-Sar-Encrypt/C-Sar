import { useEffect } from "react"

export default function InputText({
    text,
    setText,
}){
    return(
        <div className="div1">
            <input
                type="password"
                className="Input-Box"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            ></input>
        </div>
    )
}