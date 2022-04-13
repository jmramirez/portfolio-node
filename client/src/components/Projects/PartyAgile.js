import './Projects.scss'
import events from '../../assets/img/party-agile/party_agile_events.png'
import event_detail from '../../assets/img/party-agile/event_detail.png'
import events_1 from '../../assets/img/party-agile/party_agile_events_1.png'
import payment from '../../assets/img/party-agile/party_agile_payment.png'
import chat from '../../assets/img/party-agile/party_agile_chat.png'


export const PartyAgile = () => (
  <section className="project">
    <div className="project__img">
      <div className="project__img__overlay">
        <h2 className="project__img__overlay__title">PartyAgile</h2>
        <p className="project__img__overlay__text">Allow us to keep your events organized</p>
      </div>
    </div>
    <p className="project__text">
      The main objective of this application is to help organize events by keeping track of deadlines
      and staying in communication with all vendors and parties involved.
    </p>
    <h3 className="project__subtitle">User Profile</h3>
    <p className="project__text">
      There are two kinds of users, or roles defined for this application, the main user who would be the <span className="project__text__span">Event Planner</span>,
      which can create and modify events, assign vendors to the events, and communicate with them any time.
    </p>
    <p className="project__text">
      The second role will be <span className="project__text__span">Vendors</span>, or service providers which can review events,
      add payments to the events they are assigned to, and communicate with event planners.
    </p>
    <h3 className="project__subtitle">Tech Stack</h3>
    <p className="project__text">
      <span className="project__text__span">Server Side: </span>
      For the backend, Node.js is used with Express framework to define all controllers and
      routes necessary to access all endpoints.
    </p>
    <p className="project__text">
      <span className="project__text__span">Database: </span>
      PostgreSQL
    </p>
    <p className="project__text">
      <span className="project__text__span">Client Side: </span>
      React.js, SASS
    </p>
    <p className="project__text">
      <span className="project__text__span">Authentication: </span>
      JWT, Express JWT on the server side.
    </p>
    <p className="project__text">
      <span className="project__text__span">Libraries: </span>
      Prisma as ORM which uses a schema based way to define data models, Socket.io which is a library that enables low-latency, bidirectional and event based communication between
      a client and a server.
    </p>
    <div className="project__action">
      <a href="https://www.partyagile.com/login" target="_blank" rel="noopener noreferrer"  className="project__action__links"><i className="fas fa-link project__action__links__icon"></i> Link to App</a>
      <a href="https://github.com/jmramirez/party-agile" target="_blank" rel="noopener noreferrer"  className="project__action__links"><i className="fab fa-github project__action__links__icon"></i> GitHub Repo</a>
    </div>
    <h3 className="project__subtitle">Screenshots</h3>
    <div className="project__images">
      <div className="project__images__item">
        <img src={events} alt="events" className="project__images__item__src"/>
      </div>
      <div className="project__images__item">
        <img src={event_detail} alt="events" className="project__images__item__src"/>
      </div>
      <div className="project__images__item">
        <img src={events_1} alt="events" className="project__images__item__src"/>
      </div>
      <div className="project__images__item">
        <img src={payment} alt="events" className="project__images__item__src"/>
      </div>
      <div className="project__images__item">
        <img src={chat} alt="events" className="project__images__item__src"/>
      </div>
    </div>
  </section>
)