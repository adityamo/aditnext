export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Aditya Septama",
  description: "This my personal Website made with NextUI",
  navItems: [
    {
      label: "Home",
      href: "#hero",
    },
    {
      label: "About",
      href: "#aboutme",
    },
    {
      label: "Technology",
      href: "#technology",
    },
    {
      label: "Resume",
      href: "#resume",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "#hero",
    },
    {
      label: "About",
      href: "#aboutme",
    },
    {
      label: "Technology",
      href: "#technology",
    },
    {
      label: "Resume",
      href: "#resume",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  links: {
    github: "https://github.com/adityamo",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    dribbble: "https://dribbble.com/adityaamo",
    linkedin: "https://www.linkedin.com/aditya-septama-halim",
    facebook: "https://www.facebook.com/aditya.septama?locale=id_ID",
  },
  resume: [
    {
      jobtitle: "Front End Developer & UI/UX",
      company: "PT Seino Indomobil Logistics",
      location: "Jakarta - IDN",
      year: "2020 - Now",
      description:
        "interesting experience in here, where here i started to focus on things frontend and UI/UX engineers, in this company also work as fullstack developer for the website, and i also lead in every interface planning in many apps of company whether mobile or website",
    },
    {
      jobtitle: "Fullstack Developer ASP.Net C#",
      company: "PT Dasa Prima",
      location: "Jawa Barat - IDN",
      year: "2018 - 2020",
      description:
        "Develop web-based applications ASP.Net C#, and using SQL Server database, the website is for operational",
    },
    {
      jobtitle: "Web Developer",
      company: "BMT Digital",
      location: "Jawa Barat - IDN",
      year: "2017 - 2018",
      description:
        "nside company we create apps for Point of Sale and Comapany Profile Base on Website, we develope this project with fullstack php native and combine with jquery, to database we use MySql Server",
    },
    {
      jobtitle: "Internship Programmer Fullstack PHP",
      company: "PT Inti Ganda Perdana (Astra Group)",
      location: "Jakarta - IDN",
      year: "2016 - 2018",
      description:
        "During the internship process I developed an application website - based calibration scheduling using PHP Native and MySQL databases",
    },
  ],
  project: {
    mobile: [
      {
        id: 1,
        projectname: "Rumah Sakit Apps",
        img: "rumahsakit.jpg",
      },
      {
        id: 2,
        projectname: "E Pod Apps",
        img: "epod.jpg",
      },
      {
        id: 3,
        projectname: "Potaru apps",
        img: "potaru.jpg",
      },
      {
        id: 4,
        projectname: "DMS Mobile",
        img: "DMS-Mobile.jpg",
      },
      {
        id: 5,
        projectname: "Surat Jalan Center",
        img: "suratjalancenter.jpg",
      },
      {
        id: 6,
        projectname: "Ticket Book Apps",
        img: "ticketbook.jpg",
      },
    ],
    website: [
      {
        id: 1,
        projectname: "Recruitment",
        img: "recruitment.jpg",
      },
      {
        id: 2,
        projectname: "STTC",
        img: "sttc.jpg",
      },
      {
        id: 3,
        projectname: "BMT Digital",
        img: "bmt.jpg",
      },
      {
        id: 4,
        projectname: "Core Dasa",
        img: "coredasa.jpg",
      },
      {
        id: 5,
        projectname: "Dasa",
        img: "dasa.jpg",
      },
    ],
  },
};
