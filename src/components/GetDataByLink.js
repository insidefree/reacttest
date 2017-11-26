import React, { Component } from 'react'
import axios from 'axios'

export default class GetDataByLink extends Component {

    componentDidMount() {
        this.getDataByUrl(this.props.link.url)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.link.id !== this.props.link.id) {
            this.getDataByUrl(this.props.link.url)
        }
    }

    getDataByUrl = url => {
        axios.get(url)
            .then(response => response.data)
            .then(charts => {
                this.props.onGetData(charts)
            })
            .catch(error => console.error(error.message))
    }

    render() {
        return (
            <div></div>
        )
    }
}