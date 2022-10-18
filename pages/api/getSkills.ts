import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { SkillSet } from "../../typings";


const query = groq`
    *[_type == "skill"]
`;

type Data = {
    skills: SkillSet[],
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const skills: SkillSet[] = await sanityClient.fetch(query);
    res.status(200).json({ skills });
}