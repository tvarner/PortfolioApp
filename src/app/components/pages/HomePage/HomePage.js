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
		const gif1Title = contentMonolith.homePage.gif1Title;
		const gif2Title = contentMonolith.homePage.gif2Title;
		const gif3Title = contentMonolith.homePage.gif3Title;
		const gif4Title = contentMonolith.homePage.gif4Title;
		const gif5Title = contentMonolith.homePage.gif5Title;
		const gif6Title = contentMonolith.homePage.gif6Title;
		const footerText = contentMonolith.homePage.footerText;

		return (
			<div style={{ width: '100%', height: '100%'}}>
				<div className={"home-page"}>
					<div className={'left-home-icons'}>
						<div className={"home-page-icon-container"} onClick={openAboutPage}>
							<HoverButton hoverContent={gif1Title} defaultContent={this.getGifComponent(gif1, gif1Title)} />						
						</div>
						<div className={"home-page-icon-container"} onClick={openPhotographyPage}>
							<HoverButton hoverContent={gif2Title} defaultContent={this.getGifComponent(gif2, gif2Title)} />	
						</div>
						<div className={"home-page-icon-container"} onClick={openFilmPage}>
							<HoverButton hoverContent={gif3Title} defaultContent={this.getGifComponent(gif3, gif3Title)} />	
						</div>
					</div>
					<div className={'right-home-icons'}>
						<div className={"home-page-icon-container"} onClick={openContactPage}>
							<HoverButton hoverContent={gif4Title} defaultContent={this.getGifComponent(gif4, gif4Title)} />
						</div>
						<div className={"home-page-icon-container"} onClick={openReelPage}>
							<HoverButton hoverContent={gif5Title} defaultContent={this.getGifComponent(gif5, gif5Title)} />	
						</div>
						<div className={"home-page-icon-container"} onClick={openFeaturePage}>
							<HoverButton hoverContent={gif6Title} defaultContent={this.getGifComponent(gif6, gif6Title)} />	
						</div>
					</div>
				</div>
				<div className={"footer grow"}>
					<HoverButton onClick={openContactPage} defaultContent={footerText} hoverContent={'Connect'} />
				</div>
			</div>
		);
	}
}