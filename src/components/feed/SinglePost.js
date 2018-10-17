import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import PostComponent from '../common/PostComponent';

export default class SinglePost extends Component{
    
	render(){

		let {item} = this.props;

		return(
            <Card>
                <Card.Content>
                    <Card.Header><a><Icon name='user' /></a>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Posted: {item.date}</span>
                    </Card.Meta>
                </Card.Content>
                <PostComponent 
                    item={item.item}
                />
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {item.comments.length} comments
                    </a>
                </Card.Content>
                {item.comments.map((comment,index) => {
                    return(
                        <Card.Content key={index}>
                            <Card.Description>{comment.content}</Card.Description>
                        </Card.Content>
                    )
                })}
            </Card>
		)
	}
}