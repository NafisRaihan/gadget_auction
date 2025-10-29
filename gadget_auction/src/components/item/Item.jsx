import React from 'react';
import { useFavorites } from '../../contexts/FavoritesContext';

const Item = ({ item }) => {
    const { addToFavorites, isItemDisabled } = useFavorites();
    const isDisabled = isItemDisabled(item.id);
    return (
        <tr className="hover:bg-gray-50 transition-colors duration-200">
            <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                    <div className="avatar">
                        <div className="w-16 h-16 rounded-lg">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover rounded-lg"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/64x64?text=No+Image';
                                }}
                            />
                        </div>
                    </div>
                    <div className="max-w-xs">
                        <div className="font-bold text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-500">Auction Item</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="text-lg font-semibold text-green-600">
                    ${item.current_bid.toLocaleString()}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">
                    {item.time_left_days} Days left
                </div>
            </td>
            <td className="px-6 py-4">
                <button 
                    onClick={() => addToFavorites(item)}
                    disabled={isDisabled}
                    className={`btn btn-sm ${
                        isDisabled 
                            ? 'bg-red-500 text-white cursor-not-allowed opacity-70' 
                            : 'btn-outline hover:btn-primary hover:bg-red-500 hover:border-red-500'
                    }`}
                    style={isDisabled ? { cursor: 'not-allowed' } : {}}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-4 w-4 ${isDisabled ? 'text-white' : ''}`}
                        fill={isDisabled ? "currentColor" : "none"} 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
            </td>
        </tr>
    );
};

export default Item;