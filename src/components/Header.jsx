import React from 'react';




export default function Header(){
    return (
        <body className=' text-gray-600'>

        <header>

        <nav className="flex items-center justify-between p-4">
        <div className="flex items-center">
            <img className="h-20 w-20 mr-2"  src='./Vivant.png' />
        </div>
        <div className='flex items-center space-x-8'>
            <a className='text-lg' href='#'>Home</a>
     
            <a className='text-lg' href='#'>Vinhos</a>
       
            <a className='text-lg' href='#'>Sobre nós</a>
       
            <a className='text-lg' href='#'>Contato</a>

            <a className='text-lg' href='#'></a>

            <a className='text-lg' href='#'>
            
            </a>
        </div>
        </nav>

        </header>
        </body>
    )
}


