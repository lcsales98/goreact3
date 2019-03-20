import React, { Component, Fragment, ComponentState } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as favActions from "../../store/actions/favorites";

interface IAppState {
	repositoryInput: String;
}

interface IAppProps {
	addFavorite: any;
	favorites: any;
}

class Main extends React.Component<IAppProps, IAppState> {
	state = {
		repositoryInput: ""
	};

	handleAddRepository(event: any) {
		event.preventDefault();
		this.props.addFavorite();
	}

	render() {
		return (
			<Fragment>
				<form onSubmit={this.handleAddRepository}>
					<input
						placeholder="usuario/repositorio"
						value={this.state.repositoryInput}
						onChange={e =>
							this.setState({ repositoryInput: e.target.value })
						}
					/>
					<button type="submit">Adicionar</button>
				</form>

				<ul>
					{this.props.favorites.map((favorite: any) => {
						<li key={favorite.id}>
							<p>
								<strong>{favorite.name}</strong> (
								{favorite.description})
							</p>
							<a href={favorite.url}>Link</a>
						</li>;
					})}
				</ul>
			</Fragment>
		);
	}
}

const mapStateToProps = (state: ComponentState) => ({
	favorites: state.favorites
});

const mapDispatchToProps = (dispatch: any) =>
	bindActionCreators(favActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main);
