import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { DEFAULT_COVER } from '../utils/const';
import { CoverImage } from './cover-image';
// import { DateFormatter } from './date-formatter';
import { Search } from './searchbar';

type Props = {
	title: string;
	coverImage: string;
	// date: string;
	excerpt: string;
	slug: string;
};

export const SecondaryPost = ({ title, coverImage, excerpt, slug }: Props) => {
	const postURL = `/${slug}`;

	return (
		<section className="grid items-start gap-5 md:grid-cols-1">
      <div className="col-span-full">
        <Search/>
      </div>
			<div className="col-span-1">
				<CoverImage
					title={title}
					src={resizeImage(coverImage, { w: 1600, h: 840, c: 'thumb' }, DEFAULT_COVER)}
					slug={slug}
				/>
			</div>
			<div className="col-span-1 flex flex-col gap-2">
				<h1 className="text-lg font-semibold leading-tight text-slate-800 dark:text-neutral-50">
					<Link
						href={postURL}
						className="hover:text-primary-600 dark:hover:text-primary-500 hover:underline"
					>
						{title}
					</Link>
				</h1>
				<Link href={postURL}>
					<p className="text-md leading-snug text-slate-500 dark:text-neutral-400">
						{excerpt.length > 150 ? excerpt.substring(0, 150) + '…' : excerpt}
					</p>
				</Link>
			</div>
		</section>
	);
};
