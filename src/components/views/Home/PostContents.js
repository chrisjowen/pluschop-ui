import React, { Component } from 'react';
import SinglePost from '../../feed/SinglePost';

export default class PostContents extends Component{
	render(){

		let {data} = this.props;

		return(
			<div className='UserPostContainer'>
				{data.logs && data.logs.map((item,index) => {
					return (
						<div className='Item_component' key={index}>
							<SinglePost item={item}/>
						</div>
					)
				})}
			</div>
		)
	}
}