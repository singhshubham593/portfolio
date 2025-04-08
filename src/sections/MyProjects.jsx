import React from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect,useState,useCallback } from 'react';
import {IoIosArrowForward} from "react-icons/io";
import { PROJECTS } from '../utili/data';
import ProjecCard from '../components/ProjecCard';

const MyProjects = () => {
    const [enblaRef, enblaApi] = useEmblaCarousel ({Loop: true, aligns: "start" }); 
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext]= useState(false);
    
    const updateScrollButtons =useCallback(() => {
      if (!enblaApi) return;
        setCanScrollPrev(enblaApi.canScrollPrev());
        setCanScrollNext(enblaApi.canScrollNext());
    }, [enblaApi]);

    useEffect(() => {
        if (!enblaApi) return;
        enblaApi.on('select', updateScrollButtons);
    }, [enblaApi, updateScrollButtons]);
  return (
    <section id="projects" className="bg-background mt-14">
        <div classNames="container mx-auto px-10 md:px-18 py-10">
            <div className="w-full lg:w-(60vw] mx-auto">
                <h4 className="section-title">Recent Projects</h4>
                <p className="text-sm text-center mt-4 leading-6">
                    From concept to deployment, these projects showcase 
                    my technical expertise. I focus on clean code, performance, 
                    and user experience.
                </p>
            </div>

            <div className="relative">
                <div className="overflow-hidden" ref={enblaRef}>
                    <div className="flex pt-14 pb-8">
                        {PROJECTS.map((project) => (
                            <div
                                key={project.id}
                                className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]"
                            >
                            <ProjecCard
                                key={project.id}
                                imgUrl={project.image}
                                title={project.title}
                                tags={project.tags}
                            />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Navigation Button */}
                <button
                        className={`arrow-btn -left-5 ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={() => enblaApi && enblaApi.scrollPrev()}
                    >
                        <IoIosArrowForward className='rotate-180' />
                </button>
                <button
                        className={`arrow-btn -right-5 ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={() => enblaApi && enblaApi.scrollNext()}
                    >
                        <IoIosArrowForward/>
                </button>
            </div>
        </div>
    </section>
  )
}

export default MyProjects
