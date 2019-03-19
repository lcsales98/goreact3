import React, { Component, Fragment, ComponentState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import * as FavoriteActions from "../../store/actions/favorites";

class Main extends Component {
	static propTypes = {
		addFavorite: PropTypes.func,
		favorites: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number,
				name: PropTypes.string,
				description: PropTypes.string,
				url: PropTypes.string
			})
		).isRequired
	};

	state = {
		repositoryInput: ""
	};

	handleAddRepository = (event: any) => {
		event.preventDefault();
		this.props.favorite;
	};
	render() {
		return (
			<Fragment>
				<form onSubmit={this.handleAddRepository}>
					<input
						placeholder="usuario/repositório"
						value={this.state.repositoryInput}
						onChange={e =>
							this.setState({ repositoryInput: e.target.value })
						}
					/>
					<button type="submit">Enviar</button>
				</form>

				<ul>
					{this.props.favorites.map(favorite => (
						<li key={favorite.id}>
							<p>
								<strong>{favorite.name}</strong> (
								{favorite.description})
							</p>
							<a href={favorite.url}>Link</a>
						</li>
					))}
				</ul>
			</Fragment>
		);
	}
}

const mapStateToProps = (state: ComponentState) => ({
	favorites: state.favorites
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(FavoriteActions, dispatch);

export default connect(
	mapDispatchToProps,
	mapStateToProps
)(Main);
