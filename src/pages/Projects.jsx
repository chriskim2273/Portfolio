import React, { useRef } from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow, github } from '../assets/icons'
import CTA from '../components/CTA'
import YouTube from 'react-youtube'
import { Element, Link as Scroller } from 'react-scroll'

const handleSetActive = (to) => {
    console.log(to);
};

const Projects = () => {
    const ref = useRef(null);

    return (
        <section className="max-container">
            <h1 className="head-text">
                My{" "}
                <span className="yellow-gradient_text font-semibold drop-shadow">
                    Projects
                </span>
            </h1>

            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>
                    Projects I am proud to share! I am currently working on many projects. I love making discord bots, useful and funny web-apps, chrome extentions, and more!
                </p>
            </div>

            <div className='mt-10'>
                {/*
                    <p className='font-poppins'>
                        Links to Projects
                    </p>
                */}
                <div className='rounded-lg border-2 border-black bg-blue-50 p-4 flex flex-wrap overflow-x-auto gap-5 items-center justify-center'>
                    {projects.map((project, idx) => (
                        <Scroller
                            style={{ cursor: "pointer" }}
                            className="nav-link blue-gradient_text"
                            to={String(project.name)}
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={1000}
                            key={String(project.name)}
                        >
                            {project.name}
                        </Scroller>
                    ))}
                </div>
            </div>

            <div className='flex flex-wrap my-20 gap-52'>
                {projects.map((project) => (
                    <Element name={project.name} key={project.name} className='element lg:w=[400px] w-full rounded-lg bg-blue-50 drop-shadow-2xl'>
                        {/*
                            <div className='block-container w-12 h-12 flex'>
                                <div className={`btn-back rounded-xl ${project.theme}`} />
                                <div className='btn-front rounded-xl flex justify-center items-center'>
                                    <img
                                        src={project.iconUrl}
                                        alt="Project Icon"
                                        className='w-1/2 h-1/2 object-contain' />
                                </div>
                            </div>
                        */}
                        <div className='flex flex-col p-10'>
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <div>
                                {
                                    /*
                                    projects.technologies.map((tech) => (
                                        <p>tech</p>
                                    ));
                                    */
                                }
                            </div>
                            <p className='mt-2 text-slate-500'>
                                {project.description}
                            </p>
                            <div className='mt-5 flex justify-center items-center'>
                                <YouTube videoId={"2g811Eo7K8U"
                                    //projects.videoId
                                } opts={{
                                    height: '390',
                                    width: '640',
                                    playerVars: {
                                        autoplay: 1,
                                    },
                                }} onReady={(event) => {
                                    event.target.pauseVideo();
                                }} />
                            </div>
                            <div className='mt-7 flex items-center justify-center gap-20 font-poppins'>
                                <div className='flex items-center justify-center gap-2 font-poppins'>
                                    <Link to={project.link} target="_blank" rel="noopener noreferrer" className='front-semibold text-blue-600'>
                                        Live Link
                                    </Link>
                                    <img
                                        src={arrow}
                                        alt="arrow"
                                        className='w-4 h-4 object-contain' />
                                </div>
                                <div className='flex items-center justify-center gap-2 font-poppins'>
                                    <Link to={project.github} target="_blank" rel="noopener noreferrer" className='front-semibold text-blue-600'>
                                        Github Link
                                    </Link>
                                    <img src={github}
                                        alt="github"
                                        className='w-4 h-4 object-contain'
                                    />
                                </div>
                            </div>
                        </div>
                    </Element>
                ))}
            </div>

            <hr className='border-black-500' />
            <CTA />
        </section>
    )
}

export default Projects