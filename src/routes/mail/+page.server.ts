import { RESEND_API_KEY } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import type { Actions } from './$types';

const resend = new Resend(RESEND_API_KEY);

export const actions: Actions = {
	default: async () => {
		const { data, error } = await resend.emails.send({
			// Resend's official example uses onboarding@resend.dev
			from: 'Acme <onboarding@resend.dev>',
			// Safe test inbox provided by Resend
			to: ['delivered@resend.dev'],
			subject: 'SvelteKit + Resend test',
			html: '<p>It works.</p>'
		});

		if (error) {
			console.error(error);
			return fail(500, {
				success: false,
				message: error.message ?? 'Email failed'
			});
		}

		return {
			success: true,
			message: 'Email request accepted by Resend',
			emailId: data?.id ?? null
		};
	}
};
