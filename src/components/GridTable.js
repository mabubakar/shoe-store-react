import React, { useContext } from 'react'
import MUIDataTable from 'mui-datatables'
import { GlobalContext } from '../context/GlobalState'
import { IconButton } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'

const GridTable = ({ gridTableData }) => {
  const { removeItems, addItem, minusItem } = useContext(GlobalContext)

  const columns = [
    {
      name: 'name',
      label: 'Item Name',
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: 'count',
      label: 'Count',
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <div>
              <IconButton
                color='primary'
                aria-label='add'
                onClick={() => addItem(gridTableData[dataIndex].id)}
              >
                <AddCircleOutlineIcon />
              </IconButton>
              {gridTableData[dataIndex].count}
              <IconButton
                disabled={gridTableData[dataIndex].count === 0}
                color='secondary'
                aria-label='remove'
                onClick={() => minusItem(gridTableData[dataIndex].id)}
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
            </div>
          )
        },
        sort: true,
      },
    },
    {
      name: 'price',
      label: 'Price',
      options: {
        filter: false,
        sort: true,
      },
    },
  ]

  const options = {
    onRowsDelete: rowsDeleted => {
      removeItems(rowsDeleted.data)
    },
    filterType: 'checkbox',
    filter: false,
    download: false,
    print: false,
    viewColumns: false,
    pagination: false,
  }

  return (
    <MUIDataTable
      title={'Your Cart'}
      data={gridTableData}
      columns={columns}
      options={options}
    />
  )
}

export default GridTable
