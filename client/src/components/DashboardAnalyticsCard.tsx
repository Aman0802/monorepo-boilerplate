import { ReactNode } from 'react'
import cx from 'classnames'

interface DashboardAnalyticsCardProps {
  title: string
  analytics: number
  rate: number
  icon: ReactNode
}

const DashboardAnalyticsCard = ({ title, analytics, rate, icon }: DashboardAnalyticsCardProps) => {
  return (
    <div className='bg-white w-1/3 drop-shadow-md'>
      <div className='flex justify-between p-6'>
        <div>
          <div className='text-sm'>{title}</div>
          <div className='text-xl'>{analytics}</div>
        </div>
        <div>{icon}</div>
      </div>
      <hr />
      <div className='flex justify-between p-6'>
        <div
          className={cx(
            {
              'text-green-500 bg-green-100': rate > 0,
              'text-red-500 bg-red-100': rate < 0,
            },
            'text-xs px-2 py-0.5 rounded-md',
          )}
        >
          {rate > 0 ? `+${Math.abs(rate)}` : `-${Math.abs(rate)}`}
        </div>
        <div className='text-sm'>From previous period</div>
      </div>
    </div>
  )
}

export default DashboardAnalyticsCard
