import { GoDatabase } from "react-icons/go";
import { FaUserGroup } from "react-icons/fa6";
import { PiNetwork } from "react-icons/pi";
import { LuAppWindowMac } from "react-icons/lu";

import type { Expertise } from '@/types/expertise';
import networkingBasic from '../../public/images/Cert/network-basic.png'
import networkingConfig from '../../public/images/Cert/network-config.png';
import networkingSecure from '../../public/images/Cert/network-secure.png';
import awsFoundations from '../../public/images/Cert/aws-foundation.png';

export const expertiseList: Expertise[] = [
    {
        icon: <LuAppWindowMac />,
        title: 'Web Development',
        description: 'Developing responsive, interactive and dynamic websites using modern web technologies .'
    },
    {
        icon: <PiNetwork />,
        title: 'Network',
        description: 'Proficient in configuring and troubleshooting Cisco network devices and linux server.',
        longDescription: 'Proficient in configuring, managing, and troubleshooting Cisco routers and switches and experienced in set up and manage Linux ubuntu servers network for web hosting and configuring NGINX as a reverse proxy within networked environments.',
        link: [
            {
                text: "Cisco Networking + Configuration",
                url: "https://www.credly.com/badges/d7fdb4a2-823b-4beb-b52e-5bf0f7b07df0/public_url",
                img: networkingConfig.src
            },
            {
                text: "Cisco Networking Basics",
                url: "https://www.credly.com/badges/e74ff672-2296-4eb4-bbba-2a44061500d8/public_url",
                img: networkingBasic.src
            },
            {
                text: "Network Support and Security",
                url: "https://www.credly.com/badges/1927035c-e153-4f62-8107-aa6dc087c722/public_url",
                img: networkingSecure.src
            },
            {
                text: "AWS Academy Graduate - AWS Academy Cloud Foundations",
                url: "https://www.credly.com/badges/e4f6787f-4383-40ba-8d55-d6bf92fcb6ab/public_url",
                img: awsFoundations.src
            }
        ]
    },
    {
        icon: <FaUserGroup />,
        title: 'UX/UI Design',
        description: 'Designing engaging, user-centric interfaces through thorough research, and prototyping.'
    },
    {
        icon: <GoDatabase />,
        title: 'Database Design',
        description: 'Design structuring and normalizing databases to eliminate redundancy, ensure data integrity, and optimize query efficiency.'
    }
];