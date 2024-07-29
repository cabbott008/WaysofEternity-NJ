import { addPublicationJsonLd } from '@starter-kit/utils/seo/addPublicationJsonLd';
import { getAutogeneratedPublicationOG } from '@starter-kit/utils/social/og';
import request from 'graphql-request';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { Button } from '../components/button';
import { Container } from '../components/container';
import { AppProvider } from '../components/contexts/appContext';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { HeroPost } from '../components/hero-post';
import { ArticleSVG, ChevronDownSVG } from '../components/icons';
import { Layout } from '../components/layout';
import { MorePosts } from '../components/more-posts';
// import { Navbar } from '../components/navbar';
import { SecondaryPost } from '../components/secondary-post';
// import { Search } from '../components/searchbar.tsx';
import {
	MorePostsByPublicationDocument,
	MorePostsByPublicationQuery,
	MorePostsByPublicationQueryVariables,
	PageInfo,
	PostFragment,
	PostsByPublicationDocument,
	PostsByPublicationQuery,
	PostsByPublicationQueryVariables,
	PublicationFragment,
} from '../generated/graphql';
import { DEFAULT_COVER } from '../utils/const';

const SubscribeForm = dynamic(() =>
	import('../components/subscribe-form').then((mod) => mod.SubscribeForm),
);

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

type Props = {
	publication: PublicationFragment;
	initialAllPosts: PostFragment[];
	initialPageInfo: PageInfo;
};

export default function Index({ publication, initialAllPosts, initialPageInfo }: Props) {
	const [allPosts, setAllPosts] = useState<PostFragment[]>(initialAllPosts);
	const [pageInfo, setPageInfo] = useState<Props['initialPageInfo']>(initialPageInfo);
	const [loadedMore, setLoadedMore] = useState(false);

	const loadMore = async () => {
		const data = await request<MorePostsByPublicationQuery, MorePostsByPublicationQueryVariables>(
			GQL_ENDPOINT,
			MorePostsByPublicationDocument,
			{
				first: 10,
				host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
				after: pageInfo.endCursor,
			},
		);
		if (!data.publication) {
			return;
		}
		const newPosts = data.publication.posts.edges.map((edge) => edge.node);
		setAllPosts([...allPosts, ...newPosts]);
		setPageInfo(data.publication.posts.pageInfo);
		setLoadedMore(true);
	};

	const firstPost = allPosts[0];
	const secondaryPosts = allPosts.slice(0, 2).map((post) => {
		return (
			<SecondaryPost
				key={post.id}
				title={post.title}
				coverImage={post.coverImage?.url || DEFAULT_COVER}
				slug={post.slug}
				excerpt={post.brief}
			/>
		);
	});
	const morePosts = allPosts.slice(2);

	return (
		<AppProvider publication={publication}>
			<Layout>
				<Head>
					<title className="text-blue-600">
						{publication.displayTitle || publication.title || 'Hashnode Blog Starter Kit'}
					</title>
					<meta
            className="text-blue-600"
						name="description"
						content={
							publication.descriptionSEO || publication.title || `${publication.author.name}'s Blog`
						}
					/>
					<meta property="twitter:card" content="summary_large_image" />
					<meta
						property="twitter:title"
						content={publication.displayTitle || publication.title || 'Hashnode Blog Starter Kit'}
					/>
					<meta
						property="twitter:description"
						content={
							publication.descriptionSEO || publication.title || `${publication.author.name}'s Blog`
						}
					/>
					<meta
						property="og:image"
						content={publication.ogMetaData.image || getAutogeneratedPublicationOG(publication)}
					/>
					<meta
						property="twitter:image"
						content={publication.ogMetaData.image || getAutogeneratedPublicationOG(publication)}
					/>
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(addPublicationJsonLd(publication)),
						}}
					/>
				</Head>
				<Header />
				<Container className="flex flex-col items-stretch gap-10 pt-10 px-5 pb-10">

					{allPosts.length === 0 && (
						<div className="grid grid-cols-1 py-20 lg:grid-cols-3">
							<div className="col-span-1 flex flex-col items-center gap-5 text-center text-slate-700 dark:text-neutral-400 lg:col-start-2">
								<div className="w-20">
									<ArticleSVG className="stroke-current" />
								</div>
								<p className="text-xl font-semibold ">
									Hang tight! We&apos;re drafting the first article.
								</p>
							</div>
						</div>
					)}

					<div className="grid items-start gap-6 xl:grid-cols-3">
						<div className="col-span-2">
							  <p className="pb-10 pl-20 pr-20 text-center text-xl">"Ask for the ancient paths, where the good way is; and walk in it, and find rest for your souls." - Jeremiah 6:16</p>
              <div className="border-4 border-blue-600 rounded-3xl p-4 bg-french-gray text-oynx-gray">
                <p>At Ways of Eternity, we are committed to invest our lives as the Moravian Missionaries who sold themselves into slavery back in 1732 said as they cast off never to be seen again..."May the Lamb that was slain receive the reward of his suffering."</p>
                <div className="grid grid-cols-2 flex flex-col gap-5 xl:grid-cols-2 pt-5">
                  <div className="col-span-1 grid-cols-1 justify-items-center">
                    <h2 className="text-center">Who is Yah?</h2>
                    <p className="text-center">1 Timothy 4:1 says, "Now the Spirit speaketh expressly, that in the latter times some shall depart from the faith, giving heed to seducing spirits, and doctrines of devils." This pillar is all about who God actually is, how we relate to Him, and what He expects of us. Let's not mess this one up!</p>
                  </div>
                  <div className="col-span-1 grid-cols-2 justify-items-center">
                    <h2 className="text-center">Family</h2>
                    <p className="text-center">The family is the basic building block of the Kingdom and Bible Culture. Without strong families built on the foundation of the Word of God, the spiritual energy is drained out of the home. When divine order prevails, synergistic power is released exponentially that transcends family.</p>
                  </div>
                  <div className="col-span-1 grid-cols-3 justify-items-center">
                    <h2 className="text-center">Authority</h2>
                    <p className="text-center">Yah is building an assembly that the gates of hell shall not prevail against. Deliverance, healing, finances, signs, and wonders are the birthright of the born again. It is time we stop trusting in the arm of the flesh and live in the power of the Spirit. For in Him we do live, move, and have our being.</p>
                  </div>
                  <div className="col-span-1 grid-cols-4 justify-items-center">
                    <h2 className="text-center">Fellowship</h2>
                    <p className="text-center">Fellowship is not accomplished by being in the same place, listening to the same person. "And He Himself gave some to be apostles, some prophets, some evangelists, and some pastors and teachers, for the equipping of the saints for the work of ministry." This involves playing active roles!</p>
                  </div>
                </div>
                <div className="pt-5">
                    <h2 className="">Prayer Session Needed?</h2>
                    <p>Obviously, we believe in restoration of Bible Culture. Which means we believe that divine healing, deliverance, supernatural provision, signs, and wonders are for today. If you need prayer, send a request ahead of time and we'll make sure that you get a call back to be prayed for live right over the phone.</p>
                </div>
              </div>
						</div>
						<div className="col-span-1 flex flex-col gap-6">{secondaryPosts}</div>
					</div>

					{allPosts.length > 0 && (
						<div className="bg-primary-50 grid grid-cols-4 rounded-lg px-5 py-5 dark:bg-neutral-900 md:py-10">
							<div className="col-span-full md:col-span-2 md:col-start-2">
								<h2 className="text-primary-600 dark:text-primary-500 mb-5 text-center text-lg font-semibold">
									Subscribe to our newsletter for updates and new content.
								</h2>
								<SubscribeForm />
							</div>
						</div>
					)}

					{morePosts.length > 0 && (
						<>
							<MorePosts context="home" posts={morePosts} />
							{!loadedMore && pageInfo.hasNextPage && pageInfo.endCursor && (
								<div className="flex w-full flex-row items-center justify-center">
									<Button
										onClick={loadMore}
										type="outline"
										icon={<ChevronDownSVG className="h-5 w-5 stroke-current" />}
										label="Load more posts"
									/>
								</div>
							)}
							{loadedMore && pageInfo.hasNextPage && pageInfo.endCursor && (
								<Waypoint onEnter={loadMore} bottomOffset={'10%'} />
							)}
						</>
					)}
				</Container>
				<Footer />
			</Layout>
		</AppProvider>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const data = await request<PostsByPublicationQuery, PostsByPublicationQueryVariables>(
		GQL_ENDPOINT,
		PostsByPublicationDocument,
		{
			first: 10,
			host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
		},
	);

	const publication = data.publication;
	if (!publication) {
		return {
			notFound: true,
		};
	}
	const initialAllPosts = publication.posts.edges.map((edge) => edge.node);

	return {
		props: {
			publication,
			initialAllPosts,
			initialPageInfo: publication.posts.pageInfo,
		},
		revalidate: 1,
	};
};
