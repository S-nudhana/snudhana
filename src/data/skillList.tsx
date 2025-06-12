import { CgWebsite } from "react-icons/cg";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import { FaUserGroup } from "react-icons/fa6";

import type { Skill } from '../types/skill';

export const skillList: Skill[] = [
    {
        icon: <CgWebsite />,
        title: 'Web Development',
        description: 'Developing responsive, interactive and dynamic websites using modern web technologies .'
    },
    {
        icon: <IoPhonePortraitOutline />,
        title: 'Mobile Development',
        description: 'Creating mobile applications compatible with both Android and iOS platforms.'
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