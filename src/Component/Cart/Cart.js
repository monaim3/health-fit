import React, { useEffect, useState } from 'react';
import './Cart.css';
import cartImg from '../../Images/ali-morshedlou-WMD64tMfc4k-unsplash.jpg';
import { ToastContainer, toast } from 'react-toast';
import 'react-toastify/dist/ReactToastify.css';
import { addToDb, getstoreCart } from '../Utilies/Utilies';

const Cart = (props) => {
    
    const [time, setTime] = useState([]);
    const [breaks,setBreaks]=useState(0)
    useEffect(() => {
        fetch('./fakeBreak.json')
            .then(res => res.json())
            .then(data => setTime(data))
    }, [])
    let times=0;
    for(let time of props.cart){
          times=parseFloat(time.Times)+times;
        
    }
    const handleBreak=(value)=>{
       setBreaks(value)
       addToDb(value)
    }
    useEffect(()=>{
        const storeCart=getstoreCart()
         setBreaks(storeCart)
       },[breaks])
    const notify = () => {
        console.log('wroking')
        toast.success("Congratulation All Done",{
            position: "top-center",
            marginTop:'100px'
            })
    };
    return (
        <>
          <div className="cart">
         
            <div className="avatar ">
                <div className="w-16 h-16 rounded-full ring  ring-offset-base-100 ring-offset-2">
                    <img src={cartImg} />
                </div>
                <div className='ml-4'>
                    <h1 className='text-xl '>Zahid Hossain</h1>
                    <h1 className='text-sm'>Sydney, Australia</h1>
                </div>
            </div>
            <div className="widith-area flex justify-between bg-slate-200 rounded-xl p-2">
                <div className="first">
                    <h1 className='font-semibold text-2xl'>75 <sub className='text-sm'>Kg</sub></h1>
                    <h1>Weight</h1>
                </div>
                <div className="Secound">
                    <h1 className='font-semibold text-2xl'>6.5 </h1>
                    <h1>Height</h1>
                </div>
                <div className="third">
                    <h1 className='font-semibold text-2xl'>25 <sub className='text-sm'>yrs</sub></h1>
                    <h1>Age</h1>
                </div>
            </div>
            <h2 className='text-2xl mt-4 '>Add A Break </h2>
            <div className="mt-6 widith-area flex justify-between bg-slate-200 rounded-xl p-2">
                {
                    time.map((times) => {
                        return (

                            <div className="first">
                                <h1 className='bg-slate-400  ml-2 rounded-full ring  ring-offset-base-100 p-2 pointers'onClick={()=>handleBreak(times.value)}>{times.value}s</h1>
                            </div>

                        )
                    })
                }
            </div>
            <h1 className='text-2xl mt-4 font-semibold'>Exercise Details
            </h1>

            <div className="widith-area mt-4 flex justify-between bg-slate-200 rounded-xl p-2">
                <h1 className='text-xl font-semibold'>Exercise Time
                </h1>
                <h1 className='text-xl '>{times}s
                </h1>
            </div>

            <div className="widith-area mt-4 flex justify-between bg-slate-200 rounded-xl p-2">
                <h1 className='text-xl font-semibold'>break Time
                </h1>
                <h1 className='text-xl'>{breaks}s
                </h1>
            </div>

            {/* complete button */}

            <div className="card-actions justify-center mt-4">
                <button className="btn btn-primary w-full"onClick={notify}>Activity Completed
                </button>
            </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Cart;