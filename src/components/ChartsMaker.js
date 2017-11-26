import React, { Component } from 'react'
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'


export default class ChartsMaker extends Component {
    render() {
        const { data } = this.props
        return (
            <ComposedChart width={1000} height={400} data={data}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <XAxis dataKey="date" />
                <YAxis type="number" domain={['auto', 'auto']} />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke='#f5f5f5' />
                <Area type='monotone' dataKey='high' fill='#8884d8' stroke='#8884d8' />
                <Line type='monotone' dataKey='open' stroke='black' />
                <Area type='monotone' dataKey='close' fill='red' stroke='red' />
            </ComposedChart>
        );
    }
}
