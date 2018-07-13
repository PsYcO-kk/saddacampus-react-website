export const superNav = {
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
		{
			name: 'Merchants',
			url: '/merchants',
			icon: 'icon-people',
			children: [
				// {
				// 	name: 'Show All',
				// 	url: '/administrators',
				// 	icon: 'icon-list',
				// },
				{
					name: 'Create Merchant',
					url: '/merchants/create',
					icon: 'icon-user-follow',
				},
			],
		},
	],
};

export const maintainerNav = {
	items: [
		{
			name: 'Dashboard',
			url: '/dashboard',
			icon: 'icon-speedometer',
		},
	],
};
