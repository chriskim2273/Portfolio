import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences, skills } from '../constants';
import CTA from '../components/CTA';

const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                Hello, I'm{" "}
                <span className="yellow-gradient_text font-semibold drop-shadow">
                    Christopher
                </span>
            </h1>

            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>
                    I am a student at Stony Brook University studying Computer Science. I am currently in my Junior Year.
                </p>
            </div>

            <div className="py-10 flex flex-col">
                <h3 className='subhead-text'>
                    My Skills
                </h3>
                <div className='mt-16 flex flex-wrap gap-12'>
                    {skills.map((skill, idx) => (
                        <div key={"skill_" + String(idx)} className='block-container w-20 h-20'>
                            <div className='fire-border btn-back rounded-xl' />
                            <div className='fire-border btn-front rounded-xl flex justify-center items-center'>
                                <img src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='py-16'>
                <h3 className='="subhead-text'>
                    Work Experience
                </h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        I am currently a Data Engineer/Software Development Intern at IOTNation. I am super passionate about software and am open to any conversation!
                    </p>
                </div>

                <div className='mt-12 flex flex-wrap gap-12'>
                    <VerticalTimeline>
                        {experiences.map((experience) => (
                            <VerticalTimelineElement key={"experience_" + experience.company_name} date={experience.date} icon={<div className='flex justify-center items-center w-full h-full'>
                                <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
                            </div>} iconStyle={{ background: experience.iconBg }} contentStyle={{ borderBottom: '8px', borderStyle: 'solid', borderBottomColor: experience.iconBg, boxShadow: 'none' }}>
                                <div>
                                    <h3 className='text-black text-xl font-poppins font-semibold'>
                                        {experience.title}
                                    </h3>
                                    <p className='text-black-500/75 font-medium font-base' style={{ margin: 0 }}>
                                        {experience.company_name}
                                    </p>
                                </div>

                                <ul className='my-5 list-disc ml-5 space-y-2'>
                                    {experience.points.map((point, pidx) => (
                                        <li key={"experience_point_" + String(pidx)} className='text-black-500 font-normal pl-1 text-sm'>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        )
                        )}
                    </VerticalTimeline>
                </div>
            </div>

            <hr className='border-black-500' />
            <CTA />
        </section >
    )
}

export default About