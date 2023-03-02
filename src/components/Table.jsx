import React from 'react'
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import csvdata from '../csvjson.json'
import { Avatar } from '@mui/material';



// Dont forget about the image section


const Table = () => {
let i = 0

const addImg = csvdata.map((x, i) => ({...x, img: `images/${i++}.jpg`}))


// console.log('here', addImg[Object.keys(csvdata)].img)


  const columns= [
    { 
      field: 'id',
      headerName: 'Image_ID',
      width: 100 
    },
    {
      field: 'street',
      headerName: 'Street',
      width: 200
    },
    {
      field: 'citi',
      headerName: 'Citi',
      width: 200,
    },
    {
      field: 'n_citi',
      headerName: 'N_Citi',
      width: 75,
    },
    {
      field: 'bed',
      headerName: 'Bed',
      width: 80,
    },
    {
      field: 'bath',
      headerName: 'Bath',
      width: 80,
    },
    {
      field: 'sqft',
      headerName: 'Sqft',
      width: 100,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
    },
    {
      field: 'price_sqft',
      headerName: 'Price_Sqft',
      width: 100,
    },
    {
      field: 'counts_locations',
      headerName: 'Counts_Location',
      width: 175,
    },
    {
      field: 'average_price_price_sqft',
      headerName: 'Avg_Price_Price_Sqft',
      width: 200,
    },
    // {
    //   field: 'img',
    //   headerName: 'Image',
    //   width: 200,
    //   renderCell: () => <img src={`images/${i++}.jpg`} />
    // },
  ];
  
  const rows = addImg.map(
    (data) => ({
        id: data.image_id,
        street: data.street,
        citi: data.citi,
        n_citi: data.n_citi,
        bed: data.bed,
        bath: data.bath,
        sqft: data.sqft,
        price: `$${data.price}`,
        price_sqft: `$${data.price_sqft}`,
        counts_locations: data.counts_locations,
        average_price_price_sqft: data.average_price_price_sqft,
        img: data.img
      }))
    

  

  return (
    <Box sx={{ height: '25em', width: '98%', border: '2px black solid', boxShadow: '5px 10px grey', ml: '1em', mt: '1em' }}>
 
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection

      />

      <img src='../../public/images/0.jpg'/>
    
    </Box>
  )
}

export default Table