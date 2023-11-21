import React from 'react';
import portfolio from '../data/portfolio';
import Portfolioitem from './Portfolioitem';


function Portfolio(){
    return(
       
<div className="flex flex-col md:flex-row items-center justify-center">
<div className="grid grid-cols-1 md:grid-cols-2 1g:grid-cols-3 gap-4">
{portfolio.map(resume => (
    <Portfolioitem 
    date={resume.date}
    title={resume.title}
    detail={resume.detail}
    tools={resume.tools}
    />
    
      ))}
           
</div>
</div>


          
  

       
    )
}

export default Portfolio;