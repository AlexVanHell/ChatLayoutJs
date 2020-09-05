import { MessagesGroupProps } from '../components/RightContent/MessagesGroup/MessagesGroup';

export const TEST_MESSAGES_MOCK: MessagesGroupProps[] = [
	{
		position: 'right',
		image: {
			text: 'AV',
		},
		items: [
			{
				type: 'text',
				text: 'Hello world',
			},
			{
				type: 'photo',
				text: 'Hello world',
				content: {
					src:
						'https://www.yourtrainingedge.com/wp-content/uploads/2019/05/background-calm-clouds-747964.jpg',
				},
			},
		],
	},
	{
		position: 'left',
		image: {
			text: 'AV',
		},
		items: [
			{
				type: 'photo',
				text:
					'Hello world, this is a longer text for testing photos. Lorem ipsum dolor sit amet',
				content: {
					src:
						'https://i.pinimg.com/originals/63/31/43/63314356111086235a76d77849ff224d.jpg',
				},
			},
			{
				type: 'text',
				text: 'Hello world',
			},
		],
	},
	{
		position: 'right',
		image: {
			text: 'AV',
		},
		items: [
			{
				type: 'file',
				content: {
					src: '',
					type: 'archive',
					name: 'Foo.zip',
				},
			},
			{
				type: 'file',
				text: 'Text file description',
				content: {
					src: '',
					type: 'text',
					name: 'SuperFileMegaPro.txt',
				},
			},
			{
				type: 'file',
				content: {
					src: '',
					type: 'video',
					name: 'SuperVideoFile.mp4',
				},
			},
			{
				type: 'file',
				content: {
					src: '',
					type: 'audio',
					name: 'SuperAudioFile.mp3',
				},
			},
			{
				type: 'file',
				text: 'Document file description',
				content: {
					src: '',
					type: 'document',
					name: 'SuperDocumentFile.docx',
				},
			},
		],
	},
	{
		position: 'left',
		image: {
			text: 'AV',
		},
		items: [
			{
				type: 'file',
				text: 'File Image Caption',
				content: {
					src: '',
					type: 'image',
					name: 'SuperImageFile.png',
				},
			},
		],
	},
];
