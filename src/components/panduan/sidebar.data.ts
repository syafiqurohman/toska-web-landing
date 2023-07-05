export interface MenuItem {
  id: string
  label: string
  subMenuItems?: MenuItem[]
}

export const sidebarData: MenuItem[] = [
  {
    id: 'owner',
    label: 'Owner',
    subMenuItems: [
      {
        id: 'sales',
        label: 'Sales',
      },
      {
        id: 'inventory',
        label: 'Inventory',
      },
      {
        id: 'reports',
        label: 'Reports',
      },
    ],
  },
  {
    id: 'root',
    label: 'Root',
    subMenuItems: [
      {
        id: 'users',
        label: 'Users',
      },
      {
        id: 'permissions',
        label: 'Permissions',
      },
    ],
  },
  {
    id: 'kasir',
    label: 'Kasir',
    subMenuItems: [
      {
        id: 'orders',
        label: 'Orders',
      },
      {
        id: 'transactions',
        label: 'Transactions',
      },
    ],
  },
  {
    id: 'admin',
    label: 'Admin',
    subMenuItems: [
      {
        id: 'settings',
        label: 'Settings',
      },
    ],
  },
]
