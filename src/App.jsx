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
      <div className="btns">
        <a href="#">Начать</a>
        <a href="#">Презентация</a>
        <a href="#">Паспорт</a>
      </div>
		</div>
	)
}

export default App
