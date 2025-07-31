'use client';
import { useState } from "react";
import ExperienceSection from "../app/Experience/page";


export default function RightPanel(){
    const [active, setActive] = useState(0);
    return(
        <aside className="pt-20">
            <div className="flex">
                <button 
                    className={active===0? 'text-black' : 'text-gray-700'}
                    onClick={() => setActive(0)}>
                </button>
                
            </div>
            <ExperienceSection></ExperienceSection>



        </aside>
    );
}