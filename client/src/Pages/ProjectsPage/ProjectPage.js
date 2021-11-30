import { Page } from "../../components/Page/Page"
import { useParams, Navigate, Link } from "react-router-dom"
import './ProjectPage.scss'
import { PartyAgile } from "../../components/Projects/PartyAgile"
import { CoreStoreNet } from "../../components/Projects/CoreStoreNet"


export const ProjectPage = () => {
    const { name } = useParams() 

    return(
        <Page>
          <Link to="/portfolio" className="project__link"> Go Back</Link>
            { name && 
              name === 'party-agile' &&
              <PartyAgile />
            }
            {  name &&
               name === 'corestorenet' &&
               <CoreStoreNet />
            }
            { name &&
              name !== "party-agile" && name !== "corestorenet" &&
                <Navigate to="/" />
            }
        </Page>
    )
}