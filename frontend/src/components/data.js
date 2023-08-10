import pic from "../assets/OIP.jpeg";
import iconics_22_main from "../assets/iconics_22_main.jpg"
import hackathon_22_main from "../assets/hackathon_22_main.jpg"
import itec_22_main from "../assets/itec_22_main.jpg"
import koderzkombat_22_main from "../assets/koderzkombat_22_main.jpg"
import itec_23_main_future from "../assets/itec_23_main_future.jpg"
import webkode_23_future from "../assets/webkode_23_future.jpg"
import koderzkombat_23_future from "../assets/koderzkombat_23_future.jpg"
const events = [
    {
      title: "Koderz Kombat 2022 ",
      description:
        "The most awaited Koderz Kombat which puts to test participants' problem-solving skills. The winners qualified for round 2 where they had to build a chatmbot and optimize a problem.",
      longDescription:
      "The Department of Computer Science & Information technology has always aimed to polish the technical skills and to nurture expertise for its undergraduate students by conducting credible coding competitions for all the CS & IT Programmes. These competitions help our students in keeping up their momentum with other techies around and keep them aware of emerging technologies. Participants would be exposed to strengthening their programming skills and career-changing opportunities by getting themselves involved in coding contests. Koders Kombat is being organized with the help of Koders Club, an official Computer Science & Information Technology community, with a sensational mission of enticing all the tech-enthusiasts to boost their competence and problem solving skills. Considering the significance of technical backing, it is mandatory for every student to appear in these coding competitions.",
      date: "December 15, 2022",
      image: koderzkombat_22_main,
      type: "hackathons",
      participants: [
        { rank: 1, name: "Code Morphers", department: "SE" },
        { rank: 2, name: "Team Pluto", department: "CSIT" },
        { rank: 3, name: "Tiest Developers", department: "TIEST(CS)" },
      ],
    },
    {
      title: "ICONICS 2022",
      description: "ICONICS provides an international forum for the presentation and dissemination of technological advances, research and innovation in the fast paced field of Computer Science and Software Engineering.",
      longDescription:
        "NED University of Engineering and Technology, one of the oldest institute for imparting engineering education in Pakistan announces 3rd International Conference on Innovations in Computer Science & Software Engineering (ICONICS'22). The conference will provide a platform for researchers both national and international to exchange novel and contemporary ideas in the emerging fields of computing. The conference aims to provide a forum for researchers from academia and industry to meet and share cutting-edge development in the field of Computer Science & Software Engineering. The conference seeks to bring together a wide spectrum of international experts to help create a conducive environment for collaboration and knowledge transfer. The conference will particularly act as a bridge between academia and major industry movers to help promote an active research environment in the country.",
      date: "December 14, 2022",
      image: iconics_22_main,
      type: "hackathons",
    },
    {
      title: "Hackathon 2022",
      description:
        "APIMatic invites students to build innovative solutions using APIs. We want to promote innovation out-of-the-box thinking in young minds, especially IT students.",
      longDescription:
      "APIMatic, founded by an ex-BCITian Syed Adeel Ali, is a Developer Experience Platform that is subscribed by over 50,000 businesses across 201 countries in the world to consume APIs. Nurtured in Silicon Valley, our team is equipped with innovative intellect,collaborative behaviours, and customer centrism. Our mission is to make developers moreproductive through automatic code generation. The heart of APIMatic is a customizable Code-Gen-Engine, which simplifies API consumption by automatically generating high-quality SDKs, code samples, dynamic docs, and test cases. With teams in New Zealand, United States & Pakistan, we are continuously expanding our global reach. In this hackathon, you are challenged to not only develop a solution based on a specific problem statement but innovate an idea from scratch. Using an API, design and develop an innovative solution that solves a problem for you or the people around you using APIs in the best way possible.",
      date: "March 22, 2022",
      image: hackathon_22_main,
      type: "hackathon",
      prize: ["Rs 30,000", "Rs 20,000"],
      participants: [
        { rank: 1, name: "Team Interninators", department: "TCIT" },
        { rank: 2, name: "Call Back Crew", department: "CSIT" },
        { rank: 3, name: "Team Abbas Ibtesam", department: "CSIT" },
      ],
    },
    {
      title: "ITEC 2022",
      description:
        "With technifying competitions, tech bundled projects and a future defining job fair as its centerpiece, ITEC'22 endures as the premier tech event of Karachi the year.",
      longDescription:
      "ITEC'22 was jointly organized by the Departments of Software Engineering and Computer Science & Information Technology of NED University of Engi- neering and Technology on July 19-20, 2022.  Prof. Dr. Sarosh H. Lodi (Vice Chancellor, NED University) was the Chief Guest and Mr. Ashraf Kapadia (Managing Director of Systems Limited) was the Guest of Honor. The event was sponsored by companies namely Shispare, SIBISOFT, 10Pearls, Gaditek, Folio3, Geeks of Kolachi, Disrupt Labs,Techwards and others. Students from various universities participated in the event. Competitions included Speed programming, Data Science, Code in the Dark, FIFA, Chess, Hackathon, and UI/UX competition. ",
      date: "July 19, 2022",
      image: itec_22_main,
      type: "hackathon",
      prize: ["Up to 200,000"],
      participants: [
        { rank: 1, name: "Munazza Hussain", department: "SE" },
        { rank: 2, name: "Saad Raza", department: "CSIT" },
        { rank: 3, name: "Wajahat Siddiqui", department: "SE" },
      ],
    },
    // above are past events.
    {
      title: "Web Kode",
      description:
        "A coding event where participants compete to design and implement the most elegant and efficient software solutions.",
      start: "July 1, 2023",
      endDate: "July 13, 2023",
      image: pic,
      type: "workshop",
    },
    {
      title: "Koderz Kombat",
      description:
        "A collaborative coding event where programmers pair up to exchange and improve each other's code, fostering learning and innovation.",
      start: "July 1, 2023",
      endDate: "July 13, 2023",
      image: pic,
      type: "workshop",
    },
    {
      title: "Koderz Kombat Fall 2023",
      description:
        "A new series of challenges coupled with even greater winning prizes. The most anticipated event of the year returns this fall Stay tuned for more information.",
      date: "July 15, 2023",
      image: koderzkombat_23_future,
      type: "hackathon",
    },
    {
      title: "Web Kode Fall 2023",
      description:
        "Missed out on Web Kode Spring 23? Worry not because the best web development competition is returning this fall as well. Stay tuned.",
      date: "July 15, 2023",
      image: webkode_23_future,
      type: "hackathon",
    },
    {
      title: "ITEC 2023",
      description:
        "The biggest series of competitions is returning this fall. From gaming to coding, from photography to football, there are competitions for everyone.",
      date: "December 11, 2023",
      image: itec_23_main_future,
      type: "workshop",
    },

  ];
export default events