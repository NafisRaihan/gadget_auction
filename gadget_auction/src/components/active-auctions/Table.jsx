import React from 'react';

const Table = () => {
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
            <div className="overflow-x-auto">
                <table className="table w-full border border-gray-200 rounded-lg">
                    {/* head */}
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="border-b border-gray-200 px-6 py-3 text-left">Name</th>
                            <th className="border-b border-gray-200 px-6 py-3 text-left">Job</th>
                            <th className="border-b border-gray-200 px-6 py-3 text-left">Favorite Color</th>
                            <th className="border-b border-gray-200 px-6 py-3 text-left"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {/* row 1 */}
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td className="px-6 py-4">Purple</td>
                            <td className="px-6 py-4">
                                <button className="btn btn-ghost btn-xs">details</button>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Brice Swyre</div>
                                        <div className="text-sm opacity-50">China</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                Carroll Group
                                <br />
                                <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                            </td>
                            <td className="px-6 py-4">Red</td>
                            <td className="px-6 py-4">
                                <button className="btn btn-ghost btn-xs">details</button>
                            </td>
                        </tr>
                        {/* row 3 */}
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Marjy Ferencz</div>
                                        <div className="text-sm opacity-50">Russia</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                Rowe-Schoen
                                <br />
                                <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                            </td>
                            <td className="px-6 py-4">Crimson</td>
                            <td className="px-6 py-4">
                                <button className="btn btn-ghost btn-xs">details</button>
                            </td>
                        </tr>
                        {/* row 4 */}
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Yancy Tear</div>
                                        <div className="text-sm opacity-50">Brazil</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                Wyman-Ledner
                                <br />
                                <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                            </td>
                            <td className="px-6 py-4">Indigo</td>
                            <td className="px-6 py-4">
                                <button className="btn btn-ghost btn-xs">details</button>
                            </td>
                        </tr>
                    </tbody>
                    {/* foot */}
                    <tfoot className="bg-gray-50">
                        <tr>
                            <th className="border-t border-gray-200 px-6 py-3 text-left font-semibold">Name</th>
                            <th className="border-t border-gray-200 px-6 py-3 text-left font-semibold">Job</th>
                            <th className="border-t border-gray-200 px-6 py-3 text-left font-semibold">Favorite Color</th>
                            <th className="border-t border-gray-200 px-6 py-3 text-left font-semibold"></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Table;