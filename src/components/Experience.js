import React from 'react'
import Image from '../picture/image.png'
import Cert from '../picture/ceert.png'
import offer from '../picture/offer.png'
function Experience(){
    return(
        <>
        
        <div className='intern'>
            <img src={Image} className='imgss'/>
            <div className='bod'>            <p>Here I worked as a summer intern for the duration(JUNE2024- AUGUST2024)
                ,Here we are given Task for every week As I was an Sql Intern 
                we have to create table and data Manipulate Table and Perform update,delete Alterations </p>

                
        </div>
        <img src={Cert} className='imgsss'/>
        <img src={offer} className='imgsss'/>
        </div>

        
        
        
        
        
        
        </>
    )
}
export default Experience;