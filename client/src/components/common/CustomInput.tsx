import { TextField } from '@mui/material'

interface CustomInputProps {
  required?: boolean
  color?: 'primary' | 'secondary'
  label?: string
  [x: string]: any
}

const CustomInput = ({ color = 'primary', label, required = false, ...rest }: CustomInputProps) => {
  return (
    <div className='my-4'>
      <div className='mb-2'>
        <span>{label}</span>
        <span className='text-red-500'>{required && '*'}</span>
      </div>
      <TextField size='small' color='primary' label={label} required={required} {...rest} />
    </div>
  )
}

export default CustomInput
