import React, { useRef } from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow, github, mindgear, python, questionmark, starexclaim } from '../assets/icons'
import CTA from '../components/CTA'
import YouTube from 'react-youtube'
import { Element, Link as Scroller } from 'react-scroll'
import { Slide, Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const handleSetActive = (to) => {
    console.log(to);
};

const Projects = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];
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
                <p className='mt-1 font-semibold'>
                    Click on any project name to jump to its info!
                </p>
            </div>

            <div className='mt-7'>
                {/*
                    <p className='font-poppins'>
                        Links to Projects
                    </p>
                */}
                <div className='rounded-lg border-2 border-black bg-blue-50 p-4 grid gap-6 items-center justify-center'>
                    {projects.map((project, idx) => (
                        <Scroller
                            style={{ cursor: "pointer" }}
                            className="nav-link blue-gradient_text font-semibold"
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
                            <img src={github}
                                alt="github"
                                className='mx-auto w-10 h-10'
                            />
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <div className='flex justify-center gap-2 my-2'>
                                <p className='underline'>STATUS: </p>
                                {project.completed == true && <p className='font-bold text-green-400'>COMPLETED</p>}
                                {project.completed != true && project.mvp != true && <p className='font-bold text-red-400'>IN PROGRESS</p>}
                                {project.mvp == true && <p className='font-bold text-blue-400'>MVP</p>}
                            </div>
                            <div className='flex justify-center items-center gap-5'>
                                {
                                    project.technologies.map((tech) => (
                                        <img src={tech} alt={"tech"} key={`${project}_${tech}`} className='w-6 h-6 drop-shadow-md'></img>
                                    ))
                                }
                            </div>
                            <p className='mt-2 text-slate-500'>
                                {project.description}
                            </p>
                            <div className='mt-2 border'>
                                <div className='flex items-center justify-center gap-2 mt-2'>
                                    <img src={questionmark} // change to question mark
                                        alt="questionmark"
                                        className='w-4 h-4 object-contain'
                                    />
                                    <p className=' font-semibold'>Why?</p>
                                </div>
                                <p>{project.why}</p>
                            </div>
                            <div className='border'>
                                <div className='flex items-center justify-center gap-2 mt-2'>
                                    <img src={starexclaim}
                                        alt="questionmark"
                                        className='w-4 h-4 object-contain'
                                    />
                                    <p className='font-semibold'>Services Used/Shoutouts</p>
                                </div>
                                <p>{project.shoutouts}</p>
                            </div>
                            <div className='border'>
                                <div className='flex items-center justify-center gap-2 mt-2'>
                                    <img src={mindgear}
                                        alt="mindgear"
                                        className='w-4 h-4 object-contain'
                                    />
                                    <p className='font-semibold'>What I Learned</p>
                                </div>
                                <p>{project.learned}</p>
                            </div>
                            {project.images != undefined && <div className='mt-5 justify-center items-center'>
                                <Slide scale={0.4} className='flex justify-center'>
                                    {project.images.map((image) => (
                                        <img className='mx-auto' src={image} key={`${image}_image`} />
                                    ))}
                                </Slide>
                            </div>}
                            <div className='mt-5 flex justify-center items-center'>
                                {/*<YouTube videoId={"2g811Eo7K8U"
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
                            */}
                            </div>
                            <div className='mt-7 flex items-center justify-center gap-20 font-poppins'>
                                {project.link != '' && (<div className='flex items-center justify-center gap-2 font-poppins'>
                                    <Link to={project.link} target="_blank" rel="noopener noreferrer" className='front-semibold text-blue-600'>
                                        Live Link
                                    </Link>
                                    <img
                                        src={arrow}
                                        alt="arrow"
                                        className='w-4 h-4 object-contain' />
                                </div>)}
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
        </section >
    )
}

export default Projects