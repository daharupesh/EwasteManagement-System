import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';











export default function ViewCollectionTable() {

    const [productData,setProductData]=useState([]);

    async function fetchData() {
      // You can await here
      var {data}=await axios.get('http://localhost:8003/api/productDetails');

      console.log(data.product);

      setProductData(data.product);

    }


    console.log("product data ",productData)

  
  useEffect(()=>{

     
        fetchData();

     },[]);


   //deleting product function 
   const deleteProductHandler=async(id)=>{
    console.log('id : ',id);

    var {data}=await axios.delete(`http://localhost:8003/api/productDetails/${id}`);

    console.log('message : ',data.message);

    if(data){
      // alert("Admin login Successful")
      alert(data.message)
    }else{
      alert('something went worng!');
    }

   }
  



  
 //for datagrid
 const columns=[
  {field:"id",headerName:"Product Id",minWidth:200,flex:0.5},
  {
      field:"productName",
      headerName:"Product Name",
      minWidth:350,
      flex: 0.5,
  },
  {
      field:"fullname",
      headerName:"FullName",
      minWidth:150,
      flex:0.3,
  },
  {
      field:"email",
      headerName:"Email",
      minWidth:270,
      flex:0.5,
  },
  {
    field:"address",
    headerName:"Address",
    minWidth:270,
    flex:0.5,
},
{
  field:"quantity",
  headerName:"Quantity in KG",
  minWidth:270,
  flex:0.5,
},
{
  field:"desc",
  headerName:"Description",
  minWidth:270,
  flex:0.5,
},
  {
      field:"actions",
      headerName:"Actions",
      flex:0.3,
      minWidth:150,
      type:"number",
      sortable:false,
      renderCell:(params)=>{
          return(
            <>
                 <Link to={`/admin/product/${params.getValue(params.id,"id")}`}>
                  <EditIcon/>
                 </Link> 

                 <Button onClick={()=>{
                 deleteProductHandler(params.getValue(params.id,"id"))
                 }}>
                    <DeleteIcon/>
                 </Button>

            </>
          )
      }
  },
  
];



  const rows=[];

     //value pushing in row of DataGrid
     productData && productData.forEach((item,index)=>{
      rows.push({
        id:item._id,
        productName:item.productName,
        fullname:item.fullname,
        email:item.email,
        address:item.address,
        quantity:item.quantity,
        desc:item.desc,
      })   
  });




  return (
   <>

       <DataGrid
              rows={rows}
              columns={columns}
              pageSize={12}
              disableSelectionOnClick
              className="productListTable"
              style={{width:1200}}
              autoHeight
             >
             </DataGrid>

   </>
  )
}
