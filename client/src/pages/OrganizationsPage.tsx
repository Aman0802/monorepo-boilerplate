import { Button } from '@mui/material'
import CustomInput from 'components/common/CustomInput'
import CustomTable from 'components/common/CustomTable'
import OrganizationModal from 'components/OrganizationModal'
import React, { useMemo, useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { ImBlocked } from 'react-icons/im'
import { MdModeEditOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const _data = [
  {
    id: 1,
    name: "Aman's Org",
    description: "Description for Aman's Org",
  },
  {
    id: 2,
    name: "Yash's Org",
    description: "Description for Yash's Org",
  },
  {
    id: 3,
    name: "Rahul's Org",
    description: "Description for Rahul's Org",
  },
  {
    id: 4,
    name: "Suddath's Org",
    description: "Description for Suddath's Org",
  },
]

const OrganizationsPage = () => {
  const [isOrganizationModalVisible, setIsOrganizationModalVisible] = useState(false)
  const [editData, setEditData] = useState([])
  const [data, setData] = useState(_data)
  const [filteredData, setFilteredData] = useState(data)

  const navigate = useNavigate()
  const columns = useMemo(
    () => [
      {
        Header: 'Organizations',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Description',
            accessor: 'description',
          },
          {
            Header: 'Actions',
            accessor: 'id',
            Cell: ({ cell: { value } }: any) => {
              return (
                <div className='flex items-center gap-2'>
                  <div onClick={() => navigate(`${value}`)}>
                    <AiFillEye className='cursor-pointer text-gray-800 text-xl' />
                  </div>
                  <div
                    onClick={() => {
                      setIsOrganizationModalVisible(true)
                      // Code to fetch the edit data
                      setEditData([])
                    }}
                  >
                    <MdModeEditOutline className='cursor-pointer text-primary text-xl' />
                  </div>
                  <div onClick={() => console.log(`block organization ${value}`)}>
                    <ImBlocked className='cursor-pointer text-red-500 text-lg' />
                  </div>
                </div>
              )
            },
          },
        ],
      },
    ],
    [],
  )

  const handleOrganizationModalClose = () => {
    setIsOrganizationModalVisible(false)
  }

  const handleOrganizationModalOpen = () => {
    setIsOrganizationModalVisible(true)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _filteredData = data?.filter((org) =>
      org.name.toLowerCase().includes(e.target.value.toLowerCase()),
    )
    setFilteredData(_filteredData)
  }

  return (
    <div className='p-6'>
      <div className='flex justify-end'>
        <Button onClick={handleOrganizationModalOpen} variant='contained'>
          Create Organization
        </Button>
      </div>
      <div className='flex justify-end'>
        <CustomInput onChange={handleSearch} variant='standard' placeholder='Search' />
      </div>
      <CustomTable columns={columns} data={filteredData} />
      <OrganizationModal
        open={isOrganizationModalVisible}
        handleClose={handleOrganizationModalClose}
        isEdit={editData?.length > 0}
        editData={editData}
      />
    </div>
  )
}

export default OrganizationsPage
