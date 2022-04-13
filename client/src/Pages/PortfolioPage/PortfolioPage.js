import './PortfolioPage.scss'
import { Page } from '../../components/Page/Page'
import { Link } from 'react-router-dom'

export const PortfolioPage = () => (
  <Page>
    <section className="portfolio">
      <h1 className="portfolio__title">Latest Work</h1>
      <div className="portfolio__project">
        <Link className="portfolio__project__img" to="/portfolio/party-agile">
          <div className="portfolio__project__img__overlay">
            <h2 className="portfolio__project__img__overlay__title">Party Agile</h2>
            <p className="portfolio__project__img__overlay__text">Allow us to keep your events organized</p>
          </div>
        </Link>
        <div className="portfolio__project__content">
          <h3 className="portfolio__project__content__title">Overview</h3>
          <p className="portfolio__project__content__text">
            Party Agile is an application create to help organize events keeping tracks of deadlines, budgets, and more importantly,
            communication between all vendors and parties involved.
          </p>
          <h3 className="portfolio__project__content__title">Technologies</h3>
          <h4 className="portfolio__project__content__subtitle">Frontend</h4>
          <div className="portfolio__project__content__tech">
            <p className="portfolio__project__content__tech__name">React</p>
            <p className="portfolio__project__content__tech__name">Sass</p>
            <p className="portfolio__project__content__tech__name">Socket.io Client</p>
            <p className="portfolio__project__content__tech__name">JWT Token</p>
          </div>
          <h4  className="portfolio__project__content__subtitle">Backend</h4>
          <div className="portfolio__project__content__tech">
            <p className="portfolio__project__content__tech__name">Node</p>
            <p className="portfolio__project__content__tech__name">Express</p>
            <p className="portfolio__project__content__tech__name">Prisma</p>
            <p className="portfolio__project__content__tech__name">PostgreSQL</p>
            <p className="portfolio__project__content__tech__name">Socket.io</p>
          </div>
          <div className='portfolio__project__content__link'>
            <a href="https://www.partyagile.com/login" target="_blank" rel="noopener noreferrer"  className="portfolio__project__content__action"><i className="fas fa-link project__action__links__icon"></i> Link to App</a>
            <Link className="portfolio__project__content__action" to="/portfolio/party-agile">Read More</Link>
          </div>
        </div>
      </div>
      <div className="portfolio__project">
        <Link className="portfolio__project__img portfolio__project__img--ecommerce" to="/portfolio/corestorenet">
          <div className="portfolio__project__img__overlay">
            <h2 className="portfolio__project__img__overlay__title">CoreStoreNet</h2>
            <p className="portfolio__project__img__overlay__text">Connecting people with the best prices</p>
          </div>
        </Link>
        <div className="portfolio__project__content">
          <h3 className="portfolio__project__content__title">Overview</h3>
          <p className="portfolio__project__content__text">
            An e-commerce application created utilizing an ASP.NET Core web API backend and React.js frontend, Redux is used to manage state.
            Users can add products to the shopping cart, and, when they ready, checkout, the app uses Stripe API to process payments.
          </p>
          <h3 className="portfolio__project__content__title">Technologies</h3>
          <h4 className="portfolio__project__content__subtitle">Frontend</h4>
          <div className="portfolio__project__content__tech">
            <p className="portfolio__project__content__tech__name">React</p>
            <p className="portfolio__project__content__tech__name">Sass</p>
            <p className="portfolio__project__content__tech__name">Redux</p>
            <p className="portfolio__project__content__tech__name">JWT Token</p>
            <p className="portfolio__project__content__tech__name">Stripe API</p>
          </div>
          <h4 className="portfolio__project__content__subtitle">Backend</h4>
          <div className="portfolio__project__content__tech">
            <p className="portfolio__project__content__tech__name">Node</p>
            <p className="portfolio__project__content__tech__name">Express</p>
            <p className="portfolio__project__content__tech__name">Prisma</p>
            <p className="portfolio__project__content__tech__name">PostgreSQL</p>
            <p className="portfolio__project__content__tech__name">Stripe API</p>
          </div>
          <div className='portfolio__project__content__link'>
            <a href="https://corestorenet.com/" target="_blank"  rel="noopener noreferrer"  className="portfolio__project__content__action"><i className="fas fa-link project__action__links__icon"></i> Link to App</a>
            <Link className="portfolio__project__content__action" to="/portfolio/corestorenet">Read More</Link>
          </div>
        </div>
      </div>
    </section>
  </Page>
)