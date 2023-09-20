import { useState } from 'react';

function App() {
	const content = [{ content: 'Menu Jeden' }, { content: 'Menu Dwa' }, { content: 'Menu Trzy' }];
	const [num, setNum] = useState(0);
	return (
		<div style={{ fontSize: '2rem' }} className=''>
			<nav style={{ color: 'wheat' }}>
				<ul
					style={{
						display: 'flex',
						color: '#fff',
						justifyContent: 'center',
						gap: '8rem',
						listStyle: 'none',
						backgroundColor: '#333',
						fontWeight: 'bold',
						height: '100%',
					}}
				>
					<Tab num={0} onClick={function(){
						console.log('123')
					}} content={'Menu Jeden'} />
					<Tab num={1} content={'Menu Dwa'} onClick={() => setNum(1)} />
					<Tab num={2} content={'Menu Trzu'} onClick={() => setNum(2)} />
				</ul>
			</nav>
			<Content color={'#888'} content={content[num].content}></Content>
		</div>
	);
}

function Tab({ num, content, onClick={onClick} }) {
	return (
		<li onClick={()}  num={num} style={{ cursor: 'pointer' }}>
			{content}
		</li>
	);
}

function Content({ color, children, content }) {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: color,
				color: 'white',
				height: '50vh',
			}}
		>
			{content}
		</div>
	);
}
export default App;
