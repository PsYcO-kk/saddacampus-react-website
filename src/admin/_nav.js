export default {
	items: [
		{
			name: 'Dashboard',
			url: '/dashboard',
			icon: 'icon-speedometer',
		},
		{
			name: 'Administrators',
			url: '/administrators',
			icon: 'icon-people',
			children: [
				// {
				// 	name: 'Show All',
				// 	url: '/administrators',
				// 	icon: 'icon-list',
				// },
				{
					name: 'Create Admin',
					url: '/administrators/create',
					icon: 'icon-user-follow',
				},
			],
		},
	],
};
