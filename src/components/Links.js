import React, { Component } from 'react'

export default class Links extends Component {
 
    render() {
        const { data, onClick } = this.props
        return (
            <div>
                {data.map(obj =>
                    <div href={obj.url} key={obj.id} onClick={onClick} value={obj.id}>
                        {obj.description}
                    </div>
                )}
            </div>
        )
    }
}