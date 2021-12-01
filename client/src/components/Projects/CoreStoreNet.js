import './Projects.scss'
import store_1 from '../../assets/img/react-store/store_1.png'
import store_2 from '../../assets/img/react-store/store_2.png'
import store_3 from '../../assets/img/react-store/store_3.png'
import store_4 from '../../assets/img/react-store/store_4.png'

export const CoreStoreNet = () => (
    <section className="project">
        <div className="project__img project__img--ecommerce">
            <div className="project__img__overlay">
                <h2 className="project__img__overlay__title">CoreStoreNet</h2>
                <p className="project__img__overlay__text">Connecting people with the best prices</p>
            </div>
        </div>
        <p className="project__text">
            The idea for this application is to create an e-commerce application, 
            using an ASP.NET Core web API and React.js Single-Page Application (SPA) frontend.
        </p>
        <h3 className="project__subtitle">
            Backend
        </h3>
        <p className="project__text">
            The web API is developed using a multiyear architecture, including data access, domain, and HTTP layer.
        </p>
        <p className="project__text">
            <span className="project__text__span">Data access: </span>
            necessary to store information in a database, in this case Entity Framework is used as ORM, 
            and the repository pattern is used as an additional abstraction over the data source. 
            Additionally, a separation between saving operation and reading/writing operations is made using the unit of work approach, 
            so the repository allows higher layers to perform get, create, and update operations on memory collections, 
            while unit of work implements a way to transfer those changes to the database.
        </p>
        <p className="project__text">
            <span className="project__text__span">Data model: </span>
            is the representation of the data handled by the API including entities, 
            data transfer objects (Dtos), as well as all the application logic using the service classNames approach.
        </p>
        <p className="project__text">
            <span className="project__text__span">HTTP layer: </span>
            includes the action methods that handle all the call requests to the service layer built in the domain project 
            and send the response. 
        </p>
        <h3 className="project__subtitle">Frontend</h3>
        <p className="project__text">
            Frontend consists of a single page application made using react.js, 
            sass for styling, and redux to manage state of the shopping cart as well as authentication token.
        </p>
        <h3 className="project__subtitle">Stripe</h3>
        <p className="project__text">
            The application uses Stripe gateway in order to allow users to complete their purchases
            and process their payment information.
        </p>
        <h3 className="project__subtitle">Checkout Process</h3>
        <p className="project__text">To initiate the checkout process, the user needs to be registered in the system, a demo account has been created for testing purposes.</p>
        <p className="project__text">
            Once the user has logged in, and filled the information required, name, address, country, postal code, 
            the payment details for the <span className="project__text__span">Stripe API</span> to work, are <span className="project__text__span">any name</span>, and <span className="project__text__span">4242 4242 4242 4242</span> as credit card number, a future date, and any CVC and ZIP code.
        </p>
        <div className="project__action">
            <a href="https://corestorenet.com/" target="_blank"  rel="noopener noreferrer"  className="project__action__links"><i className="fas fa-link project__action__links__icon"></i> Link to App</a>
            <a href="https://github.com/jmramirez/react-store" target="_blank" rel="noopener noreferrer"  className="project__action__links"><i className="fab fa-github project__action__links__icon"></i> GitHub Repo</a>
        </div>
        <h3 className="project__subtitle">Screenshots</h3>
            <div className="project__images">
                <div className="project__images__item">
                    <img src={store_1} alt="events" className="project__images__item__src"/>
                </div>
                <div className="project__images__item">
                    <img src={store_2} alt="events" className="project__images__item__src"/>
                </div>
                <div className="project__images__item">
                    <img src={store_3} alt="events" className="project__images__item__src"/>
                </div>
                <div className="project__images__item">
                    <img src={store_4} alt="events" className="project__images__item__src"/>
                </div>
            </div>
    </section>
)