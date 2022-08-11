import { useParams } from 'react-router-dom'

const ViewOrganizationPage = () => {
  const params = useParams()
  console.log('params', params)
  return <div>Organization Details Page</div>
}

export default ViewOrganizationPage
