import './App.scss'
import ExamplePdf from './organized.pdf'

const App = () => {
	return (
		<div className='layout'>
			<div className='info'>
				<div className='title'>
					<div>
						<span>Re</span>Office
					</div>
				</div>
				<div className='desc'>
					<div>
						make your office <span>smart</span>
					</div>
				</div>
			</div>
			<div className='btns'>
				<a href='https://hilarious-clafoutis-1966f0.netlify.app/'>Начать</a>
				<a href='https://reoffice-contacts.vercel.app/'>Контакты</a>
				<a href={ExamplePdf} download='pdf' target='_blank' rel='noreferrer'>
					Презентация
				</a>
			</div>
		</div>
	)
}

export default App
