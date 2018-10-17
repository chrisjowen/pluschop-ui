import React, { PureComponent } from 'react';
import {Image, Embed, Container } from 'semantic-ui-react'

export default class PostComponent extends PureComponent{

	renderContent = () => {
		const {item} = this.props

		switch(item.type) {
		    case 'image':
		      return <Image src={item.url} />
		    case 'video':
		      return <video width="100%" height="240" controls>
					<source src={item.url} />
				</video>
		    case 'blog':
		      return  <Container textAlign='justified'>{item.content}</Container>
		    default:
		      return null;
		}
	}

	render(){

		return(
			this.renderContent()
		)
	}
}