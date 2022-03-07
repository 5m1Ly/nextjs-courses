import Link from 'next/link';
import { Fragment } from 'react';
// http://localhost:3000/news

function pageContent() {

	return <Fragment>
		<h1>The News page</h1>
		<ul>
			<li><Link href="/news/A11111">This is the first article</Link></li>
			<li><Link href="/news/A11112">This is the second article</Link></li>
		</ul>
	</Fragment>

}

export default pageContent;