import {useEffect,useState} from "react";
import tagCloud from "TagCloud";
import './index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';


const Technologies = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
          // Todo color each type of skill (web, data science, coding concepts)
          // Todo replace text with svg icons
          tagCloud(
            '.tagcloud-container',
            [
              'Typescript',
              'Javascript',
              'Express',
              'Node',
              
              'MUI',
              'Bootstrap',
              'Sass',
              'CSS',
              'HTML',
              'Git',
              'MongoDB',
              'React',
            ],
            {
              radius:   350,
              maxSpeed: 'Fast',
              initSpeed: 'normal',
              direction: 135,
              keep: false,
              useContainerInlineStyles: false,
            },
          );
        
        return () => {
          let tagClouds = document.getElementsByClassName('tagcloud');
          for (let i = 0; i < tagClouds.length; i++) {
            tagClouds[0].remove();
          }
        };
        
      }, []);
//    const container = '.tagcloud';
//    const texts= ['HTML','CSS','Javascript','React', 'Typescript', 'Node.js','Express', 'MUI', 'Bootstrap', 'Contentful', 'Git']
//    const options = {

//    }
    return (
  <div>
          <div className="container technologies-page">
        <div className="text-zone">
             <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={'Technologies'.split("")}
                        idx={15}
                    />
                </h1>
                </div>
       <div className="stack-sphere">
       <div
        className={
          'tagcloud-container z-1 w-1/2 flex justify-center items-center h-full'
        }
      />
       </div>  
    
    
    </div>
    <Loader type="pacman" />
  </div>
    )
}

export default Technologies;