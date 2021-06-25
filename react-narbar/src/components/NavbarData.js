import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SideBarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Revenue',
                path: '/overview/Revenue',
                icon: <IoIcons.IoIosPaper />,
            }
        ]
    },
    {
        title: 'Reports',
        path: '/Reports',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Reports',
                path: '/Reports/Reports1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Reports2',
                path: '/Reports/Reports2',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Reports3',
                path: '/Reports/Reports3',
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: 'Products',
        path: '/Products',
        icon: <FaIcons.FaCartPlus />,
    },

]
