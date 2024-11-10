export interface MenuItemPrefix {
  type: string
  name: string
}

export interface MenuItemSuffix {
  type: string
  level: string
  text: string | number | null
}

export interface MenuType {
  groupName: string
  opened?: boolean
  children: Array<MenuItem>
}

export interface MenuItem {
  name: string
  permiso?: string
  subtitle?: string
  url?: string,
  visible? : boolean,
  prefix?: MenuItemPrefix
  suffix?: MenuItemSuffix
  children?: Array<MenuItem>
  parentUrl?: string
  callback?: string | Function
  disabled?: boolean
}
