import CustomBreadCrumbs from 'components/common/CustomBreadCrumbs'
import DashboardAnalyticsCard from 'components/DashboardAnalyticsCard'
import { TbStack2 } from 'react-icons/tb'

const HomePage = () => {
  const breadcrumbData = [
    {
      link: '/test',
      text: 'Test',
    },
    {
      text: 'Home',
    },
  ]

  return (
    <div className='p-6'>
      <div className='mb-4'>
        <CustomBreadCrumbs breadcrumbData={breadcrumbData} />
      </div>
      <div className='flex gap-4'>
        <div className='w-3/4'>
          <div className='flex gap-4'>
            <DashboardAnalyticsCard
              title='Number of Organizations'
              analytics={12}
              rate={2.4}
              icon={<TbStack2 className='text-2xl text-primary' />}
            />
            <DashboardAnalyticsCard
              title='Number of Events'
              analytics={32}
              rate={16}
              icon={<TbStack2 className='text-2xl text-primary' />}
            />
            <DashboardAnalyticsCard
              title='Number of Attendees'
              analytics={264}
              rate={-2.4}
              icon={<TbStack2 className='text-2xl text-primary' />}
            />
          </div>
        </div>
        <div className='w-1/4'>
          <div className='bg-white w-full h-96 drop-shadow-md'></div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
