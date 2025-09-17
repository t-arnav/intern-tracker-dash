import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  logo?: string;
  color?: string;
}

interface SkillLogosProps {
  skills: string[];
}

const skillsData: Record<string, Skill> = {
  "React": { name: "React", logo: "⚛️", color: "bg-blue-100 text-blue-600" },
  "JavaScript": { name: "JavaScript", logo: "🟨", color: "bg-yellow-100 text-yellow-600" },
  "Python": { name: "Python", logo: "🐍", color: "bg-green-100 text-green-600" },
  "Node.js": { name: "Node.js", logo: "🟢", color: "bg-green-100 text-green-600" },
  "Git": { name: "Git", logo: "📝", color: "bg-orange-100 text-orange-600" },
  "AWS": { name: "AWS", logo: "☁️", color: "bg-orange-100 text-orange-600" },
  "MongoDB": { name: "MongoDB", logo: "🍃", color: "bg-green-100 text-green-600" },
  "TypeScript": { name: "TypeScript", logo: "🔷", color: "bg-blue-100 text-blue-600" },
  "Docker": { name: "Docker", logo: "🐳", color: "bg-blue-100 text-blue-600" },
  "Vue.js": { name: "Vue.js", logo: "💚", color: "bg-green-100 text-green-600" },
  "Angular": { name: "Angular", logo: "🔺", color: "bg-red-100 text-red-600" },
  "Java": { name: "Java", logo: "☕", color: "bg-orange-100 text-orange-600" },
  "C++": { name: "C++", logo: "⚡", color: "bg-purple-100 text-purple-600" },
  "PHP": { name: "PHP", logo: "🐘", color: "bg-purple-100 text-purple-600" },
  "SQL": { name: "SQL", logo: "🗄️", color: "bg-blue-100 text-blue-600" },
  "GraphQL": { name: "GraphQL", logo: "⚡", color: "bg-pink-100 text-pink-600" },
  "Firebase": { name: "Firebase", logo: "🔥", color: "bg-orange-100 text-orange-600" },
  "Redux": { name: "Redux", logo: "🔄", color: "bg-purple-100 text-purple-600" },
  "Tailwind": { name: "Tailwind", logo: "💨", color: "bg-blue-100 text-blue-600" },
  "Bootstrap": { name: "Bootstrap", logo: "🅱️", color: "bg-purple-100 text-purple-600" },
};

const SkillLogos = ({ skills }: SkillLogosProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => {
        const skillData = skillsData[skill] || { name: skill, logo: "🔧", color: "bg-gray-100 text-gray-600" };
        
        return (
          <Badge 
            key={index} 
            variant="secondary" 
            className={`flex items-center gap-2 px-3 py-1 text-sm font-medium ${skillData.color} border-0 hover:scale-105 transition-transform`}
          >
            <span className="text-base">{skillData.logo}</span>
            <span>{skillData.name}</span>
          </Badge>
        );
      })}
    </div>
  );
};

export default SkillLogos;