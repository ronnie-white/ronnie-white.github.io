import React from 'react';

function Portfolioitem({}){
    return(
    
        <div class="flex h-screen items-center justify-center bg-white px-6 md:px-60">
          <div class="space-y-6 border-l-2 border-dashed">
            <div class="relative w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
              <div class="ml-6">
                <h3 class="font-bold text-blue-500">Full Stack Developer</h3>
                <h4 class="font-bold text-blue-500">Research Foundation CUNY - Albany, NY</h4>
                <span class="mt-1 block text-sm font-semibold text-blue-500">June 2022 to Present</span>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">Full stack Development of CUNY RF LMS (Learning management system) using HMTL, CSS,Javascript,
Jquery, MSSQL and Cold Fusion. At CUNY RF I developed web applications based on specifications
provided. Maintained and created databases in MSSQL, and tested applications to identify defects in code
and documentation. </p>
<span class="mt-1 block text-sm font-semibold text-blue-500">HTML/CSS/Javascript/JQuery/MSSQL/Cold Fusion/ReactJS</span>
                
              </div>
            </div>
            <div class="relative w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
              <div class="ml-6">
                <h3 class="font-bold text-blue-500">Full Stack Developer</h3>
                <h4 class="font-bold text-blue-500">Chalkboard - Albany, NY</h4>
                <span class="mt-1 block text-sm font-semibold text-blue-500">December 2020 to May 2022</span>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">Using Agile Scrum Methodology my team recreated a blackboard quiz CRUD app. The web app was
made with a RESTful API using Node.js and Express that connected to a MySQL database deployed on
Azure. While working in this collaborative environment I used key scrum metrics (sprint burn down, team
velocity) to deliver committed work and Github for version control.</p>
<span class="mt-1 block text-sm font-semibold text-blue-500"> AZURE/NodeJS/MYSQL/Express</span>
                
              </div>
            </div>
            <div class="relative w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
              <div class="ml-6">
                <h3 class="font-bold text-blue-500">Full Stack Developer</h3>
                <h4 class="font-bold text-blue-500">AATLAS - Albany, NY</h4>
                <span class="mt-1 block text-sm font-semibold text-blue-500">February 2019 to November 2020</span>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">While working with AATLAS I used responsive web designs and development principles to bring mockups
to life as requested. I collaborated closely with the program to provide support during all delivery phases.
Monitoring the website performance and fixing front-end-related issues while coherently communicating
technical issues to my client.</p>
<span class="mt-1 block text-sm font-semibold text-blue-500">HTML/JS/CSS/WordPress</span>
                
              </div>
            </div>
            <div class="relative w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
              <div class="ml-6">
                <h3 class="font-bold text-blue-500">University at Albany</h3>
                <h4 class="font-bold text-blue-500">B.S. in Computer Science</h4>
                <span class="mt-1 block text-sm font-semibold text-blue-500">August 2016 to May 2020</span>         
              </div>
            </div>





          </div>
        </div>
        
    )
}

export default Portfolioitem;