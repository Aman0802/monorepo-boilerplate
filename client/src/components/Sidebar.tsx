import Logo from 'assets/Logo.png'
import { MdOutlineDashboard } from 'react-icons/md'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
  const SidebarItems = [
    {
      id: 0,
      title: 'My Kit',
      icon: <MdOutlineDashboard />,
      path: '/my-kit',
    },
    {
      id: 1,
      title: 'Dashboard',
      icon: <MdOutlineDashboard />,
      path: '/',
    },
    {
      id: 2,
      title: 'Manage Organizations',
      icon: <MdOutlineDashboard />,
      path: '/organizations',
    },
    {
      id: 3,
      title: 'Manage Users',
      icon: <MdOutlineDashboard />,
      path: '/users',
    },
    {
      id: 4,
      title: 'Manage Limits',
      icon: <MdOutlineDashboard />,
      path: '/limits',
    },
  ]

  return (
    <div className='w-full h-screen bg-background-dark border-r border-solid border-gray-300 overflow-y-auto'>
      <div className='mx-auto my-8 w-20'>
        <img className='w-full' src={Logo} alt='EventEngage' />
      </div>
      <div className='flex flex-col h-full overflow-y'>
        {SidebarItems.map(({ title, icon, path }) => (
          <SidebarItem key={title} title={title} icon={icon} path={path} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
