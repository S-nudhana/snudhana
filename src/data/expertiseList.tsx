import { GoDatabase } from "react-icons/go";
import { FaUserGroup } from "react-icons/fa6";
import { PiNetwork } from "react-icons/pi";
import { LuAppWindowMac } from "react-icons/lu";

import networkingBasics from '../../public/images/networking-basics.png';
import type { Expertise } from '../types/Expertise';

export const expertiseList: Expertise[] = [
    {
        icon: <LuAppWindowMac />,
        title: 'Web Development',
        description: 'Developing responsive, interactive and dynamic websites using modern web technologies .'
    },
    {
        icon: <PiNetwork  />,
        title: 'Networking',
        description: 'Proficient in configuring and troubleshooting Cisco network devices and config nginx + reverse proxy for server.',
        img: [networkingBasics.src, networkingBasics.src]
    },
    {
        icon: <FaUserGroup />,
        title: 'UX Design',
        description: 'Designing engaging, user-centric interfaces through thorough research, and prototyping.'
    },
    {
        icon: <GoDatabase />,
        title: 'Database Design',
        description: 'Design structuring and normalizing databases to eliminate redundancy, ensure data integrity, and optimize query efficiency.'
    }
];