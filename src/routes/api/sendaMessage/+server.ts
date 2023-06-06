import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { eMail } from '$lib/db/collections';

export const POST = (async ({ request }) => {
	const { name, email, message } = await request.json();

	await eMail.insertOne({
		name,
		email,
		message
	});

	return json({ success: true });
}) satisfies RequestHandler;
