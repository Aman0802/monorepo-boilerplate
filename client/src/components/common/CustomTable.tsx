import { useTable } from 'react-table'
import './CustomTable.css'

interface CustomTableProps {
  columns: any
  data: any
}

const CustomTable = ({ columns, data }: CustomTableProps) => {
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data,
  })
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, headerGroupIdx) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroupIdx}>
            {headerGroup.headers.map((column, headerIdx) => (
              <th {...column.getHeaderProps()} key={headerIdx}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIdx) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} key={rowIdx}>
              {row.cells.map((cell, cellIdx) => {
                return (
                  <td {...cell.getCellProps()} key={cellIdx}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default CustomTable
