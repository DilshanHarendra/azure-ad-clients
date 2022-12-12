import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {userTokenSelectors} from "../../store/selectors/userSelectors.js";
import axios from "axios";
import {useSelector} from "react-redux";
const Products = ()=>{

    const token = useSelector(userTokenSelectors)

    const [products,setProducts] = useState([])

    const fetchProducts = () =>{
        if (token){
            axios.get('http://localhost:8000/api/products',{
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Accept':`application/json`,
                    'Content-Type':`application/json`,
                }
            }).then(res=>{
                setProducts(res.data.data)
            }).catch(err=>{
                console.log(err)
            })
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    return <>
       <div className="flex items-center px-4 py-3 justify-between">
           <h1 className="text-xl text-gray-900  font-semibold">Products</h1>
           <Link to="/products/new" className="inline-flex text-sm justify-center items-center space-x-2 border font-semibold focus:outline-none w-fit px-4 py-1 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">Add</Link>


       </div>
        <div className="border border-gray-200 rounded overflow-x-auto min-w-full bg-white">
            <table className="min-w-full text-sm align-middle whitespace-nowrap">
                <thead>
                <tr className="border-b border-gray-200">
                    <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center">

                    </th>
                    <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-left">
                        Name
                    </th>
                    <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-left">
                        Category
                    </th>
                    <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-left">
                        Price
                    </th>
                    <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-left">
                        Actions
                    </th>
                </tr>
                </thead>

                <tbody>

                {
                    products.map((product,inedx)=>
                        <tr className="border-b border-gray-200" key={inedx}>
                            <td className="p-3 text-center">
                                <img src={product.image} alt="User Avatar" className="inline-block w-12 h-12 rounded-sm object-cover" />
                            </td>
                            <td className="p-3  text-gray-500">
                                {product.title}

                            </td>
                            <td className="p-3 text-gray-500">
                                {product.category}
                            </td>
                            <td className="p-3 text-gray-500">
                                $ {product.price}
                            </td>
                            <td className="p-3 text-left">
                                <button type="button" className="inline-flex justify-start items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                                    <svg className="hi-solid hi-pencil inline-block w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
                                    <span>Edit</span>
                                </button>
                            </td>
                        </tr>
                    )
                }


                </tbody>
            </table>
            {
                products.length==0&&<div className="grid place-items-center w-full h-60">No data</div>
            }
        </div>
    </>
}
export default Products
