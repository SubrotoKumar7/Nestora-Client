import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../components/Card';

const AllProperty = () => {
    const propertiesData = useLoaderData();
    const [search, setSearch] = useState('');
    const [properties, setProperties] = useState(propertiesData);
    const [sort, setSort] = useState('');

    useEffect(()=> {
        const filterProperty = propertiesData && propertiesData.length > 0
            ? propertiesData.filter((property) =>
                (property.name && property.name.toLowerCase().includes(search.toLowerCase().trim())) ||
                (property.description && property.description.toLowerCase().includes(search.toLowerCase().trim()))
            )
            : [];
        setProperties(filterProperty);
    }, [propertiesData, search])

    useEffect(()=> {
        fetch(`http://localhost:3000/sort?price=${sort}`)
        .then(res=> res.json())
        .then(data=> {
            setProperties(data);
        })
    }, [sort])

    return (
        <div className='w-11/12 mx-auto sec-gap'>
            <div className='text-center space-y-2 mb-10'>
                <h1 className='heading font-heading'>Explore Exclusive Real Estate Listings</h1>
                <p>Handpicked properties with premium amenities, modern architecture, and unbeatable locations — find your next investment today.</p>
            </div>
            <div className="flex flex-row justify-between items-center gap-5">
                <div>
                    <input
                        type="search"
                        placeholder="Search Properties ....."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-[60%] mx-auto sm:w-62 md:w-86 px-6 py-2 pr-2 rounded border border-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                    />                    
                </div>
                <fieldset className="fieldset">
                    <select onChange={(e)=> setSort(e.target.value)} defaultValue="sort by" className="select">
                        <option value={'none'}>Default Sort</option>
                        <option value={'low2high'}>Low to High (Price)</option>
                        <option value={'high2low'}>High to Low (Price)</option>
                    </select>
                </fieldset>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7'>
                {
                    properties.length > 0 ? (
                        properties.map(property => <Card key={property._id} property={property} />)
                    ) : (
                        <div className="col-span-full my-[10vh] text-center text-3xl font-bold">
                            No Properties Found
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllProperty;