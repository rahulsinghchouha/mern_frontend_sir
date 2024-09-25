import React from 'react'

function Card({item}) {
	return (
		<div className='bg-white border-[1px] border-slate-200 shadow-[2px_2px_4px_2px_rgba(0,0,0,0.2)] w-[450px] p-[25px] rounded-[10px] flex items-stretch gap-[10px]'>
			<figure className='w-[40%] flex items-center justify-center border-2 '>
				<img src="/vite.svg" width={50} alt="" />
			</figure>
			<div>
				<h3>{item.name}</h3>
				<p>{item.description}</p>
				<p>Age: {item.age} </p>
				<p>Gender: {item.gender}</p>
			</div>
		</div>
	)
}

export default Card