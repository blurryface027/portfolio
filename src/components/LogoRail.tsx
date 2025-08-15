import React from "react";
import "./LogoRail.css";

type Logo = { src: string; alt: string };

const logos: Logo[] = [
  // 💻 Coding & Development
  { src: "/logos/html.png", alt: "HTML" },
  { src: "/logos/css.png", alt: "CSS" },
  { src: "/logos/js.png", alt: "JavaScript" },
  { src: "/logos/ts.png", alt: "TypeScript" },
  { src: "/logos/react.png", alt: "React" },
  { src: "/logos/nextjs.png", alt: "Next.js" },
  { src: "/logos/angular.png", alt: "Angular" },
  { src: "/logos/jquery.png", alt: "jQuery" },
  { src: "/logos/nodejs.png", alt: "Node.js" },
  { src: "/logos/postgres.png", alt: "PostgreSQL" },
  { src: "/logos/cplus.png", alt: "C++" },
  { src: "/logos/kubernetes.png", alt: "Kubernetes" },
  { src: "/logos/docker.png", alt: "Docker" },
  { src: "/logos/linux.png", alt: "Linux" },
  { src: "/logos/git.png", alt: "Git" },
  { src: "/logos/github.png", alt: "GitHub" },
  { src: "/logos/aws.png", alt: "AWS" },
  { src: "/logos/vscode.png", alt: "VS Code" },
  { src: "/logos/wp.png", alt: "WordPress" },

  // 🎨 Design & Creative Tools
  { src: "/logos/ps.png", alt: "Adobe Photoshop" },
  { src: "/logos/ai.png", alt: "Adobe Illustrator" },
  { src: "/logos/ae.png", alt: "Adobe After Effects" },
  { src: "/logos/figma.png", alt: "Figma" },
  { src: "/logos/canva.png", alt: "Canva" },
  { src: "/logos/be.png", alt: "Behance" },
  { src: "/logos/blender.png", alt: "Blender" },

  // 📢 Social/Community
  { src: "/logos/dc.png", alt: "Discord" },
];

export default function LogoRail() {
  const items = [...logos, ...logos]; // duplicate for seamless loop

  return (
    <div className="logo-rail-container">
      <div className="logo-rail">
        <div className="logo-track">
          {items.map((logo, i) => (
            <img key={`${logo.alt}-${i}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
