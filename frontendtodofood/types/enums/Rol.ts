export const Role = {
    admin: "ADMIN",
    user: "CUSTOMER"
} as const

export type Role = (typeof Role)[keyof typeof Role];
