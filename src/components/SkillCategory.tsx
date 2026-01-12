import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Skill {
    name: string;
    percentage: number;
}

interface SkillCategoryProps {
    title: string;
    icon: LucideIcon;
    skills: Skill[];
    delay?: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon: Icon, skills, delay = 0 }) => {
    return (
        <div
            className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-500 group animate-fade-in"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>

            <div className="space-y-4">
                {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-1.5">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-300 font-medium">{skill.name}</span>
                            <span className="text-primary font-bold">{skill.percentage}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-primary/50 to-primary rounded-full transition-all duration-1000 ease-out"
                                style={{
                                    width: `${skill.percentage}%`,
                                    transitionDelay: `${delay + (index * 100)}ms`
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillCategory;
