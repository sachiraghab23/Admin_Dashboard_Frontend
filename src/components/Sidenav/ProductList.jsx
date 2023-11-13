import React, { useEffect } from 'react'
import { useState } from 'react';
import './../../stylesheets/sidenav styles/ProductList.css';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const ProductList = () => {
  const [category, setCategory] = useState('');
  const [rowData, setRowData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  var [temp, setTemp] = useState([]);

  // var payload = { category: age, };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'name', headerName: 'Product name', width: 130 },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 90,
    },
    {
      field: 'shipping',
      headerName: 'Shipping',
      description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      width: 160,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      width: 90,
    },
    {
      field: 'unitsSold',
      headerName: 'Units sold',
      type: 'number',
      width: 90,
    },
  ];
  /* var rows = [
    { id: 1, category: 'Snow', name: 'Jon', price: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ]; */

  const handleChange = (e) => {
    setCategory(e.target.value);
    filter();
  };
  const filter = async () => {
    const resp = await axios.post('http://localhost:8080/filter-by-category', { category: category });
    var arr = resp.data;
    var c = 1;
    arr.forEach((elem) => {
      elem.id = c++;
    });
    setRowData(arr);
  };
  const search = async () => {
    console.log(searchValue);
    setRowData(rowData.filter((elem) => {
      return elem.name.toLowerCase().includes(searchValue) ||
        elem.category.toLowerCase().includes(searchValue) ||
        elem.id.toLowerCase().includes(searchValue);
    }));
  };
  const getProductList = async () => {
    const resp = await axios.post('http://localhost:8080/getproducts');
    // console.log(resp.data);
    var arr = resp.data, c = 1;
    arr.forEach((elem) => {
      elem.id = c++;
    })
    // console.log(arr);
    setTemp(arr);
    setRowData(arr);
  };
  const getSearchItem = (e) => {
    setSearchValue(e.target.value);
  }
  useEffect(() => {
    getProductList();
  }, []);
  useEffect(() => {
    filter();
  }, [category]);
  useEffect(() => {
    if (searchValue !== "") {
      search();
    } else {
      setRowData(temp);
    }
  }, [searchValue]);

  return (
    <div className='productlist-container'>
      <h2>Product lists</h2>
      {rowData && (
        <Box sx={{
          width: "100%",
          height: "100%",
          border: "1px solid grey",
          backgroundColor: "white",
          borderRadius: "8px",
        }}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={category}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"electronics"}>Electronics</MenuItem>
              <MenuItem value={"furniture"}>Furniture</MenuItem>
              <MenuItem value={"fashion"}>Fashion</MenuItem>
              <MenuItem value={"kitchen"}>Kitchen</MenuItem>
            </Select>
            <input type="text" onChange={getSearchItem} />
            <FormHelperText></FormHelperText>
          </FormControl>
          <div className="search-box">
            <input type="text" placeholder='Search..' />
            <button>{Search}</button>
          </div>
          <div style={{ height: 600, width: '90%', marginLeft: '10px' }}>
            <DataGrid
              rows={rowData}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>
        </Box>
      )}
    </div>
  )
}

export default ProductList
