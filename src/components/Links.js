import React, { Component } from 'react'

export default class Links extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { data } = this.props
        console.log(data)
        return (
            <div>
                {data.map(obj =>
                    <div href={obj.url} key={obj.id}>
                        {obj.description}
                    </div>
                )}

            </div>
        )
    }
}