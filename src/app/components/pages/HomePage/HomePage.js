import React, { Component } from 'react';
import './styles.css';

import HoverButton from '../../utilComponents/HoverButton/HoverButton';

// Since this component is simple and static, there's no parent container for it.
export default class HomePage extends Component {

	getGifComponent(url, text) {
		const attr = 'url(' + url + ') no-repeat center';

		return (
			<div style={{width: '100%', height: '100%'}}>
				<div className={'mobile-hover-cover'}>{text}</div>
				<div className={'home-gif-container'} style={{background: attr, backgroundSize: 'cover'}} />
			</div>
		);
	}

	render() {
		const { openAboutPage, openContactPage, openFilmPage, openPhotographyPage, openReelPage, openFeaturePage } = this.props;
		
		const contentMonolith = require('./../../../../content/_content.json');
		const gif1 = contentMonolith.homePage.gif1;
		const gif2 = contentMonolith.homePage.gif2;
		const gif3 = contentMonolith.homePage.gif3;
		const gif4 = contentMonolith.homePage.gif4;
		const gif5 = contentMonolith.homePage.gif5;
		const gif6 = contentMonolith.homePage.gif6;

		return (
			<div style={{ width: '100%', height: '100%'}}>
				<div className={"home-page"}>
					<div className={'left-home-icons'}>
						<div className={"home-page-icon-container"} onClick={openAboutPage}>
							<HoverButton hoverContent={'Theory'} defaultContent={this.getGifComponent(gif1, 'Theory')} />						
						</div>
						<div className={"home-page-icon-container"} onClick={openPhotographyPage}>
							<HoverButton hoverContent={'Photography'} defaultContent={this.getGifComponent(gif2, 'Photography')} />	
						</div>
						<div className={"home-page-icon-container"} onClick={openFilmPage}>
							<HoverButton hoverContent={'Film'} defaultContent={this.getGifComponent(gif3, 'Film')} />	
						</div>
					</div>
					<div className={'right-home-icons'}>
						<div className={"home-page-icon-container"} onClick={openContactPage}>
							<HoverButton hoverContent={'Connect'} defaultContent={this.getGifComponent(gif4, 'Connect')} />
						</div>
						<div className={"home-page-icon-container"} onClick={openReelPage}>
							<HoverButton hoverContent={'Reel'} defaultContent={this.getGifComponent(gif5, 'Reel')} />	
						</div>
						<div className={"home-page-icon-container"} onClick={openFeaturePage}>
							<HoverButton hoverContent={'Feature'} defaultContent={this.getGifComponent(gif6, 'Feature')} />	
						</div>
					</div>
				</div>
				<div className={"footer grow"}>
					<HoverButton onClick={openContactPage} defaultContent={'Jonathan Andre Beckles & Company'} hoverContent={'Connect'} />
				</div>
			</div>
		);
	}
}