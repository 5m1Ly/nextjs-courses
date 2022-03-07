import { useRouter } from 'next/router';

// http://localhost:3000/news/anything

function articleContent() {

	const router = useRouter();
	const article = router.query.article;

	if (typeof article === 'string') {

		console.log(article);

	}

	return <h1>The News Article page</h1>

}

export default articleContent;