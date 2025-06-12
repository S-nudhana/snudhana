import type { Skill } from '../types/skill';

export default function ExpertiseCard({ skill }: { skill: Skill }) {
    return (
        <div
            className="flex items-center justify-center align-middle p-[22px] gap-7 text-gray border-[1px] border-neutral-700 rounded-2xl hover:border-neutral-500 transition duration-300 ease-in-out"
        >
            <div className="text-yellow text-[40px]">{skill.icon}</div>
            <div className="flex flex-col">
                <h2 className="text-white font-semibold">
                    {skill.title}
                </h2>
                <p className="text-gray">{skill.description}</p>
            </div>
        </div>
    )
}
