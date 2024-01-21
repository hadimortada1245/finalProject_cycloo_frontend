import axios from "axios";
import Swal from 'sweetalert2'
export const getAllProducts = () => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/products/getAllProducts`)
        .then((response) => {
          const products = response.data.result;
          dispatch({
            type: "getAllProducts",
            payload: products,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
export const addProduct= (selectedImage ,productName ,productCompany ,productType ,productPrice ,productQuantity ,productDelivery ,productDescription) => {
    return async(dispatch) => {
     let imageUrl;
      const formData = new FormData();
      formData.append('image', selectedImage);
      try {
        const response = await axios.post('https://api.imgbb.com/1/upload?key=91d27c7f35f4cd3885f4ada2ac3d2c1c', formData);
         imageUrl = response.data.data.url;
        // console.log('Image uploaded successfully:', imageUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
      const data={
        img:imageUrl ,
        name:productName ,
        company:productCompany ,
        type:productType ,
        price:productPrice ,
        quantity:productQuantity ,
        delivery:productDelivery ,
        description:productDescription
      }
      axios
        .post(`${process.env.REACT_APP_API_URL}/products/add`,data)
        .then((response) => {
          const newProduct=response.data.result;
          dispatch({
            type: "addProduct",
            payload:newProduct,
          });
          dispatch({
            type: "increaseTotalProducts",
          });
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Adding a product successfully!",
            showConfirmButton: false,
            timer: 2500
          });
        })
       
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
  export const deleteProduct = (Id) => {
      return (dispatch) => {
        axios
          .delete(`${process.env.REACT_APP_API_URL}/products/deleteProduct/${Id}`)
          .then((response) => {
            dispatch({
              type: "deleteProduct",
              payload: Id,
            });
            dispatch({
              type: "reduceTotalProducts",
            });
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      };
    };