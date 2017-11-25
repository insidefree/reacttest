import React, { Component } from 'react'
import axios from 'axios'

export default class GetDataByLink extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    componentDidMount() {
        axios.get('https://www.fxempire.com/api/v1/en/markets/eur-usd/chart')
            .then(response => response.data)
            .then(charts => {
                this.setState({ charts })
                this.props.onGetData(charts)
                // console.log(this.state.charts)
            })
            .catch(error => console.error(error.message))
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}