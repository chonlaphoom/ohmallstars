export interface LinkedInPost {
	id: string;
	embedUrl: string;
	height: number;
	width: number;
}

export const linkedInPosts: LinkedInPost[] = [
	{
		id: "post-1",
		embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7426278078160523266?collapsed=1",
		height: 286,
		width: 504,
	},
	{
		id: "post-2",
		embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7390774403514601472?collapsed=1",
		height: 692,
		width: 504,
	},
	{
		id: "post-3",
		embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7360954540809994243?collapsed=1",
		height: 741,
		width: 504,
	},
];
