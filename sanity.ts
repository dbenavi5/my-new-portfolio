import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
    dataset: 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: '2022-08-09',
    useCdn: true,
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => 
    createImageUrlBuilder(config).image(source);