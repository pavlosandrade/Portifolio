export const basePath = process.env.NODE_ENV === "production" ? "/Portifolio" : "";

export const profileData = {
  name: "Pavlos Kallidis",
  role: "Desenvolvedor Front-End Sênior",
  location: "Ribeirão Preto, SP",
  email: "pavloskallidisdeandrade@gmail.com",
  phone: "(16) 99171-0519",
  links: {
    linkedin: "https://www.linkedin.com/in/pavlos-kallidis-de-andrade-/",
    github: "https://github.com/pavlosandrade",
    instagram: "https://www.instagram.com/pavlosandrade/"
  },
  about: "Desenvolvedor Front-End Sênior com mais de 5 anos de experiência entregando produtos e aplicações web de alta escala para marcas como Amazon, Bayer, Brahma e WTC. Especialista em .NET, Blazor, React, Next.js e gestão técnica de equipes.",
};

export const aboutData = {
  badge: "Sobre mim",
  headline: "Engenharia de software e produtos digitais para marcas globais e projetos de grande escala.",
  paragraphs: [
    "Com mais de 5 anos de experiência no desenvolvimento de software e produtos digitais, atuo unindo rigor de engenharia, arquitetura escalável e design de alta conversão (UX/UI).",
    "Minha trajetória inclui a entrega de produtos digitais de alta visibilidade para marcas líderes do mercado, como Amazon (Alexa+), Brahma Barbearia, Bayer (Programa Prosperar) e World Trade Center Ribeirão Preto. Essa vivência comprova minha capacidade técnica e maturidade para assumir projetos complexos de ponta a ponta.",
    "Do protótipo no Figma à arquitetura e implementação em C#, .NET, Blazor, React e Next.js, construo soluções robustas com foco em performance extrema, SEO técnico e usabilidade impecável.",
    "Além disso, integro o uso avançado de Inteligência Artificial no meu dia a dia. Domino as capacidades de modelos líderes (como ChatGPT, Gemini e Claude) para otimizar fluxos de desenvolvimento, refatorar arquiteturas e resolver desafios complexos de engenharia com ganho massivo de produtividade."
  ],
  author: {
    name: "Pavlos Kallidis",
    role: "Desenvolvedor Front-End Sênior & .NET",
    location: "Ribeirão Preto, SP",
    photoUrl: `${basePath}/images/profile.jpg`
  },
  stats: [
    {
      value: "+ 5 Anos",
      description: "Mais de 5 anos criando produtos e sistemas web corporativos."
    },
    {
      value: "Grandes Marcas",
      description: "Projetos em produção para Amazon, Bayer, Brahma e WTC."
    },
    {
      value: "+ 9 Cases",
      description: "Aplicações de alto impacto entregues com excelência técnica."
    },
    {
      value: "End-to-End",
      description: "Do protótipo no Figma à arquitetura final em .NET e Next.js."
    }
  ]
};

export const skillsData = [
  {
    category: "Linguagens",
    items: [
      { name: "C#", icon: "csharp" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css" },
    ]
  },
  {
    category: "Frameworks & Bibliotecas",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Blazor", icon: "blazor" },
      { name: ".NET / ASP.NET", icon: "dotnet" },
      { name: "ABP Framework", icon: "abp" },
      { name: "MudBlazor", icon: "mudblazor" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Bootstrap", icon: "bootstrap" },
    ]
  },
  {
    category: "Arquitetura & Boas Práticas",
    items: [
      { name: "Clean Architecture", icon: "architecture" },
      { name: "Modular / Component-Based", icon: "modular" },
      { name: "Padrão MVC", icon: "mvc" },
      { name: "SEO Técnico & Core Web Vitals", icon: "seo" },
    ]
  },
  {
    category: "Ferramentas & DevOps",
    items: [
      { name: "Figma (UI/UX)", icon: "figma" },
      { name: "Azure DevOps", icon: "azuredevops" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "ClickUp", icon: "clickup" },
    ]
  },
  {
    category: "Inteligência Artificial",
    items: [
      { name: "ChatGPT", icon: "chatgpt" },
      { name: "Gemini", icon: "gemini" },
      { name: "Claude", icon: "claude" },
    ]
  }
];

export const experienceData = [
  {
    company: "Nova Singular",
    location: "Ribeirão Preto, SP · Híbrido",
    totalPeriod: "5 anos",
    roles: [
      {
        title: "Desenvolvedor Front-End Sênior",
        type: "Tempo integral",
        period: "Ago 2025 – Presente",
        skills: ["Liderança Técnica", "Gestão de Equipes", "Gestão de Projetos", "React", "Next.js", ".NET"],
        description: [
          "Atuação com foco na gestão de equipes e projetos, garantindo governança técnica, qualidade de código e alinhamento estratégico às entregas dos clientes.",
          "Colaboro com o crescimento técnico de desenvolvedores juniores e trainees, promovendo boas práticas de código e alinhamento às diretrizes da empresa."
        ]
      },
      {
        title: "Desenvolvedor Front-End Pleno",
        type: "Tempo integral",
        period: "Dez 2023 – Jul 2025 · 1 ano e 8 meses",
        skills: ["Figma", "React", "Next.js", "Gestão de Projetos"],
        description: [
          "Atuei no desenvolvimento de aplicações web com foco em usabilidade, performance e responsividade, garantindo uma experiência do usuário fluida e consistente.",
          "Assumi responsabilidades de organização e gestão em projetos, contribuindo na definição de cronogramas e coordenação da equipe para entregas dentro dos prazos."
        ]
      },
      {
        title: "Desenvolvedor Front-End Júnior",
        type: "Tempo integral",
        period: "Mar 2022 – Nov 2023 · 1 ano e 9 meses",
        skills: ["Figma", "Blazor", ".NET MVC", "UX/UI"],
        description: [
          "Atuei com maior autonomia, sendo responsável por projetos de ponta a ponta, desde a criação de protótipos no Figma até a implementação final com foco em performance e usabilidade.",
          "Participei ativamente de reuniões com clientes para levantamento de requisitos e validações, garantindo entregas alinhadas às necessidades do negócio."
        ]
      },
      {
        title: "Desenvolvedor Front-End Trainee",
        type: "Trainee",
        period: "Set 2021 – Fev 2022 · 6 meses",
        skills: ["C#", "HTML5", "CSS3", "E-mail Marketing"],
        description: [
          "Atuei no suporte ao time de desenvolvimento front-end, com foco na criação de layouts responsivos para e-mail marketing e manutenção de sites.",
          "Experiência que me proporcionou o fortalecimento em HTML, CSS e boas práticas de versionamento, além de vivência no fluxo de trabalho ágil em equipe."
        ]
      }
    ]
  },
  {
    company: "Grupo Elfa",
    location: "Ribeirão Preto, SP",
    totalPeriod: "1 ano e 3 meses",
    roles: [
      {
        title: "Estagiário de TI",
        type: "Estágio",
        period: "Jul 2020 – Set 2021 · 1 ano e 3 meses",
        skills: ["TI", "Suporte a Projetos", "Processos Internos"],
        description: [
          "Apoio ao gerenciamento de projetos de tecnologia e processos internos da companhia.",
          "Experiência focada na organização e acompanhamento de demandas e sistemas na área corporativa."
        ]
      }
    ]
  }
];

export const projectsData = [
  {
    id: "terrasaltas",
    title: "Terras Altas",
    company: "Nova Singular",
    type: "Site Institucional",
    year: "2023",
    image: `${basePath}/images/cases/terras-altas-case.jpg`,
    description: "Desenvolvimento do site institucional em colaboração com o time de design, desde a concepção de rafes e layout no Figma até a implementação final, homologação e entrega.",
    link: "#",
    techs: ["C#", "ASP.NET Core MVC", "JavaScript", "Bootstrap", "Figma", "Azure DevOps"],
    aspectRatio: "3/4"
  },
  {
    id: "bayer",
    title: "Bayer Programa Prosperar",
    company: "BP One Group",
    type: "WebAPP B2B",
    year: "2024",
    image: `${basePath}/images/cases/bayer-case.jpg`,
    description: "Criação de novos módulos e funcionalidades dentro do ecossistema B2B, implementando componentes com MudBlazor e desenvolvendo regras de negócio e integrações robustas orientadas a DDD.",
    link: "#",
    techs: ["C# / .NET", "ABP Framework", "MudBlazor", "Blazor", "DDD"],
    aspectRatio: "1/1"
  },
  {
    id: "wtc",
    title: "World Trade Center Ribeirão Preto",
    company: "Nova Singular",
    type: "Site Híbrido",
    year: "2024",
    image: `${basePath}/images/cases/wtcrp-case.jpg`,
    description: "Desenvolvimento completo do site institucional em arquitetura híbrida Blazor Web App, unindo fidelidade visual do Figma com escalabilidade do ecossistema .NET moderno.",
    link: "#",
    techs: ["C# / .NET", "Blazor Web App", "Bootstrap", "Figma", "Azure DevOps"],
    aspectRatio: "4/5"
  },
  {
    id: "alexa",
    title: "Descubra a nova Alexa+",
    company: "BP One Group",
    type: "Landing Page",
    year: "2024",
    image: `${basePath}/images/cases/amazon-alexa-case.jpg`,
    description: "Implementação e otimização da Landing Page oficial, com foco em melhorias gerais de SEO técnico, Core Web Vitals e máxima performance.",
    link: "#",
    techs: ["Next.js", "TypeScript", "React", "Tailwind CSS", "SEO"],
    aspectRatio: "3/4"
  },
  {
    id: "dabi",
    title: "Dabi Business Park",
    company: "Nova Singular",
    type: "Site Institucional",
    year: "2024",
    image: `${basePath}/images/cases/dabi-case.jpg`,
    description: "Desenvolvimento do site institucional em colaboração com o time de design, desde o rafe até o layout no Figma, seguido da implementação em ASP.NET Core MVC.",
    link: "#",
    techs: ["C#", "ASP.NET Core MVC", "MVC", "Bootstrap", "JavaScript", "Figma", "Azure DevOps"],
    aspectRatio: "4/3"
  },
  {
    id: "bhrama",
    title: "Brahma Barbearia",
    company: "Nova Singular",
    type: "Landing Page",
    year: "2024",
    image: `${basePath}/images/cases/bhrama-case.jpg`,
    description: "Desenvolvimento da landing page em Blazor Web App (.NET 8) com arquitetura component-based e modular com base no layout enviado pelo cliente.",
    link: "#",
    techs: ["C# / .NET 8", "Blazor Web App", "Bootstrap", "JavaScript", "Azure DevOps"],
    aspectRatio: "16/9"
  },
  {
    id: "spl",
    title: "SPL Engenharia",
    company: "Nova Singular",
    type: "Site Híbrido",
    year: "2024",
    image: `${basePath}/images/cases/spl-case.jpg`,
    description: "Desenvolvimento do site institucional e comercial em Blazor Web App (.NET 10) junto ao time de design, desde a concepção de rafe até a entrega final.",
    link: "#",
    techs: ["C# / .NET 10", "Blazor Web App", "Component-Based", "Bootstrap", "JavaScript", "Figma", "Azure DevOps"],
    aspectRatio: "4/3"
  },
  {
    id: "kipapp",
    title: "Kipapp",
    company: "Nova Singular",
    type: "Landing Page",
    year: "2023",
    image: `${basePath}/images/cases/kipapp-case.jpg`,
    description: "Desenvolvimento de Landing Page de alta conversão, da concepção visual e wireframes à definição do Design System e prototipação no Figma.",
    link: "#",
    techs: ["Figma", "UX/UI", "Design System", "Prototipação", "ClickUp"],
    aspectRatio: "1/1"
  },
  {
    id: "srmenu",
    title: "Sr. Menu",
    company: "Nova Singular",
    type: "Menu Digital",
    year: "2023",
    image: `${basePath}/images/cases/sr-menu-case.jpg`,
    description: "Criação visual e estruturação de temas para plataforma de cardápio digital, incluindo wireframes, componentes e prototipagem navegável no Figma.",
    link: "#",
    techs: ["Figma", "UX/UI", "Design System", "Prototipação", "ClickUp"],
    aspectRatio: "4/3"
  }
];
