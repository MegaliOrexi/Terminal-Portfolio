import React, {useState, useRef, useEffect} from 'react'
import ContactMe from './ContactMe';
import Projects from './Projects';
import AboutMe from './AboutMe';

const UserInput = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [showContactme, setShowContactme] = useState(false);
  const [showProjects, setShowProjects] = useState(false); 
  const [showAboutMe, setShowAboutMe] = useState(false); 
  const targetRef = useRef(null);

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showContactme, showProjects, showAboutMe]);


  return (
    
    <div className='whitespace-pre-line'>
      ~&gt;
      <input
      type = "text"
      value={input}
      className="bg-transparent outline-none border-none text-white flex-grow "
      onChange={
        e => setInput(e.target.value)
      }
      onKeyDown={
        e => {
          if (e.key === "Enter" && input.trim() !== ""){
            let newOutput = "";
            newOutput = output;
            switch (input.toLowerCase().trim()) {
              case 'help':
                newOutput +=
                `
                <div id="About">
                <strong>AboutMe:</strong>
                - Stalker spotted
                
                <strong>Projects:</strong>
                - It Aint Much but its honest work
                
                <strong>ContactMe:</strong>
                - Heyyy *wink wink*
                
                <strong>Clear:</strong>
                - *Think thanos Snap*
                </div>
                \n
                `
                break;
              case 'aboutme':
                setShowAboutMe(true);
                setShowContactme(false);
                setShowProjects(false);
                break;
                case 'contactme':
                  setShowContactme(true);
                  setShowProjects(false);
                  setShowAboutMe(false);
                  break;
                  case 'projects':
                    setShowProjects(true);
                    setShowContactme(false);
                    setShowAboutMe(false);
                    break;
                    case 'clear':
                      newOutput = "";
                      setShowContactme(false);
                      setShowProjects(false);
                setShowAboutMe(false);
                break;
                default:
                  newOutput +=  `<div id="error"><span style="color: red;">${input} is not a correct command</span>\n\n</div>`
                  
                  break;
                }
                setOutput(newOutput)
                setInput("")
              }
        }
      }        
      />
    <div className={`p-5 `} dangerouslySetInnerHTML={{ __html: output }} />
    {showContactme && <ContactMe />}
    {showProjects && <Projects />}
    {showAboutMe && <AboutMe />}
    <div ref={targetRef}></div>
    </div>
  )
}

export default UserInput