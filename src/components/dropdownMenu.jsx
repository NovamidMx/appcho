import { useState } from 'react';

function DropdownMenu() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        // <div tabIndex={0} className="collapse bg-gray-500 rounded shadow-md border border-base-300 rounded-box">
        //     <input type="checkbox" />
        //     <div className="collapse-title text-xl font-medium">
        //         Focus me to see conte
        //     </div>
        //     <div className="collapse-content">
        //         <ul>
        //             <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300">Link 1</a></li>
        //             <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300">Link 2</a></li>
        //             <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300">Link 3</a></li>
        //         </ul>
        //     </div>
        // </div>
        <div>
            <p className="md:space-x-1 space-y-1 md:space-y-0 mb-4">
                <a className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Link with href
                </a>
                <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Button with data-bs-target
                </button>
            </p>
            <div className="collapse" id="collapseExample">
                <div className="block p-6 rounded-lg shadow-lg bg-white">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>
        </div>
    );
}

export default DropdownMenu;