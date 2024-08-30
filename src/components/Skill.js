import React from 'react';
import Html from '../picture/html5.png';
import Css from '../picture/css.jpg';
import Js from '../picture/js.png';
import ReactImg from '../picture/react.jpg';
import Php from '../picture/php.jpg';
import Java from '../picture/java.jpg';
import Dsa from '../picture/dsa.png';
import Sql from '../picture/sql.png';


function Skill() {
    return (
        <>
            <div className='skills'>
                <h3><b>SKILLS</b></h3>

                <div className='imgset'>
                    <img src={Html} alt="HTML5" className='pic'/>
                    <img src={Css} alt="CSS" className='pic'/>
                     <img src={Js} alt="JavaScript" className='pic'/>
                    <img src={ReactImg} alt="React" className='pic'/>
                    <img src={Php} alt="PHP" className='pic'/>
                    <img src={Java} alt="Java" className='pic'/>
                    <img src={Dsa} alt="Data Structures and Algorithms" className='pic'/>
                    <img src={Sql} className='pic'/>
                </div>
            </div>
        </>
    );
}

export default Skill;
