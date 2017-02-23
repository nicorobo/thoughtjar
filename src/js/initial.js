export const categories = {
	cat1469482680613: {
		label: 'Category 1',
		color: "#1ABC9C",
		value: "cat1469482680613"
	},
	cat1469482688877: {
		label: 'Category 2',
		color: "#F1C40F",
		value: "cat1469482688877"
	},
	cat1468028016486: {
		label: 'Category 3',
		color: "#9B59B6",
		value: "cat1468028016486"
	},
};

export const thoughts = [
	{
		id: 0,
		title: "Welcome to your Thoughtjar!",
		description: "Thoughtjar was created to help you organize ideas and thoughts into categories.",
		category: "cat1469482680613",
		createdOn: Date.now()
	},
	{
		id: 1,
		title: "Creating a Thought",
		description: "To **create** a thought, press the plus sign at the top of the page.",
		category: "cat1469482688877",
		createdOn: Date.now() - 1
	},
	{
		id: 2,
		title: "Editing and Deleting a Thought",
		description: "To **edit** a thought, press on the pencil icon in the thought's upper right corner. When you are finished, press on the checkmark icon. \n\nTo **delete** a thought, press on the trash icon in the thought's upper right corner.",
		category: "cat1469482688877",
		createdOn: Date.now() - 2
	},
	{
		id: 3,
		title: "Managing Categories",
		description: "You can manage your Thoughtjar's categories in the settings menu by clicking on the gear icon in the upper right corner of this page.",
		category: "cat1469482688877",
		createdOn: Date.now() - 3
	},
	{
		id: 4,
		title: "Writing Thoughts",
		description: "Thoughtjar uses a small subset of features from Markdown, a text-to-HTML conversion tool that makes writing for the web easier!\n\n *Line Break:* To create a line break, hit enter twice.\n\n*Bold:* To make a section of text bold, wrap it in double asterisks. \\*\\*I'm bold!\\*\\* becomes **I'm bold!**.\n\n*Emphasis:* To emphasize a section of text, make it italic by wrapping it in single asterisks. \\*I'm emphasized!\\* becomes *I'm emphasized!*\n\n*Links:* To create a hyperlink from a section of text, wrap the text in brackets and follow it with the URL wrapped in parentheses. \\[Visit meadowlab.io](https://meadowlab.io) becomes [Visit meadowlab.io](http://meadowlab.io).",
		category: "cat1468028016486",
		createdOn: Date.now() - 4
	},
	{
		id: 5,
		title: "Happy Thinking!",
		description: "You can use your Thoughtjar to keep track of *project ideas*, stay on top of *homework*, or even as a *shopping list*!\n\nNow you can delete all of the existing *thoughts* to begin fresh!",
		category: "cat1469482680613",
		createdOn: Date.now() - 5
	},
]