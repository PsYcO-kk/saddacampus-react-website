export const superNav = {
	items: [
		{
			name: 'Dashboard',
			url: '/admin/dashboard',
			icon: 'icon-speedometer',
		},
		{
			name: 'Administrators',
			url: '/admin/administrators',
			icon: 'fas fa-user-secret',
			children: [
				{
					name: 'Show All',
					url: '/admin/administrators',
					icon: 'fas fa-list',
				},
				{
					name: 'Create Admin',
					url: '/admin/administrators/create',
					icon: 'fas fa-user-plus',
				},
			],
		},
		{
			name: 'Merchants',
			url: '/admin/merchants',
			icon: 'fas fa-users',
			children: [
				{
					name: 'Show All',
					url: '/admin/merchants',
					icon: 'fas fa-list',
				},
				{
					name: 'Create Merchant',
					url: '/admin/merchants/create',
					icon: 'fas fa-user-plus',
				},
			],
		},
		{
			name: 'Businesses',
			url: '/admin/businesses',
			icon: 'fas fa-briefcase',
			children: [
				{
					name: 'Show All',
					url: '/admin/businesses',
					icon: 'fas fa-list',
				},
				{
					name: 'Restaurants',
					url: '/admin/businesses/restaurants',
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
			url: '/admin/dashboard',
			icon: 'icon-speedometer',
		},
	],
};
