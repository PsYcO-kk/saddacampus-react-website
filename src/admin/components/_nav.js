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
		{
			name: 'Businesses',
			url: '/businesses',
			icon: 'fas fa-briefcase',
			children: [
				{
					name: 'Show All',
					url: '/businesses',
					icon: 'fas fa-list',
				},
				{
					name: 'Restaurants',
					url: '/businesses/restaurants',
					icon: 'fas fa-utensils',
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
