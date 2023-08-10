import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import Modal from 'react-modal';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calendar.css'
import iconics_22_main from "../../assets/iconics_22_main.jpg"
import hackathon_22_main from "../../assets/hackathon_22_main.jpg"
import itec_22_main from "../../assets/itec_22_main.jpg"
import koderzkombat_22_main from "../../assets/koderzkombat_22_main.jpg"
import itec_23_main_future from "../../assets/itec_23_main_future.jpg"
import webkode_23_future from "../../assets/webkode_23_future.jpg"
import koderzkombat_23_future from "../../assets/koderzkombat_23_future.jpg"
import {useNavigate } from 'react-router-dom';
Modal.setAppElement("#root")
const Calendar = () => {
  const navigate=useNavigate()
  const [searchQuery, setSearchQuery] = useState('');
  const [eventTypeFilter, setEventTypeFilter] = useState('all');
  // const [show, setShow] = useState(false);
  // const [data,setData]=useState({})
  // const [type,setType]=useState("")
  const [events, setEvents] = useState([
// Workshop event
{
  title: "Koderz Kombat 2022 ",
  description:
    "The most awaited Koderz Kombat which puts to test participants' problem-solving skills. The winners qualified for round 2 where they had to build a chatmbot and optimize a problem.",
  longDescription:
  "The Department of Computer Science & Information technology has always aimed to polish the technical skills and to nurture expertise for its undergraduate students by conducting credible coding competitions for all the CS & IT Programmes. These competitions help our students in keeping up their momentum with other techies around and keep them aware of emerging technologies. Participants would be exposed to strengthening their programming skills and career-changing opportunities by getting themselves involved in coding contests. Koders Kombat is being organized with the help of Koders Club, an official Computer Science & Information Technology community, with a sensational mission of enticing all the tech-enthusiasts to boost their competence and problem solving skills. Considering the significance of technical backing, it is mandatory for every student to appear in these coding competitions.",
  start: "2022-12-15",
  end: "2022-12-15",
  image: koderzkombat_22_main,
  type: "hackathons",
},
{
  title: "ICONICS 2022",
  description: "ICONICS provides an international forum for the presentation and dissemination of technological advances, research and innovation in the fast paced field of Computer Science and Software Engineering.",
  longDescription:
    "NED University of Engineering and Technology, one of the oldest institute for imparting engineering education in Pakistan announces 3rd International Conference on Innovations in Computer Science & Software Engineering (ICONICS'22). The conference will provide a platform for researchers both national and international to exchange novel and contemporary ideas in the emerging fields of computing. The conference aims to provide a forum for researchers from academia and industry to meet and share cutting-edge development in the field of Computer Science & Software Engineering. The conference seeks to bring together a wide spectrum of international experts to help create a conducive environment for collaboration and knowledge transfer. The conference will particularly act as a bridge between academia and major industry movers to help promote an active research environment in the country. The conference solicits significant contributions in all major fields of Computer Science and Software Engineering from conceptual and practical aspects. Authors are invited to contribute to the conference by submitting articles that illustrate research results, surveying works and industrial experiences that describe significant advances in the field of computer science and software engineering.The 3rd edition of International Conference on Innovations in Computer Science and Software Engineering (ICONICS 2022) was held on 14-15 December 2022. The conference was chaired by Dr. Muhammad Mubashir Khan. TrendMicro was the Platinum sponsor and Telec the Bronze sponsor. OctDaily and MazikGlobal were the other sponsors . The conference was also supported by HEC Sindh and Pakistan, and IEEE Karachi Section. During this two days’ conference, excellent thought-provoking talks about the latest research trends in Artificial Intelligence, Machine & Deep learning, Data Science, Cyber and Information Security, Cloud Computing, Quantum Computing and Internet of Things were delivered. Researchers presented 29 different papers to enlighten more than 500 of our young participants from different universities all over Karachi and professionals from all over the country and even abroad. Along with the technical sessions Koderz Kombat, a coding competition, a hackathon and a poster exhibition were also the part of the conference activities that provided an opportunity for the students to stand out and demonstrate their skills.",
  start: "2022-12-14",
  end: "2022-12-14",
  image: iconics_22_main,
  type: "hackathons",
},
{
  title: "Hackathon 2022",
  description:
    "APIMatic invites students to build innovative solutions using APIs. We want to promote innovation out-of-the-box thinking in young minds, especially IT students.",
  longDescription:
  "APIMatic, founded by an ex-BCITian Syed Adeel Ali, is a Developer Experience Platform that is subscribed by over 50,000 businesses across 201 countries in the world to consume APIs. Nurtured in Silicon Valley, our team is equipped with innovative intellect,collaborative behaviours, and customer centrism. Our mission is to make developers moreproductive through automatic code generation. The heart of APIMatic is a customizable Code-Gen-Engine, which simplifies API consumption by automatically generating high-quality SDKs, code samples, dynamic docs, and test cases. With teams in New Zealand, United States & Pakistan, we are continuously expanding our global reach. In this hackathon, you are challenged to not only develop a solution based on a specific problem statement but innovate an idea from scratch. Using an API, design and develop an innovative solution that solves a problem for you or the people around you using APIs in the best way possible.",
  start: "2022-03-22",
  end: "2022-03-22",
  image: hackathon_22_main,
  type: "hackathon",
  prize: ["Rs 30,000", "Rs 20,000"],
},
{
  title: "ITEC 2022",
  description:
    "With technifying competitions, tech bundled projects and a future defining job fair as its centerpiece, ITEC'22 endures as the premier tech event of Karachi the year.",
  longDescription:
  "ITEC'22 was jointly organized by the Departments of Software Engineering and Computer Science & Information Technology of NED University of Engi- neering and Technology on July 19-20, 2022.  Prof. Dr. Sarosh H. Lodi (Vice Chancellor, NED University) was the Chief Guest and Mr. Ashraf Kapadia (Managing Director of Systems Limited) was the Guest of Honor. The event was sponsored by companies namely Shispare, SIBISOFT, 10Pearls, Gaditek, Folio3, Geeks of Kolachi, Disrupt Labs,Techwards and others. Students from various universities participated in the event. Competitions included Speed programming, Data Science, Code in the Dark, FIFA, Chess, Hackathon, and UI/UX competition. ",
  start: "2022-07-19",
  end: "2022-07-19",
  image: itec_22_main,
  type: "workshop",
  prize: ["Up to 200,000"],
},
{
  title: "Koderz Kombat Fall 2023",
  description:
    "A new series of challenges coupled with even greater winning prizes. The most anticipated event of the year returns this fall Stay tuned for more information.",
    start: "2023-07-15",
  end: "2023-07-15",
  image: koderzkombat_23_future,
  type: "hackathon",
},
{
  title: "Web Kode Fall 2023",
  description:
    "Missed out on Web Kode Spring 23? Worry not because the best web development competition is returning this fall as well. Stay tuned.",
    start: "2023-06-09",
    end: "2023-06-09",
  image: webkode_23_future,
  type: "hackathon",
},
{
  title: "ITEC 2023",
  description:
    "The biggest series of competitions is returning this fall. From gaming to coding, from photography to football, there are competitions for everyone.",
    start: "2023-12-11",
    end: "2023-12-11",
  image: itec_23_main_future,
  type: "workshop",
},


      ]);
      const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
      };
    
      const handleEventTypeFilterChange = (event) => {
        setEventTypeFilter(event.target.value);
      };
      const filteredEvents = events.filter((event) => {
        return (
          (event.title.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === '') &&
          (eventTypeFilter === 'all' || event.type === eventTypeFilter)
        );
      });    
      function handleEventClick(event) {
        navigate(`/event/detail`,
{
state: {
  title:event.event.title,
  ...event.event.extendedProps,
  ...event.event._instance.range,
  type:event.event.extendedProps.type
}
})
      }
  return (
    <>
      <div>
      <div className="row">
  <div className="col-sm-5">
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search events"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
    </div>
  </div>
  <div className="col-sm-3">
    <div className="input-group mb-3">
      <select
        className="form-select"
        value={eventTypeFilter}
        onChange={handleEventTypeFilterChange}
      >
        <option value="all">All events</option>
        <option value="workshop">Workshops</option>
        <option value="lecture">Guest lectures</option>
        <option value="hackathon">Hackathon</option>
      </select>
    </div>
  </div>
</div>
      </div>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={filteredEvents}
        eventClick={(event) => handleEventClick(event)} editable={true}/>
    </>
  )
}

export default Calendar
