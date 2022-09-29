import React from 'react';
import './Product.css'
const Product = (props) => {
    const handleCart=props.handleCart
    const {name,Times,img,description,age}=props.element;
    return (
        <>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                        <figure>
                            <img src={img} alt="Gym" />
                            </figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            
                            <p className='text-sm'> {description}</p>
                            <p className='text-1xl font-semibold'>For Age: {age}-25</p>
                            <p className='text-1xl font-semibold'>Time required: {Times}s</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-outline btn-primary w-full" onClick={()=>handleCart(props.element)}>Add TO List</button>
                            </div>
                        </div>
                    </div>
        </>
    );
};

export default Product;