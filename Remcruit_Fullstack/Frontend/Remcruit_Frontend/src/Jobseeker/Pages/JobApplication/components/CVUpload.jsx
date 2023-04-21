import { faArrowUpFromBracket, faFileCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../static/Steps.css'

function CVUpload() {
  return (
    <div>
      <div className="file-card">
        <div className="file-inputs">
        <FontAwesomeIcon icon={faFileCircleCheck} className="icc"style={{color: "#000000",}} />
        <p>CV or Cover Letter</p>
        <p>Upload or drag and drop</p>
        <p>PDF, DOCX, DOC, RTF, TXT up to 1MB</p>

        <input type="file" name="" id="" />
        <button>
          <i>
          <FontAwesomeIcon icon={faArrowUpFromBracket} style={{color: "#000000",}} />
          </i>
          Upload
        </button>
        </div>
        
      </div>
    </div>
  )
}

export default CVUpload
