// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import SanityClient from "@sanity/client";
import type { NextApiRequest, NextApiResponse } from "next";

const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	useCdn: process.env.NODE_ENV === "production",
	token: process.env.SANITY_API_TOKEN,
	apiVersion: "2021-08-31",
};
const client = SanityClient(config);
export default async function comment(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { _id, name, email, comment } = JSON.parse(req.body);

	try {
		await client.create({
			_type: "comment",
			post: {
				_type: "reference",
				_ref: _id,
			},
			name,
			email,
			comment,
		});
	} catch (err) {
		return res
			.status(500)
			.json({ message: `couldn't submit comment`, err });
	}
	return res.status(200).json({ message: "comment submitted" });
}
