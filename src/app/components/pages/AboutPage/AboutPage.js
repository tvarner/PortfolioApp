import React, { Component } from 'react';
import contentFileIndex from './../../../../content/_contentFileIndex';
import './styles.css';

// Since this component is simple and static, there's no parent container for it.

export default class AboutPage extends Component {
	render() { 
		const contentMonolith = require('./../../../../content/_content.json');
		const mainImageUrl = contentFileIndex[contentMonolith.aboutPage.mainImage];


		return (
			<div style={{ height: '100%', width: '100%' }}>
				<div className={'about-page mast-bg-in-out'}>
					<div className={'page-header'}>Theory</div>
					<div className={'page-content'}>
						<div className={'left-content'}>
							<div className={'image-container'}>
								<img role={"presentation"} className={'about-image'} src={mainImageUrl} />
							</div>
						</div>
						<div className={'right-content'}>
							<div className={'text-container'}>
								{contentMonolith.aboutPage.aboutText}
							</div>
						</div>
					</div>
				</div>
			</div>
		);	
	}
}
