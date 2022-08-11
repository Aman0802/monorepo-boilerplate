import { Breadcrumbs, Link } from '@mui/material'

interface BreadCrumb {
  text: string
  link?: string
}

interface CustomBreadCrumbsProps {
  breadcrumbData: BreadCrumb[]
}

const CustomBreadCrumbs = ({ breadcrumbData }: CustomBreadCrumbsProps) => {
  return (
    <Breadcrumbs aria-label='breadcrumb'>
      <ol className='flex'>
        {breadcrumbData?.map((breadcrumb, i) => (
          <li key={breadcrumb.text}>
            {'link' in breadcrumb ? (
              <Link underline='hover' color='inherit' href={breadcrumb.link}>
                {breadcrumb.text}
              </Link>
            ) : (
              <span>{breadcrumb.text}</span>
            )}

            {breadcrumbData.length !== i + 1 && <span>&nbsp;/&nbsp;</span>}
          </li>
        ))}
      </ol>
    </Breadcrumbs>
  )
}

export default CustomBreadCrumbs
