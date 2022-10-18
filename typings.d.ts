/* eslint-disable no-undef */
interface SanityBody {
    _createdAt: string,
    _id: string,
    _rev: string,
    _updatedAt: string,
}
interface Image {
    _type: 'image',
    assest: {
        _ref: string,
        _type: 'reference',
    }
}

export interface Technology extends SanityBody {
    _type: 'skill',
    image: Image,
    progress: number,
    title: string,
}

export interface SkillSet extends SanityBody {
    _type: 'skill',
    image: Image,
    progress: number,
    title: string,
}

export interface Experiences extends SanityBody { 
    _type: 'experience',
    company: string,
    companyImage: Image,
    dateStarted: date,
    dateEnded: date,
    isCurrentlyWorkingHere: boolean,
    jobTitle: string,
    points: string[],
    technologies: Technology[],
}

export interface Project extends SanityBody {
    title: string,
    _type: 'project',
    image: Image,
    linkToBuild: string,
    summary: string,
    technologies: Technology[]
}

export interface PageInfo extends SanityBody {
    _type: 'pageInfo',
    address: string,
    backgroundInfo: string,
    email: string,
    role: string,
    heroImage: Image,
    name: string,
    phoneNumber: string,
    profilePic: Image,
}


export interface Social extends SanityBody {
    _type: 'social',
    title: string,
    url: string,
}