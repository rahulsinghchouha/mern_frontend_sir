
import './App.css'
import Card from './components/Card';

function App() {

	const data = [
		{
			name: "Alice Smith",
			description: "loves hiking and photography",
			age: 25,
			gender: "F"
		},
		{
			name: "Bob Johnson",
			description: "enthusiastic about coding",
			age: 30,
			gender: "M"
		},
		{
			name: "Charlie Brown",
			description: "enjoys painting and cycling",
			age: 22,
			gender: "M"
		},
		{
			name: "Diana Carter",
			description: "avid reader and traveler",
			age: 28,
			gender: "F"
		},
		{
			name: "Ethan Green",
			description: "interested in robotics and AI",
			age: 26,
			gender: "M"
		}
	];
	

  return (
		<div className='min-h-screen p-[25px] bg-slate-100 flex items-start gap-[40px]'>
			{
				data.map(item => (<Card item={item} />  ))

			}
		</div>
  )
}

export default App
