import React, { Component } from 'react'
import axios from 'axios'
import App from '../App';



class Agregar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			nombre: '',
			apellido: '',
			telefono: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

    

		handleSubmit = e => {
			e.preventDefault()
			console.log(this.state)
			
				axios.post(' http://www.raydelto.org/agenda.php', this.state)
				.then(response => {
					console.log(response)
				})
				.catch(error => {
					console.log(error)
				})
		}

	render() {
		const { nombre, apellido, telefono } = this.state 
		return (
			<div>
				<form id='form' onSubmit={this.handleSubmit}>
					<div id='nombre'>
						<input type="text" name="nombre" placeholder='Nombre' value={nombre} onChange={this.changeHandler}/>
					</div>

					<div id='apellido'>
						<input type="text" placeholder='Apellido' name="apellido" value={apellido} onChange={this.changeHandler} />
					</div>

					<div id='telefono'>
						<input type="text" placeholder='Telefono' name="telefono"value={telefono} onChange={this.changeHandler}/>
					</div>
					<button type="submit" id='button'>Guardar</button>
				</form>
			</div>
		)
	}
}

export default Agregar;