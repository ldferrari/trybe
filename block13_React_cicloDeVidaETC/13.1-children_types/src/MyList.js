import React, { Component } from 'react'

export default class MyList extends Component {
    render() {
        return (
            <div className='list'>
                <ul>
                  {this.props.children.map(child => {
                    if (child.type === 'li') return child
                    return <li key={child}>{child}</li>
                  })}
                </ul>
                
            </div>
        )
    }
    
}
