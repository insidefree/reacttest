import React, { Component } from 'react'
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'


const data = [
    {
    date: 1511542860000,
    open: 1.19365,
    high: 1.19375,
    low: 1.19353,
    close: 1.19375
    },
    {
    date: 1511542800000,
    open: 1.19358,
    high: 1.19385,
    low: 1.19355,
    close: 1.19375
    },
    {
    date: 1511542740000,
    open: 1.19355,
    high: 1.19375,
    low: 1.19345,
    close: 1.19357
    },
    {
    date: 1511542680000,
    open: 1.19355,
    high: 1.19365,
    low: 1.19345,
    close: 1.19358
    },
    {
    date: 1511542620000,
    open: 1.19351,
    high: 1.19365,
    low: 1.19345,
    close: 1.19352
    },
    {
    date: 1511542560000,
    open: 1.19352,
    high: 1.19365,
    low: 1.19344,
    close: 1.19352
    },
    {
    date: 1511542500000,
    open: 1.19375,
    high: 1.19375,
    low: 1.19345,
    close: 1.19354
    },
    {
    date: 1511542440000,
    open: 1.19365,
    high: 1.19385,
    low: 1.19347,
    close: 1.19355
    },
    {
    date: 1511542380000,
    open: 1.19356,
    high: 1.19375,
    low: 1.19345,
    close: 1.19359
    },
    {
    date: 1511542320000,
    open: 1.19356,
    high: 1.19375,
    low: 1.19345,
    close: 1.19355
    },
    {
    date: 1511542260000,
    open: 1.19356,
    high: 1.19375,
    low: 1.19345,
    close: 1.19365
    },
    {
    date: 1511542200000,
    open: 1.19354,
    high: 1.19375,
    low: 1.19354,
    close: 1.19375
    },
    {
    date: 1511542140000,
    open: 1.19347,
    high: 1.19365,
    low: 1.19345,
    close: 1.19345
    },
    {
    date: 1511542080000,
    open: 1.19343,
    high: 1.19365,
    low: 1.19343,
    close: 1.19346
    },
    {
    date: 1511542020000,
    open: 1.19375,
    high: 1.19375,
    low: 1.19342,
    close: 1.19342
    },
    {
    date: 1511541960000,
    open: 1.1937,
    high: 1.19385,
    low: 1.19365,
    close: 1.19366
    },
    {
    date: 1511541900000,
    open: 1.19365,
    high: 1.19385,
    low: 1.19362,
    close: 1.1937
    },
    {
    date: 1511541840000,
    open: 1.19367,
    high: 1.19385,
    low: 1.19359,
    close: 1.19361
    },
    {
    date: 1511541780000,
    open: 1.19365,
    high: 1.19385,
    low: 1.19361,
    close: 1.19367
    },
    {
    date: 1511541720000,
    open: 1.1937,
    high: 1.19385,
    low: 1.19355,
    close: 1.1936
    },
    {
    date: 1511541660000,
    open: 1.1937,
    high: 1.19385,
    low: 1.19365,
    close: 1.19369
    },
    {
    date: 1511541600000,
    open: 1.19384,
    high: 1.19405,
    low: 1.19369,
    close: 1.19369
    },
    {
    date: 1511541540000,
    open: 1.19395,
    high: 1.19405,
    low: 1.19385,
    close: 1.19386
    },
    {
    date: 1511541480000,
    open: 1.19391,
    high: 1.19415,
    low: 1.19385,
    close: 1.19399
    },
    {
    date: 1511541420000,
    open: 1.19394,
    high: 1.19415,
    low: 1.1939,
    close: 1.19415
    },
    {
    date: 1511541360000,
    open: 1.19389,
    high: 1.19415,
    low: 1.19385,
    close: 1.19395
    },
    {
    date: 1511541300000,
    open: 1.19385,
    high: 1.19395,
    low: 1.19375,
    close: 1.19389
    },
    {
    date: 1511541240000,
    open: 1.19397,
    high: 1.19415,
    low: 1.19383,
    close: 1.19385
    },
    {
    date: 1511541180000,
    open: 1.19405,
    high: 1.19415,
    low: 1.19395,
    close: 1.19396
    },
    {
    date: 1511541120000,
    open: 1.19395,
    high: 1.19425,
    low: 1.19395,
    close: 1.19405
    },
    {
    date: 1511541060000,
    open: 1.19395,
    high: 1.19415,
    low: 1.19381,
    close: 1.19385
    },
    {
    date: 1511541000000,
    open: 1.19396,
    high: 1.19415,
    low: 1.19394,
    close: 1.19399
    },
    {
    date: 1511540940000,
    open: 1.19393,
    high: 1.19405,
    low: 1.19385,
    close: 1.19405
    },
    {
    date: 1511540880000,
    open: 1.19405,
    high: 1.19425,
    low: 1.19391,
    close: 1.19394
    },
    {
    date: 1511540820000,
    open: 1.1941,
    high: 1.19425,
    low: 1.19395,
    close: 1.19404
    },
    {
    date: 1511540760000,
    open: 1.19435,
    high: 1.19445,
    low: 1.19404,
    close: 1.19412
    },
    {
    date: 1511540700000,
    open: 1.19398,
    high: 1.19445,
    low: 1.19393,
    close: 1.19436
    },
    {
    date: 1511540640000,
    open: 1.19405,
    high: 1.19415,
    low: 1.19385,
    close: 1.19397
    },
    {
    date: 1511540580000,
    open: 1.19399,
    high: 1.19415,
    low: 1.19385,
    close: 1.19415
    },
    {
    date: 1511540520000,
    open: 1.19425,
    high: 1.19425,
    low: 1.19395,
    close: 1.19395
    },
    {
    date: 1511540460000,
    open: 1.19395,
    high: 1.19415,
    low: 1.19393,
    close: 1.19408
    },
    {
    date: 1511540400000,
    open: 1.19393,
    high: 1.19415,
    low: 1.19391,
    close: 1.19394
    },
    {
    date: 1511540340000,
    open: 1.19398,
    high: 1.19415,
    low: 1.19393,
    close: 1.19395
    },
    {
    date: 1511540280000,
    open: 1.19405,
    high: 1.19425,
    low: 1.19393,
    close: 1.19397
    },
    {
    date: 1511540220000,
    open: 1.19405,
    high: 1.19415,
    low: 1.19385,
    close: 1.19406
    },
    {
    date: 1511540160000,
    open: 1.19386,
    high: 1.19405,
    low: 1.19375,
    close: 1.19391
    },
    {
    date: 1511540100000,
    open: 1.19357,
    high: 1.19386,
    low: 1.19345,
    close: 1.19385
    },
    {
    date: 1511540040000,
    open: 1.19358,
    high: 1.19365,
    low: 1.19343,
    close: 1.19356
    },
    {
    date: 1511539980000,
    open: 1.1933,
    high: 1.19365,
    low: 1.19325,
    close: 1.19356
    },
    {
    date: 1511539920000,
    open: 1.19319,
    high: 1.19345,
    low: 1.19317,
    close: 1.19329
    },
    {
    date: 1511539860000,
    open: 1.19318,
    high: 1.19345,
    low: 1.19315,
    close: 1.19322
    },
    {
    date: 1511539800000,
    open: 1.19323,
    high: 1.19335,
    low: 1.19315,
    close: 1.19319
    },
    {
    date: 1511539740000,
    open: 1.19328,
    high: 1.19345,
    low: 1.19315,
    close: 1.19324
    },
    {
    date: 1511539680000,
    open: 1.19324,
    high: 1.19335,
    low: 1.19315,
    close: 1.19328
    },
    {
    date: 1511539620000,
    open: 1.19334,
    high: 1.19345,
    low: 1.19315,
    close: 1.19323
    },
    {
    date: 1511539560000,
    open: 1.1936,
    high: 1.19375,
    low: 1.19332,
    close: 1.1934
    },
    {
    date: 1511539500000,
    open: 1.19368,
    high: 1.19385,
    low: 1.19348,
    close: 1.19359
    },
    {
    date: 1511539440000,
    open: 1.19366,
    high: 1.19385,
    low: 1.19365,
    close: 1.19367
    },
    {
    date: 1511539380000,
    open: 1.19398,
    high: 1.19415,
    low: 1.19362,
    close: 1.19365
    },
    {
    date: 1511539320000,
    open: 1.19394,
    high: 1.19405,
    low: 1.19375,
    close: 1.19398
    },
    {
    date: 1511539260000,
    open: 1.19343,
    high: 1.19405,
    low: 1.19343,
    close: 1.19396
    },
    {
    date: 1511539200000,
    open: 1.19352,
    high: 1.19375,
    low: 1.19337,
    close: 1.19343
    },
    {
    date: 1511539140000,
    open: 1.19323,
    high: 1.19385,
    low: 1.19313,
    close: 1.19352
    },
    {
    date: 1511539080000,
    open: 1.19304,
    high: 1.19335,
    low: 1.19304,
    close: 1.19315
    },
    {
    date: 1511539020000,
    open: 1.1931,
    high: 1.19335,
    low: 1.19305,
    close: 1.19306
    },
    {
    date: 1511538960000,
    open: 1.19303,
    high: 1.19325,
    low: 1.19295,
    close: 1.1931
    },
    {
    date: 1511538900000,
    open: 1.19314,
    high: 1.19325,
    low: 1.19297,
    close: 1.19304
    },
    {
    date: 1511538840000,
    open: 1.19283,
    high: 1.19335,
    low: 1.19283,
    close: 1.19313
    },
    {
    date: 1511538780000,
    open: 1.19275,
    high: 1.19285,
    low: 1.19265,
    close: 1.19281
    },
    {
    date: 1511538720000,
    open: 1.19245,
    high: 1.19285,
    low: 1.19245,
    close: 1.19276
    },
    {
    date: 1511538660000,
    open: 1.1924,
    high: 1.19275,
    low: 1.19235,
    close: 1.19253
    },
    {
    date: 1511538600000,
    open: 1.19237,
    high: 1.19255,
    low: 1.19234,
    close: 1.19245
    },
    {
    date: 1511538540000,
    open: 1.19228,
    high: 1.19245,
    low: 1.19225,
    close: 1.19237
    },
    {
    date: 1511538480000,
    open: 1.19225,
    high: 1.19255,
    low: 1.19225,
    close: 1.19228
    },
    {
    date: 1511538420000,
    open: 1.19245,
    high: 1.19245,
    low: 1.19225,
    close: 1.19234
    },
    {
    date: 1511538360000,
    open: 1.19233,
    high: 1.19245,
    low: 1.19225,
    close: 1.19234
    },
    {
    date: 1511538300000,
    open: 1.19231,
    high: 1.19245,
    low: 1.19225,
    close: 1.19231
    },
    {
    date: 1511538240000,
    open: 1.19236,
    high: 1.19245,
    low: 1.19225,
    close: 1.19232
    },
    {
    date: 1511538180000,
    open: 1.19252,
    high: 1.19265,
    low: 1.19234,
    close: 1.19235
    },
    {
    date: 1511538120000,
    open: 1.19222,
    high: 1.19255,
    low: 1.19222,
    close: 1.19251
    },
    {
    date: 1511538060000,
    open: 1.19255,
    high: 1.19255,
    low: 1.19225,
    close: 1.1923
    },
    {
    date: 1511538000000,
    open: 1.19255,
    high: 1.19255,
    low: 1.19225,
    close: 1.19236
    },
    {
    date: 1511537940000,
    open: 1.19234,
    high: 1.19255,
    low: 1.19225,
    close: 1.19236
    },
    {
    date: 1511537880000,
    open: 1.19234,
    high: 1.19245,
    low: 1.19225,
    close: 1.19234
    },
    {
    date: 1511537820000,
    open: 1.19229,
    high: 1.19245,
    low: 1.19225,
    close: 1.19233
    },
    {
    date: 1511537760000,
    open: 1.19225,
    high: 1.19245,
    low: 1.19225,
    close: 1.19229
    },
    {
    date: 1511537700000,
    open: 1.19229,
    high: 1.19245,
    low: 1.19225,
    close: 1.19235
    },]

const data2 = [{name: 'Page A', uv: 590, pv: 800, amt: 2000},
{name: 'Page B', uv: 868, pv: 967, amt: 1506},
{name: 'Page C', uv: 1397, pv: 1098, amt: 989},
{name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
{name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
{name: 'Page F', uv: 1400, pv: 680, amt: 1700}];

export default class ChartsMaker extends Component {
    render() {
        return (
            <ComposedChart width={1000} height={400} data={data}
            margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <XAxis dataKey="date"/>
          <YAxis type="number" domain={['auto', 'auto']}/>
          <Tooltip/>
          <Legend/>
          <CartesianGrid stroke='#f5f5f5'/>
          <Area type='monotone' dataKey='high' fill='#8884d8' stroke='#8884d8'/>
          <Line type='monotone' dataKey='open' stroke='black'/>
          <Area type='monotone' dataKey='close' fill='red' stroke='red'/>
       </ComposedChart>
        );
    }
}
