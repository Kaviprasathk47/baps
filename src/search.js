import React, { useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState('');
    const items = [
        {
            thumb: 'profile-5.jpeg',
            name: 'Alan Green',
            email: 'alan@mail.com',
            status: 'Active',
            statusClass: 'badge badge-outline-primary'
        },
        {
            thumb: 'profile-11.jpeg',
            name: 'Linda Nelson',
            email: 'Linda@mail.com',
            status: 'Busy',
            statusClass: 'badge badge-outline-danger'
        },
        {
            thumb: 'profile-12.jpeg',
            name: 'Lila Perry',
            email: 'Lila@mail.com',
            status: 'Closed',
            statusClass: 'badge badge-outline-warning'
        },
        {
            thumb: 'profile-3.jpeg',
            name: 'Andy King',
            email: 'Andy@mail.com',
            status: 'Active',
            statusClass: 'badge badge-outline-primary'
        },
        {
            thumb: 'profile-15.jpeg',
            name: 'Jesse Cory',
            email: 'Jesse@mail.com',
            status: 'Busy',
            statusClass: 'badge badge-outline-danger'
        }
    ];

    const searchResults = items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.status.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            {/* searchbar */}
            <form className="mx-auto w-full sm:w-1/2 mb-5">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search Attendees..."
                        className="form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-white rounded-full h-11 placeholder:tracking-wider"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="button" className="btn btn-primary absolute ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-9 h-9 p-0 flex items-center justify-center">
                        <svg> ... </svg>
                    </button>
                </div>
            </form>

            {/* result */}
            <div className="p-4 border border-white-dark/20 rounded-lg space-y-4 overflow-x-auto w-full block">
                {searchResults.map(item => (
                    <div key={item.email} className="bg-white dark:bg-[#1b2e4b] rounded-xl shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] p-3 flex items-center justify-between text-gray-500 font-semibold min-w-[625px] hover:text-primary transition-all duration-300 hover:scale-[1.01]">
                        <div className="user-profile">
                            <img src={`/assets/images/${item.thumb}`} alt="image" className="w-8 h-8 rounded-md object-cover" />
                        </div>
                        <div>{item.name}</div>
                        <div>{item.email}</div>
                        <div className={`badge border-2 border-dashed ${item.statusClass}`}>{item.status}</div>
                        <div className="cursor-pointer">
                            <svg> ... </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
