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
			icon: 'fas fa-user-secret',
			children: [
				{
					name: 'Show All',
					url: '/administrators',
					icon: 'fas fa-list',
				},
				{
					name: 'Create Admin',
					url: '/administrators/create',
					icon: 'fas fa-user-plus',
				},
			],
		},
		{
			name: 'Merchants',
			url: '/merchants',
			icon: 'fas fa-users',
			children: [
				{
					name: 'Show All',
					url: '/merchants',
					icon: 'fas fa-list',
				},
				{
					name: 'Create Merchant',
					url: '/merchants/create',
					icon: 'fas fa-user-plus',
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
