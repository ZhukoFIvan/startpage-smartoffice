import './App.scss'
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
				<a href='http://91.107.125.49/' download>
					Начать
				</a>
				<a href='https://reoffice-contacts.vercel.app/' download>
					Контакты
				</a>
				<a href='/src/assets/organized.pdf'>Презентация</a>
				<a href='/src/assets/Паспорт Стартап-проекта_MISIS PLUS.docx'>
					Паспорт
				</a>
			</div>
		</div>
	)
}

export default App
