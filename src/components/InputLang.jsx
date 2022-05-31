export default function InputLang({
    language,
    setLanguage,
}){
    return(
        <div className="div3">
            <select
                className="Input-Language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
            >
                <option className="Option" value="eng">English</option>
                <option className="Option" value="spa">Spanish</option>
            </select>
        </div>
    )
}