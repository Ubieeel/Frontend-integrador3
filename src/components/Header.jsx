import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function Header(){
    return (
        <body className='bg-black text-white'>

        <nav className="flex items-center justify-between p-4">
        <div className="flex items-center">
            <img className="h-20 w-20 mr-2"  src='./img-header/vivant-logo.png' /> 
        </div>
        <div className='flex items-center space-x-8'>
            <a className='text-lg' href='#'>Home</a>
      
            <a className='text-lg' href='#'>Vinhos</a>
       
            <a className='text-lg' href='#'>Sobre nós</a>
        
            <a className='text-lg' href='#'>Contato</a>

            <a className='text-lg' href='#'>
                <i className='fas fa-shopping-cart'>
                </i>
            </a>
            <a className='text-lg' href='#'>
            <AntDesign name="shoppingcart" size={24} color="black" />
            </a>
        </div>
        </nav>
        </body>
    )
}

