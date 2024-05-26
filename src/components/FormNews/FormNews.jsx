import { useState } from "react";
import { useNavigate, Navigate } from 'react-router-dom';


const Notice = () => {
    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")


    const submitNew = (e) => {
        e.preventDefault()
        const newNotice = {
            title,
            summary,
        }
        localStorage.setItem('notice', JSON.stringify(newNotice))

        setTitle("")
        setSummary("")
        setRedirect(true)
    }
    if (redirect) {
        return <Navigate to="/News" />;
      }
    
    return (
        <div>
            <h1>Tell us your news</h1>
            <input type="text" name="title" id="title" placeholder="Insert your title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" name="summary" id="summary" placeholder="Insert the hs " value={summary} onChange={(e) => setSummary(e.target.value)} />
            <button onClick={submitNew}>Send</button>
        </div>
    )
}

export default Notice