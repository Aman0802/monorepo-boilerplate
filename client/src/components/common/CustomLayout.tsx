import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'

const CustomLayout = ({ children }: any) => {
  return (
    <div className='flex'>
      <div className='fixed w-1/5'>
        <Sidebar />
      </div>
      <div className='w-4/5 ml-1/5 h-full min-h-screen bg-background-light'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default CustomLayout
