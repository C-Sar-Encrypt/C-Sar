export default function InputRot({
    rotation,
    setRotation,
}){
    return(
        <div className="div2">
            <input
                type="number"
                className="Input-Rot"
                name="inputRot"
                value={rotation}
                onChange={(e) => setRotation(Number(e.target.value))}
                required
            ></input>
        </div>
    )
}