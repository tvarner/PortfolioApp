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
								Jon André Co. is a content label for film and fine arts. The label was formed to counteract a creative industries that thrive on anesthesia— ephemeral content, that although may be momentarily pleasurable, ultimately sedates the emotional intelligence and intellect of its viewers.Jon André is not just a brand or enterprise, but a system of belief relative to the intentionality of arts and mass media. At its foundation, Jon Andre is a school of thoughtful and active artists, who believe that the general public should support the production of subversive content—intellectually probing art, literature, and media that incites discussion and introspection among viewers.
							</div>
						</div>
					</div>
				</div>
			</div>
		);	
	}
}
