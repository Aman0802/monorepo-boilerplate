import { Box, Button, Modal } from '@mui/material'
import { useEffect } from 'react'
import CustomInput from './common/CustomInput'

interface OrganizationModalProps {
  isEdit: boolean
  open: boolean
  editData: Array<any>
  handleClose: () => void
}

const OrganizationModal = ({
  open,
  handleClose,
  isEdit = false,
  editData,
}: OrganizationModalProps) => {
  useEffect(() => {
    // Load Data from API
  }, [])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  }

  return (
    <Modal
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
      disableEnforceFocus
      open={open}
      onClose={handleClose}
    >
      <Box sx={style} component='form'>
        <CustomInput
          style={{ width: '100%' }}
          label='Organization Name'
          placeholder="ex. Lenovo's Private"
          required
        />
        <CustomInput
          style={{ width: '100%' }}
          label='Organization Description'
          placeholder="ex. Lenovo's Management Services"
          required
        />
        <div className='flex justify-end'>
          <Button variant='outlined' type='submit'>
            Submit
          </Button>
        </div>
      </Box>
    </Modal>
  )
}

export default OrganizationModal
