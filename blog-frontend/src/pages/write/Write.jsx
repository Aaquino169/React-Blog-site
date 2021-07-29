import './write.css'

export default function Write() {
    return (
        <div className="write">
            <form className="writeForm">
                <div className="writeFormGroup">
                    <h2 className="imgLable">Image:</h2>
                    <input type="file" id="fileInput"/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Description" type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
