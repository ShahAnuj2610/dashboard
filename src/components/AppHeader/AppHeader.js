import React from 'react';
import { Layout, Menu } from 'antd';
import { string, object } from 'prop-types';
import { css } from 'react-emotion';
import { connect } from 'react-redux';
import get from 'lodash/get';

import UserMenu from './UserMenu';
import Back from './Back';
import headerStyles from './styles';

const { Header } = Layout;
const noBorder = css`
	border: 0 !important;

	span {
		color: rgba(0, 0, 0, 0.65) !important;
	}

	&:hover span,
	&:focus span {
		color: #1890ff !important;
	}
`;

const AppHeader = ({ currentApp, user }) => (
	<Header className={headerStyles}>
		<Menu mode="horizontal">
			<Back url="/" />
			<Menu.Item key="1" className={noBorder}>
				<span>{currentApp || 'Loading...'}</span>
			</Menu.Item>
		</Menu>
		<UserMenu user={user} />
	</Header>
);

AppHeader.propTypes = {
	currentApp: string,
	user: object.isRequired,
};

AppHeader.defaultProps = {
	currentApp: null,
};

const mapStateToProps = state => ({
	currentApp: get(state, '$getCurrentApp.name'),
	user: state.user.data,
});

export default connect(mapStateToProps)(AppHeader);
