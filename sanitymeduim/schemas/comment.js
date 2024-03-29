export default {
	name: "comment",
	title: "Comment",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "approved",
			title: "Approved",
			type: "boolean",
			description: "Comments won't show on without approval",
		},
		{
			name: "email",
			type: "string",
		},
		{
			name: "comment",
			type: "string",
		},
		{
			name: "post",
			title: "Post",
			type: "reference",
			to: { type: "post" },
		},
	],
};
