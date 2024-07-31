import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

const navigation = [
    { name: 'Employees', href: '/Employees' },
    { name: 'Customers', href: '/Customers' },
    { name: 'Projects', href: '/other' },
    { name: 'Calendar', href: '/other2' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header(props) {
    return (
    <>
        <Disclosure as="nav" className="bg-gray-800">
        <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-12 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/webpack/webpack-original.svg"
                                className="h-8 w-auto"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        /*className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'no-underline rounded-md px-3 py-2 text-sm font-medium',
                                        )}*/
                                       className={({isActive}) => {
                                            return 'rounded-md px-3 py-2 text-sm font-medium no-underline ' +
                                            (!isActive 
                                                ?'text-gray-300 hover:bg-gray-700 hover:text-white' 
                                                : 'bg-gray-900 text-white')
                                       }}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="h-6 w-6" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        alt=""
                                        src="https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1     "
                                        className="h-8 w-8 rounded-full"
                                    />
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <MenuItem>
                                    <a href="#" className="no-underline block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Your Profile
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="no-underline block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Settings
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="no-underline block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Sign out
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        /*<DisclosureButton*/
                        <NavLink
                            key={item.name}
                            /*as="a"*/
                            to={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            /*className={classNames(
                                item.current ? 'no-underlinebg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'no-underline block rounded-md px-3 py-2 text-base font-medium',
                            )}*/
                                className={({isActive}) => {
                                    return 'block rounded-md px-3 py-2 text-base font-medium no-underline ' +
                                    (!isActive 
                                        ?'text-gray-300 hover:bg-gray-700 hover:text-white' 
                                        :'bg-gray-900 text-white')
                               }}
                        >
                        
                            {item.name}
                        </NavLink>
                    ))}
                    
                </div>
            </DisclosurePanel>   
            
        </>  
           
    
        </Disclosure>
        <div className='bg-gray-300'>
        <div className='max-w-7xl mx-auto App  min-h-screen p-2'>{props.children}</div>
        </div>
    </>    
    );
}