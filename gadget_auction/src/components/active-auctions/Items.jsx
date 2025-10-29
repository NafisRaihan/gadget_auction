import React, { useEffect } from 'react';
import Item from '../item/Item';

const Items = () => {
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        fetch('/Items.json')
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => console.error('Error fetching items:', error));
    }, []);


    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">
                Active Auctions
                </h3>
                <p className="text-gray-600">
                    Discover and bid on extraordinary items
                </p>
            </div>
            <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                    {/* head */}
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-gray-200">Items</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-gray-200">Current Bid</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-gray-200">Time Left</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-gray-200">Bid Now</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {items.map((item) => <Item key={item.id} item={item} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Items;