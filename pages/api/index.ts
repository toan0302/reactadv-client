// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { iCategory } from '../interface'

const response =[
    {
        category_id: "1",
        name: "product 01",
        image: "pr01.jpg",
        parent_id: 0,
        sort_order: 1,
        status: 1,
        date_added:199909999,
        date_modified: 199909999,
    },
    {
        category_id: "2",
        name: "product 02",
        image: "pr02.jpg",
        parent_id: 0,
        sort_order: 1,
        status: 1,
        date_added:199909999,
        date_modified: 199909999,
    }
];

export async function getCategory() {
    return response;
}

export async function getCategoryDetail(id:string) {
    const findData =  response.find(itm =>itm.category_id=id)
    return findData;
}
