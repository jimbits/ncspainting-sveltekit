import { RESEND_API_KEY } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import type { Actions } from './$types';

const resend = new Resend(RESEND_API_KEY);

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const phone = data.get('phone') as string;
		const email = data.get('email') as string;
		const contactMethod = data.get('contactMethod') as string;
		const projectType = data.get('projectType') as string;
		const serviceArea = data.get('serviceArea') as string;
		const projectDescription = data.get('projectDescription') as string;

		if (!name || !phone || !email) {
			return fail(400, { success: false, message: 'Name, phone, and email are required.' });
		}

		const { data: emailData, error } = await resend.emails.send({
			from: 'NCS Painting <onboarding@resend.dev>', // swap to ncs domain after Resend domain verification
			to: ['jimbits@jimhortons.com'], // Resend account email — swap to info@ncspainting.com after domain verification
			subject: `New Quote Request from ${name}`,
			html: `
				<h2>New Quote Request — NCS Painting</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Phone:</strong> ${phone}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Contact Preference:</strong> ${contactMethod || 'Not specified'}</p>
				<p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
				<p><strong>Service Area:</strong> ${serviceArea || 'Not specified'}</p>
				<p><strong>Description:</strong> ${projectDescription || 'Not provided'}</p>
			`
		});

		if (error) {
			console.error('Resend error:', error);
			return fail(500, { success: false, message: 'Failed to send your request. Please try again.' });
		}

		return { success: true, message: "Thanks! We'll be in touch shortly.", emailId: emailData?.id };
	}
};
