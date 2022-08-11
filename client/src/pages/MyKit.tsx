import { Box, Button, Divider } from '@mui/material'
import axios from 'axios'
import CustomBreadCrumbs from 'components/common/CustomBreadCrumbs'
import CustomInput from 'components/common/CustomInput'
import CustomTable from 'components/common/CustomTable'
import i18next from 'i18next'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from 'redux/counter/counterSlice'
import { RootState } from 'redux/store'
import '../translations/i18n'

const Genres = ({ values }: any) => {
  // Loop through the array and create a badge-like component instead of a comma-separated string
  return (
    <>
      {values.map((genre: string, idx: number) => {
        return (
          <span key={idx} className='badge'>
            {genre}
          </span>
        )
      })}
    </>
  )
}

const MyKit = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const [data, setData] = useState([])

  const { t } = useTranslation()

  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: 'TV Show',
        // First group columns
        columns: [
          {
            Header: 'Name',
            accessor: 'show.name',
          },
          {
            Header: 'Type',
            accessor: 'show.type',
          },
        ],
      },
      {
        // Second group - Details
        Header: 'Details',
        // Second group columns
        columns: [
          {
            Header: 'Language',
            accessor: 'show.language',
          },
          {
            Header: 'Genre(s)',
            accessor: 'show.genres',
            Cell: ({ cell: { value } }: any) => <Genres values={value} />,
          },
          {
            Header: 'Runtime',
            accessor: 'show.runtime',
            Cell: ({ cell: { value } }) => {
              const hour = Math.floor(value / 60)
              const min = Math.floor(value % 60)
              return (
                <>
                  {hour > 0 ? `${hour} hr${hour > 1 ? 's' : ''} ` : ''}
                  {min > 0 ? `${min} min${min > 1 ? 's' : ''}` : ''}
                </>
              )
            },
          },
          {
            Header: 'Status',
            accessor: 'show.status',
          },
        ],
      },
    ],
    [],
  )

  const breadcrumbData = [
    {
      link: '/test',
      text: 'Test',
    },
    {
      text: 'Home',
    },
  ]

  useEffect(() => {
    ;(async () => {
      const result = await axios('https://api.tvmaze.com/search/shows?q=snow')
      setData(result.data)
    })()
  }, [])
  return (
    <div className='p-6'>
      <div className='my-6'>
        <div className='text-2xl font-bold'>Breadcrumb</div>
        <CustomBreadCrumbs breadcrumbData={breadcrumbData} />
      </div>

      <Divider />

      <div className='my-6'>
        <div className='text-2xl font-bold'>Table</div>
        <CustomTable columns={columns} data={data} />
      </div>

      <Divider />

      <div className='my-6'>
        <div className='text-2xl font-bold'>Input</div>
        <CustomInput label='Name' Placeholder='Name' />
      </div>

      <Divider />

      <div className='my-6'>
        <div className='text-2xl font-bold'>Form with required validations</div>
        <Box component='form'>
          <CustomInput label='Organization Name' placeholder="ex. Lenovo's Private" required />
          <Button type='submit'>Submit</Button>
        </Box>
      </div>

      <Divider />

      <div>
        <div className='text-2xl font-bold'>Redux Counter</div>
        <button aria-label='Increment value' onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span className='mx-2'>{count}</span>
        <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>

      <Divider />

      <div>
        <div className='text-2xl font-bold'>Language Change</div>
        <div>Message: {t('welcome')}</div>
        <button
          onClick={() => {
            i18next.changeLanguage('zh')
          }}
        >
          Change to Chinese
        </button>
        <button
          onClick={() => {
            i18next.changeLanguage('en')
          }}
        >
          Change to English
        </button>
      </div>
    </div>
  )
}

export default MyKit
