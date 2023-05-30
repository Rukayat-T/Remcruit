import {
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../static/Steps.css";
import { useEffect, useState } from "react";

function CVUpload({ data, setData, fileData}) {
  const [clicked, setClicked] = useState(false);
  const [fileName, setFileName] = useState(data.credential.credential_name);

  // data.credential.credential_name is the old name of the file then the new name
  // becomes data.credential.name
  
  const deleteFile = (id) => {
    try {
      let url = `http://127.0.0.1:8000/jobseekers/credential/${id}`;
      fetch(url, {
        method: "DELETE",
      });
    } catch (err) {
      console.log(err);
    }
  };
useEffect(() => {
  if (clicked){
    setFileName(data.credential.name);
  }
}, [data])
  

  const DisplayP = () => {
    return <p>{fileName}</p>;
  };

  const handleChange = (event) => {
    if (data.credential != undefined) {
      deleteFile(data.credential.id);
    }

    setData({ ...data, credential: event.target.files[0] });
    setClicked(true);
  };

  return (
    <div>
      <div className="file-card">
        <div className="file-inputs">
          <div className="credential-box">
            <div className="credential-icon">
              <FontAwesomeIcon
                icon={faFileLines}
                style={{ color: "#CA61C3", fontSize: "1.3rem" }}
              />
            </div>
            {DisplayP()}

            <a
              href=""
              download
            >
              <button>View CV</button>
            </a>
          </div>
          <p>Upload CV or drag and drop</p>
          <p>PDF, DOCX, DOC, RTF, TXT up to 1MB</p>
          <div className="input-container">
            <input
            onClick={() => {setClicked(true)}}
              type="file"
              name=""
              id=""
              accept=".pdf,.docx,.doc,.rtf,.txt"
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVUpload;
