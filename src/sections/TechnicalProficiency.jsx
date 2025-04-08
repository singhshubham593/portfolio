import React, {useState} from "react";
import Tabs from "../components/Tabs";
import { motion } from "framer-motion";
import { SKILL_TABS, SKILLS } from "../utili/data";
import SkillCard from "../components/SkillCard";


const TechnicalProficiency=()=> {
  const [tabData, setTabData]= useState(SKILLS);
  const [activeTab, setActiveTab]= useState("all");
  const handleTabValueChange = (value) => {
    if (value == "all") {
      setTabData(SKILLS);
      setActiveTab("all");
      return;
    }
    const updatedList = SKILLS.filter((skill)=> skill.type === value);
    setTabData(updatedList);

    setActiveTab(value);
  };


  return(
  <section id="skills" className="bg-background mt-20">
    <div className="container mx-auto p-10">
      <div className="w-full lg:w-[60vw] mx-auto">
        <h4 className="section-title">Technical Proficiency</h4>
        <p className="text-sm text-centre mt-4 leading-4">
          A versatile developer with hands-on expertise in modern 
          tecgnologies,tool, and frameworks, dedicated to Building
          efficient, scalable, and user-centric solution.
        </p> 
    </div>
    <Tabs
      tabList= {SKILL_TABS}
      activeTab= {activeTab}
     onChange= {handleTabValueChange}
    />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]">
    {tabData.map((skill, index)=>(
      <motion.div key={skill.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        >
        <SkillCard 
          icon={<skill.icon className="w-6 h-6 text-primary" />}
          skillName={skill.skill}
          description={skill.description}
          progress={skill.progress}
        />
      </motion.div>
    ))}
    </div>
   </div>
  </section>
  );
};

export default TechnicalProficiency;
