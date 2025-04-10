import React, { useState, useEffect } from "react";
import getTrendingTerms from 'services/getTrendingTermService'
import Category from "../Category";
export default function TrendingSearches() {
    const [trends, setTrends ] = useState([]);

    useEffect(function () {
        getTrendingTerms().then(setTrends)
    }, []);
    return <Category name='Tendencias' options={trends} />
}
