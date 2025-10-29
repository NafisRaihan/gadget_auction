import React, { useEffect } from 'react';
import Item from '../item/Item';
import { useFavorites } from '../../contexts/FavoritesContext';

const Items = () => {
    const [items, setItems] = React.useState([]);
    const { favorites, removeFromFavorites, getTotalAmount } = useFavorites();

    useEffect(() => {
        fetch('/Items.json')
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => console.error('Error fetching items:', error));
    }, []);


    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Active Auctions Section */}
                <div className="lg:col-span-3">
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
                                {items.slice(0, 6).map((item) => <Item key={item.id} item={item} />)}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Favorite Items Section */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            <h4 className="text-xl font-bold text-gray-900">Favorite Items</h4>
                        </div>
                        
                        {favorites.length === 0 ? (
                            <div className="text-center py-8">
                                <p className="text-gray-500 mb-4">No favorites yet</p>
                                <p className="text-sm text-gray-400">Click the heart icon on any item to add it to your favorites</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {favorites.map((item) => (
                                    <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h5 className="font-semibold text-sm text-gray-900 line-clamp-2">{item.title}</h5>
                                            <button 
                                                onClick={() => removeFromFavorites(item.id)}
                                                className="text-red-500 hover:text-red-700 ml-2"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        <p className="text-green-600 font-semibold">${item.current_bid.toLocaleString()}</p>
                                        <p className="text-xs text-gray-500">{item.bids_count} bids</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-gray-900">Total bids Amount</span>
                                <span className="text-xl font-bold text-green-600">${getTotalAmount().toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;