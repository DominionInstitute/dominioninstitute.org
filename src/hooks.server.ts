import redirects from '$lib/redirects.json' assert { type: 'json' }

const pathToRedirect: { [key: string]: string } = {}

for (const [ original, to ] of redirects) {
	if (pathToRedirect[original]) console.log('Duplicate redirect!', original)
	pathToRedirect[original] = to
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const location = pathToRedirect[event.url.pathname] || pathToRedirect[event.url.pathname + '/']
	if (location) {
		console.log('REDIRECT:', event.url.pathname, '=>', location)
		return new Response(null, {
			status: 301,
			headers: { location },
		})
	}
	return resolve(event);
}
