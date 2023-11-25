import './App.scss'
import ExamplePdf from './organized.pdf';

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
				<a href='http://91.107.125.49/' >
					Начать
				</a>
				<a href='https://reoffice-contacts.vercel.app/' >
					Контакты
				</a>
				<a
        href={ExamplePdf}
        download="pdf"
        target="_blank"
        rel="noreferrer"
      >
				Презентация
      </a>
			
			</div>
		</div>
	)
}

export default App
