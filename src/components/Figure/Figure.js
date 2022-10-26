import React from "react";
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './Figure.css'

function Figure(){

    const data = useLoaderData();

    return (
        <div className="figure">
            <h2>Quiz figures</h2>
            <div>
                <LineChart width={800} height={350} data={data.data}>
                    <Line type="monotone" dataKey="total" stroke="#880808" />
                    <CartesianGrid stroke="#722F37" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip/>
                </LineChart>
            </div>
        </div>
    );
}

export default Figure;